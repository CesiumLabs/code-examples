#!/usr/bin/perl 

my @n = (120, 944, 642, 5764, 2512, 7975, 956, 1); 
@n = sort {$a <=> $b} @n;  

printf("@n"); 
