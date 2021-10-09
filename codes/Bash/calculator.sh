# simple arithmatic calculator using bash script

### run this file by executing the commmand>>    bash calculator.sh -o '<operator>' -a <first number> -b <second number>

# flag 'o' is to choose operator among + - * /
# flag 'a' is to enter first integer value
# flag 'b' is to choose second integer value

# example:-
#
# input:-
#
# bash calculator.sh -o '-' -a 20 -b 5
#
# output:-
#
# 20 - 5 = 15
#
# operation completed!
#
#######################################################################################################################################



while getopts o:a:b: flag
do
    case "${flag}" in
        o) operation=${OPTARG};;
        a) a=${OPTARG};;
        b) b=${OPTARG};;
    esac
done

echo;

if [ $operation == '+' ];  
then  
   c=$(( $a + $b )); 
   echo "$a + $b = $c";
elif [ $operation == '-' ];  
then 
  c=$(( $a - $b ));
  echo "$a - $b = $c";
elif [ $operation == '*' ];  
then 
  c=$(( $a * $b ));
  echo "$a * $b = $c";
elif [ $operation == '/' ];  
then 
  c=$(( $a / $b ));
  echo "$a / $b = $c";
  else
  echo "invalid operation"
  exit 1
fi;

echo;
echo "operation completed!";
