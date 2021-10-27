const { con } = require('./connection');
// These functions do not exist here, this is just an example
const id = generateRandomId();
const firstName = getFirstName();
const lastName = getLastName();
const fullName = `${firstName} ${lastName}`;
const createdAt = getTimestamp();
const newFirstName = getNewFirstName();

// Insert values into table
con.query(`INSERT INTO customersTable ('customerId', 'firstName', 'lastName', 'fullName', 'createdAt') VALUES ('${id}', '${firstName}', '${lastName}', '${fullName}', '${createdAt}')`, function (err) {
    if (err) console.log(err);
});

// Update a row
con.query(`UPDATE customersTable SET firstName = '${newFirstName}' WHERE customerId = '${id}'`, function (err) {
    if (err) console.log(err);
});

// Get all data of a table
con.query(`SELECT * FROM customersTable`, function (err, result) {
    if (err) return console.log(err);

    if (result) console.log(result);
/*   
    [
        {
            customerId: 'TrtjvmK5qvfJTRHnnUZG',
            firstName: 'John',
            lastName: 'Smith',
            fullName: 'John Smith',
            createdAt: 2021-10-20T08:52:49.495Z
        },

        {
            customerId: 'loypkiNkSSS0BkUH3Iet',
            firstName: 'William',
            lastName: 'Johnson',
            fullName: 'William Johnson',
            createdAt: 2020-08-19T08:52:29.395Z
        }
        
        ...
    ]
*/
});


// Get all data of a row
con.query(`SELECT * FROM customersTable WHERE customerId = 'TrtjvmK5qvfJTRHnnUZG'`, function (err, result) {
    if (err) return console.log(err);

    if (result) console.log(result);
/*  
    [
        {
            customerId: 'TrtjvmK5qvfJTRHnnUZG',
            firstName: 'John',
            lastName: 'Smith',
            fullName: 'John Smith',
            createdAt: 2021-10-20T08:52:49.495Z
        }
    ]
*/
});

// Delete a table
con.query(`DROP TABLE customersTable`, function (err) {
    if (err) console.log(err);
});

// Delete a row
con.query(`DELETE FROM customersTable WHERE customerId = 'TrtjvmK5qvfJTRHnnUZG'`, function (err) {
    if (err) console.log(err);
});

// More about SQL queries at: https://www.w3schools.com/sql/
