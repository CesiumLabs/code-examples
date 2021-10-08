#!/usr/bin/perl

use Time::HiRes qw( gettimeofday );
                      
# Function definition
sub forEachLoopMaxInteger {
    my $sum = 0;
   
    for( $n = $_[0]; $n > 0; $n = $n - 1 ) {
        $foo = $n / 17;
        $sum = $sum + n;
    }
    return $sum;
}

my $start = Time::HiRes::gettimeofday();
&forEachLoopMaxInteger(100000000);
my $end = Time::HiRes::gettimeofday();

printf("Perl: %.0fms\n", (($end - $start) * 1000) );
