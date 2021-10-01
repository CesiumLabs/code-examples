using Genie
2
using Genie.Router, Genie.Renderer, Genie.Renderer.Html, Genie.Renderer.Json, Genie.Requests
3
using MySQL
4
using JSON
5
using DataFrames
6
using JSONTables
7
8
create_table_sql = """
9
    CREATE TABLE IF NOT EXISTS USERS(
10
        user_id VARCHAR(50) NOT NULL PRIMARY KEY,
11
        user_status ENUM('active', 'inactive') DEFAULT 'active'
12
    );
13
    """
14
15
conn = DBInterface.connect(MySQL.Connection, "localhost", "<user_name>", "<password>", db = "test_user")
16
17
cur = DBInterface.execute(conn, create_table_sql)
18
19
function createUser(user_id, user_status)
20
    DBInterface.execute(conn, "INSERT INTO USERS (user_id, user_status) VALUES ('$user_id', '$user_status')")
21
end
22
23
function getUsers()
24
    cur = DBInterface.execute(conn, "SELECT user_id, user_status FROM users")
25
    df = DataFrame(cur)
26
    stringified_json = arraytable(df)
27
    return stringified_json
28
end
29
30
31
route("/createuser", method = POST) do 
32
    createUser(postpayload(:user_id), postpayload(:user_status, "active")) 
33
    return "POST OK"
34
end
35
36
route("/getusers") do
37
    obj = getUsers()
38
    return obj
39
end
40
41
up(8001, async = false)