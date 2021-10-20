CREATE DATABASE customers;

CREATE customersTable (
    customerId VARCHAR(20) NOT NULL PRIMARY KEY, -- This is a string that can be max 20 characters long, it is a primary key and can't be null
    firstName VARCHAR(20) NOT NULL, -- This is a string that can be max 20 characters long and can't be null
    lastName VARCHAR(20) NOT NULL, -- This is a string that can be max 20 characters long and can't be null
    fullName VARCHAR(40) NOT NULL, -- This is a string that can be max 40 characters long and can't be null
    createdAt TIMESTAMP NOT NULL, -- This is a timestamp and can't be null | Format of a timestamp: YYYY-MM-DD hh:mm:ss
    -- More about datatypes at: https://dev.mysql.com/doc/refman/8.0/en/data-types.html
);

-- Execute this in your MySQL command line client or open your MySQL database via the terminal