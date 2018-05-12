DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE DATABASE burgers_db;
CREATE TABLE burgs {
    id int auto_increment not null,
    burgName varchar(33),
    devoured boolean default false,
    primary key(id)
};