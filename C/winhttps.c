// compiles in minGW and visual studio C++

#ifdef _MSC_VER
#include <windows.h>
#pragma comment(lib, "wininet.lib")
#endif

#include <wininet.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

/* utility function to dynamically push a string to another */
static void strpush(char ** str, const char * other, const unsigned long other_len) {
    const unsigned long str_len = strlen(*str);
    
    *str = realloc(*str, str_len + other_len);
    strcpy(*str + str_len, other);
}

/* windows apparently loves NULL uwu */
#define INTERNET_NEW(ua) \
    InternetOpenA(ua, INTERNET_OPEN_TYPE_PRECONFIG, NULL, NULL, 0)

#define INTERNET_HTTP_CONNECT(internet, hname, secure) \
    InternetConnectA(internet, hname, secure ? 443 : 80, NULL, NULL, INTERNET_SERVICE_HTTP, 0, 0)

#define INTERNET_HTTP_OPEN(connected, method, path, secure) \
    HttpOpenRequest(connected, method, path, NULL, NULL, NULL, secure ? INTERNET_FLAG_SECURE : 0, 0)

char * http_request(const char * method, const char * hostname, const char * path, const unsigned char secure) {
    /* create internet handle */
    HINTERNET internet = INTERNET_NEW("Mozilla/5.0");
    
    if (internet == NULL)
        return NULL;
    
    /* connect to hostname */
    HINTERNET connected = INTERNET_HTTP_CONNECT(internet, hostname, secure);
    
    if (connected == NULL) {
        InternetCloseHandle(internet);
        return NULL;
    }
    
    /* open connection */
    HINTERNET opened = INTERNET_HTTP_OPEN(connected, method, path, secure);
    
    if (opened == NULL) {
        InternetCloseHandle(internet);
        InternetCloseHandle(connected);
        return NULL;
    }
    
    char * output = NULL;
    
    /* send HTTP request */
    if (HttpSendRequestA(opened, NULL, 0, NULL, 0)) {
        output = NULL;
        
        while (1) {
            /* check if more data is available */
            DWORD size;
            if (!InternetQueryDataAvailable(opened, &size, 0, 0) || !size)
                break;
            
            /* request for the pooped out data */
            char * out = malloc(size + 1);
            if (!InternetReadFile(opened, out, size, &size) || !size) {
                free(out);
                break;
            }
            
            /* null terminate it */
            out[size] = 0;
            
            /* first iteration, directly allocate it */
            if (output == NULL) {
                output = malloc(size + 1);
                memcpy(output, out, size + 1);
                continue;
            }
            
            /* push buffer to the total string */
            strpush(&output, out, size);
            free(out);
        }
    }
    
    /* close all handles */
    InternetCloseHandle(internet);
    InternetCloseHandle(connected);
    InternetCloseHandle(opened);
    
    return output;
}

int main() {
    char * response = http_request(
        "GET",         /* request method */
        "example.com", /* request host name */
        "/",           /* request path */
        0              /* http (unsecure) request, use 1 for https. */
    );
    
    if (response != NULL) {
        printf("%s\n", response);
        free(response);
    } else {
        printf("Request failed. Error code: %d\n", GetLastError());
    }
    
    return 0;
}
