import mysql.connector
mydb = mysql.connector.connect(
	host = "localhost",
	user = "root",
	password = "password",
	database = "username_password"
	)

mycursor = mydb.cursor()

inp = input("Enter the way you want to search your usename and password")
x = input("Enter the"+" "+inp+" "+"you want to querry on")
sql = "SELECT * FROM user_details "
mycursor.execute(sql)
x1 = mycursor.fetchall()
print(x1)
