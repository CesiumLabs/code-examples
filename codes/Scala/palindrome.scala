object Palindrome {
  
  def palindrome(x: String): String=
  {
    var rev: String=""
    if (x.toString.forall(_.isDigit))
    {
    if(x.toString.length> 1)
    {
      rev=x.toString.reverse
    }
    }
    else if(x.length > 1)
    {
      rev=x.reverse
    }
    if (rev==x) return ("Value is a palindrome")
    else return ("Value is not a palindrome")
    
  }
	def main(args: Array[String]): Unit = {
	  
	  println(palindrome(151.toString))
	
	}
}
