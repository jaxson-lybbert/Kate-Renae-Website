DROP DATABASE IF EXISTS mailing_list_db;
CREATE DATABASE mailing_list_db;

USE mailing_list_db;

CREATE TABLE 'reader' (
    'id' INT NOT NULL AUTO_INCREMENT,
    'first_name' VARCHAR(30) NOT NULL,
    'last_name' VARCHAR(30) NOT NULL,
    'email' VARCHAR(50) NOT NULL,
    PRIMARY KEY ('id')
);