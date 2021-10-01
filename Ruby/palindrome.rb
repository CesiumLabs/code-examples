def scrub_string str
    str = str.to_s if !str.is_a?String
    str = str.gsub(/\W|\_/, "").downcase
  end

  def is_palindrome? str
    str = scrub_string(str)
    str == str.reverse ? "Yes" : "No"
  end

print "enter a string > "
st = gets.strip

$stdout.puts is_palindrome?(st)