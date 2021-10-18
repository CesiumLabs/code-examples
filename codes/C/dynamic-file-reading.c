#include <stdlib.h>
#include <conio.h>
#include <stdio.h>

typedef struct {
    size_t file_size;
    char * contents;
} _file_contents_t, * file_contents_t;

void free_file(file_contents_t f) {
    if (f->file_size != 0)
        free(f->contents);
    
    free(f);
}

file_contents_t read_file(const char * filename) {
    file_contents_t out = malloc(sizeof(_file_contents_t));
    
    out->file_size = 0;
    FILE * fp = fopen(filename, "r");
    
    if (fp == NULL) {
        free_file(out);
        return NULL;
    }
    
    fseek(fp, 0, SEEK_END);
    
    out->file_size = (size_t)ftell(fp);
    fseek(fp, 0, SEEK_SET);
    
    out->contents = malloc(out->file_size);
    fread(out->contents, out->file_size, 1, fp);
    fclose(fp);
    
    return out;
}

int main() {
    file_contents_t myfile = read_file("test.txt");
    
    printf("%s\n", myfile->contents);
    
    free_file(myfile);

    return 0;
}
