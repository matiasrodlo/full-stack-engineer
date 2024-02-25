//Select a Table

SELECT * from profile;

///////////////////////
// Creating Your Tables
///////////////////////

CREATE TABLE book (
    title varchar(100),
    isbn varchar(50),
    pages integer,
    price money, 
    description varchar(256),
    publisher varchar(100)
  );
  
  CREATE TABLE chapter (
    id integer,
    number integer,
    title varchar(50),
    content varchar(1024)
  );
  
  CREATE TABLE author (
    name varchar(50),
    bio varchar(100),
    email varchar(20)
  );

////////////////////////
// Querying Your Tables
////////////////////////

  INSERT INTO book VALUES (
  'Postgres for Beginners',
  '0-5980-6249-1',
  25,
  4.99,
  'Learn Postgres the Easy Way',
  'Codecademy Publishing'
);

SELECT * FROM book WHERE title = 'Postgres for Beginners';

SELECT * FROM book WHERE isbn = '0-5980-6249-1';

////////////////////////
// Primary Key /////////
////////////////////////

CREATE TABLE book (
  title varchar(100),
  isbn varchar(50) PRIMARY KEY,
  pages integer,
  price money,
  description varchar(256),
  publisher varchar(100)
);

CREATE TABLE chapter (
  id integer PRIMARY KEY,
  number integer,
  title varchar(50),
  content varchar(1024)
);

CREATE TABLE author (
  name varchar(50),
  bio varchar(100),
  email varchar(20) PRIMARY KEY
);

////////////////////////
// Key Validation///////
////////////////////////

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'book';

  SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'chapter';

    SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'author';