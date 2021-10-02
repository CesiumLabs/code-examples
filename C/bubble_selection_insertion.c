#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void selection(){
    int n,i,j,k,minIndex,temp,l;
    printf("enter the size of the array : ");
    scanf("%d",&n);

    printf("enter the element of array\n");
    int A[n];
    for(i=0;i<n;i++){
        scanf("%d",&A[i]);
    }
    printf("the given array is\n");
    for(i=0;i<n;i++){
        printf("%d",A[i]);
        printf(" ");
    }
    printf("\n");
     for(i=0;i<n;i++){
        minIndex=i;
        for(j=i+1;j<n;j++){
            if(A[j]<A[minIndex]){
                minIndex=j;
            }
        }
        temp=A[i];
        A[i]=A[minIndex];
        A[minIndex]=temp;
        
        printf("the %d pass is :",i+1);
		printf("\n");
		for(l=0;l<n;l++){
			printf("%d",A[l]);
			printf(" ");
			
        
    }
    printf("\n");
    
        }
        printf("\n");
        printf("the sorted array is \n");
    
            for(k = 0; k < n; k++)
            {
                printf("%d ", A[k]);
            }
}
void insertion(){
	int n, i,j,k,minIndex,temp,l;
    printf("enter the size of the array : ");
    scanf("%d",&n);

    printf("enter the element of array\n");
     
     int A[n];
    for(i=0;i<n;i++){
        scanf("%d",&A[i]);
    }
    
    printf("the given array is\n");
    for(i=0;i<n;i++){
        printf("%d",A[i]);
        printf(" ");
    }
    printf("\n");
    for(i=1;i<n;i++){
    	j=i-1;
    	temp=A[i];
    	while(j>=0 && temp<A[j]){
    		A[j+1]=A[j];
    		j--;
		}
		A[j+1]=temp;
		printf("the %d pass is :",i);
		printf("\n");
		for(l=0;l<n;l++){
			printf("%d",A[l]);
			printf(" ");
		}
		printf("\n");
	}
	 printf("the sorted array is \n");
	 
	 for(k = 0; k < n; k++)
        {
            printf("%d ", A[k]);
        }
        }
void bubble(){
		int n, i,j,k,minIndex,temp,l;
    printf("enter the size of the array : ");
    scanf("%d",&n);

    printf("enter the element of array\n");
     
     int A[n];
    for(i=0;i<n;i++){
        scanf("%d",&A[i]);
    }
    
    printf("the given array is\n");
    for(i=0;i<n;i++){
        printf("%d",A[i]);
        printf(" ");
    }
    printf("\n");
    
    for(i=0;i<n;i++){
    	for(j=0;j<n-i-1;j++){
    		if(A[j]>A[j+1]){
    			temp=A[j];
    			A[j]=A[j+1];
    			A[j+1]=temp;
			}
		}
		printf("the %d pass is :",i+1);
		printf("\n");
		for(l=0;l<n;l++){
			printf("%d",A[l]);
			printf(" ");
		}
		printf("\n");
	}
	printf("the sorted array is \n");
	 
	 for(k = 0; k < n; k++)
        {
            printf("%d ", A[k]);
        }
	
	

}
void main(){
    int a;
    printf("1 - press 1 to perform selection sort\n");
    printf("2 - press 2 to perform insertion sort\n");
    printf("3 - press 3 to perform bubble sort\n");
    printf("4 - press 4 to exit the pogram\n");
    
    printf("Enter your choice ");
    scanf("%d",&a);
    clock_t t;
    t = clock();
   
    switch(a){
        case 1: selection();
                break;
        case 2: insertion();
                break;
        case 3: bubble();
                break;
        case 4: exit(0);
                break;
        default:
                printf("You entered the wrong input...try again");
            
    }
    t = clock() - t;
    double time_taken = ((double)t)/CLOCKS_PER_SEC; // in seconds
    
    printf("\n");
    
    printf("program took %f to execute",time_taken);


}
