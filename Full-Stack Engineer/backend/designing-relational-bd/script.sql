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

////////////////////////
//Composite Primary Key/
////////////////////////

  CREATE TABLE popular_books (
  book_title varchar(100),
  author_name varchar(50),
  number_sold integer,
  number_previewed integer,
  PRIMARY KEY (book_title, author_name)
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'popular_books';

////////////////////////
//Foreign Key Part 1////
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
  book_isbn varchar(50) REFERENCES book(isbn),
  number integer,
  title varchar(50),
  content varchar(1024)
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'chapter';

////////////////////////
//Foreign Key Part 2////
////////////////////////

SELECT * FROM book;
SELECT * FROM chapter;
SELECT book.title as book, chapter.title as chapters 
FROM book
JOIN chapter
ON book.isbn = chapter.book_isbn;

/////////////////////////////
//One-to-One Relationship////
////////////////////////////

CREATE TABLE book_details (
  id integer PRIMARY KEY,
  book_isbn varchar(50) REFERENCES book(isbn) UNIQUE,
  rating decimal,
  language varchar(10),
  keywords text[],
  date_published date
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'book_details';

INSERT INTO book VALUES (
  'Learn PostgreSQL',
  '123457890',
  100,
  2.99,
  'Great course',
  'Codecademy'
);

INSERT INTO book_details VALUES (
  1,
  '123457890',
  3.95,
  'English',
  '{sql, postgresql, database}',
  '2020-05-20'
);

INSERT INTO book_details VALUES (
  2,
  '123457890',
  3.95,
  'French',
  '{sql, postgresql, database}',
  '2020-05-20'
);

SELECT
    book.title, book.price, book_details.language, book_details.rating
FROM book
JOIN book_details
ON book.isbn = book_details.book_isbn;

//////////////////////////////
//One-to-Many Relationship////
//////////////////////////////

CREATE TABLE page (
  id integer PRIMARY KEY,
  chapter_id integer REFERENCES chapter(id),
  content text,
  header varchar(20),
  footer varchar(20)
);

ALTER TABLE chapter
DROP COLUMN content;

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'page';

INSERT INTO book VALUES (
  'Learn PostgreSQL',
  '0-9673-4537-5',
  100,
  2.99,
  'Dive into Postgres for Beginners',
  'Codecademy Publishing'
);

INSERT INTO book VALUES (
  'Postgres Made Easy',
  '0-3414-4116-3',
  255,
  5.99,
  'Learn Postgres the Easy Way',
  'Codecademy Press'
);

INSERT INTO chapter VALUES (
  1,
  '0-9673-4537-5',
  1,
  'Chapter 1'
);

INSERT INTO chapter VALUES (
  2,
  '0-3414-4116-3',
  1,
  'Chapter 1'
);

INSERT INTO page VALUES (
  1,
  1,
  'Chapter 1 Page 1',
  'Page 1 Header',
  'Page 1 Footer'
);

INSERT INTO page VALUES (
  2,
  1,
  'Chapter 1 Page 2',
  'Page 2 Header',
  'Page 2 Footer'
);

INSERT INTO page VALUES (
  3,
  2,
  'Chapter 1 Page 1',
  'Page 1 Header',
  'Page 1 Footer'
);

INSERT INTO page VALUES (
  4,
  2,
  'Chapter 1 Page 2',
  'Page 2 Header',
  'Page 2 Footer'
);

SELECT
    book.title as book_title, chapter.title as chapter_title, page.content as page_content
FROM
    book
JOIN
    chapter
ON
    book.isbn = chapter.book_isbn 
JOIN
    page
ON
    chapter.id = page.chapter_id;

///////////////////////////////
//Many-to-Many Relationship////
///////////////////////////////

CREATE TABLE books_authors (
  book_isbn varchar(50) REFERENCES book(isbn),
  author_email varchar(20) REFERENCES author(email),
  PRIMARY KEY (book_isbn, author_email)
);

SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'books_authors';