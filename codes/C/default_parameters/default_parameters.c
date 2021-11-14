#include <stdio.h>
#include "vrg.h"

#define sum(...)   vrg(sum, __VA_ARGS__)
#define sum1(x)    sumX(x, 0)
#define sum2(x, y) sumX(x, y) //make sure to replace sumX with whatever you named your function that you want to have default parameters ("sumX" here, see line 8)

void sumX(int num1, int num2) { //name this function anything you want, just make sure to not use the name you will want to use in the rest of your code ("sum" in this case)
	printf("The sum is %d\n", num1 + num2);
}

int main() {
	sum(6, 9);
	sum(13);
}