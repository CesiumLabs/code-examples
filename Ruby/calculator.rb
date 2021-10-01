def add(num1, num2)
  num1 + num2
end

def sub(num1, num2)
  num1 - num2
end

def multip(num1, num2)
  num1 * num2
end

def divit(num1, num2)
  num1 / num2
end

p 'Little calculator'
25.times { print '-' }
puts
p 'Enter the first number'
first = gets.chomp.to_f
p 'Enter the secund number'
secund = gets.chomp.to_f
p 'What do you want to do?'
p 'Enter 1 to add, 2 to sub, 3 to multip, 4 to div'
user_choise = gets.chomp
if user_choise == '1'
  p add(first, secund)
elsif user_choise == '2'
  p sub(first, secund)
elsif user_choise == '3'
  p multip(first, secund)
elsif user_choise == '4'
  p divit(first, secund)
else
  p 'Invalid choise'
end