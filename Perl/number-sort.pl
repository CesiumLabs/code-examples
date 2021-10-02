#!/usr/bin/perl 

@n = (120, 944, 642, 5764, 2512, 7975, 956, 1); 
@x = sort { $a <=> $b } @n;  

print "@x"; 
