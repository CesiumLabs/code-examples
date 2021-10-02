def factorial(n)
  if n == 1
    n
  else
    n * factorial(n - 1)
  end
end

print "Enter any number to find its factorial : "
num = gets.chomp.to_i
if num && num > 0
  puts "Factorial of #{num} is : " + factorial(num).to_s
else
  "Please enter a valid input!"
end
