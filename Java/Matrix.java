package com.company;

import java.util.*;

public class Matrix
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m, n;
        System.out.println("ENTER SIZE");
        m = sc.nextInt();
        n = sc.nextInt();
        int A[][] = new int[m][n];
        int l = m * n;
        int c = 0, s = 0;
        int a[] = new int[l];
        System.out.println("ENTER ARRAY ELEMENTS");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                A[i][j] = sc.nextInt();
                a[c++] = A[i][j];
                if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
                    s += A[i][j];
                }
            }

        }
        System.out.println("ORIGINAL MATRIX");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(A[i][j]+"\t");
            }
            System.out.println();
        }
        System.out.println("SUM OF BOUNDARY ELEMENTS (UNSORTED) = "+s);
        int t;
        for (int i = 0; i < l-1; i++) {
            for (int j = 0; j < l-i-1; j++) {
                if(a[j]<a[j+1]){
                    t = a[j];
                    a[j]=a[j+1];
                    a[j+1]=t;
                }
            }
        }
        int s1=0;
        c=0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                A[i][j] = a[c++];
                if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
                    s1 += A[i][j];
                }
            }

        }
        System.out.println("SORTED MATRIX");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(A[i][j]+"\t");
            }
            System.out.println();
        }

        System.out.println("SUM OF BOUNDARY ELEMENTS (SORTED) = "+s1);
    }
}
