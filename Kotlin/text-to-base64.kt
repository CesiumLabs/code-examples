import java.util.Base64

fun main() {
  val string = "Hacktoberfest-2021"
  val estring: String = Base64.getEncoder().encodeToString(string.toByteArray())

  println(estring)
}
