CREATE DATABASE IF NOT EXISTS companydb; 

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id) 
);

DESC companydb;

INSERT INTO employees VALUES 
    (1, 'Joe', 2000),
    (2, 'John', 3000),
    (3, 'Alguien', 1200),
    (4, 'Post', 1400);