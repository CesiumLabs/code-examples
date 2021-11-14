#include <stdio.h>

int value_in_array(float val, float arr[], float length) {
    for(int i = 0; i < length; i++) {
        if(arr[i] == val) {
            return 1;
	}
    }
    return 0;
}

int main() {
	float arr1[] = {10, 5, 8};
	float arr2[] = {13, 1, 7};
	printf("%d\n", value_in_array(5, arr1, (int)(sizeof(arr1)/sizeof(arr1[0]))));
	printf("%d", value_in_array(5, arr2, (int)(sizeof(arr2)/sizeof(arr2[0]))));
}
