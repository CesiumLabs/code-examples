using Genie
using Genie.Router, Genie.Renderer, Genie.Renderer.Html, Genie.Renderer.Json, Genie.Requests
using MySQL
using JSON
using DataFrames
using JSONTables


create_table_sql = """
    CREATE TABLE IF NOT EXISTS USERS(
        user_id VARCHAR(50) NOT NULL PRIMARY KEY,
        user_status ENUM('active', 'inactive') DEFAULT 'active'
    );
    """
conn = DBInterface.connect(MySQL.Connection, "localhost", "<user_name>", "<password>", db = "test_user")

cur = DBInterface.execute(conn, create_table_sql)

function createUser(user_id, user_status)

DBInterface.execute(conn, "INSERT INTO USERS (user_id, user_status) VALUES ('$user_id', '$user_status')")
end

function getUsers()
    cur = DBInterface.execute(conn, "SELECT user_id, user_status FROM users")
    df = DataFrame(cur)
    stringified_json = arraytable(df)
    return stringified_json

end


route("/createuser", method = POST) do 

    createUser(postpayload(:user_id), postpayload(:user_status, "active")) 

    return "POST OK"

end

route("/getusers") do

    obj = getUsers()

    return obj

end

up(8001, async = false)