import mysql.connector
mydb = mysql.connector.connect(
	host = "localhost",
	user = "root",
	password = "password",
	database = "username_password"
	)

mycursor = mydb.cursor()

site_name = input("Enter the name of the site")
username = input("Enter the username of the site")
password = input("Enter the password of the site")

sql = "INSERT INTO user_details(site_name,username,password) VALUES(%s, %s, %s)"
values = (site_name, username, password)
mycursor.execute(sql,values)

mydb.commit()
