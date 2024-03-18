-- Table Schema
-- Create the restaurant table
CREATE TABLE restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    rating DECIMAL(3, 1),
    phone VARCHAR(15),
    hours VARCHAR(100)
);

-- Create the address table
CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state CHAR(2) NOT NULL,
    website VARCHAR(100),
    restaurant_id INTEGER REFERENCES restaurant(id)
);

-- Create the category table
CREATE TABLE category (
    id CHAR(2) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(200)
);

-- Create the dishes table
CREATE TABLE dish (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    hot_and_spicy BOOLEAN
);

-- Create the review table
CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    rating DECIMAL(3, 1) NOT NULL,
    description TEXT,
    date DATE,
    restaurant_id INTEGER REFERENCES restaurant(id)
);

-- Create the cross-reference table categories_dishes
CREATE TABLE categories_dishes (
    category_id CHAR(2) REFERENCES category(id),
    dish_id INTEGER REFERENCES dish(id),
    price MONEY,
    PRIMARY KEY (category_id, dish_id)
);

-- Validating Primary Keys
-- Validate primary key for restaurant table
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'restaurant' AND constraint_type = 'PRIMARY KEY';

-- Validate primary key for address table
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'address' AND constraint_type = 'PRIMARY KEY';

-- Validate primary key for category table
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'category' AND constraint_type = 'PRIMARY KEY';

-- Validate primary key for dish table
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'dish' AND constraint_type = 'PRIMARY KEY';

-- Validate primary key for review table
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'review' AND constraint_type = 'PRIMARY KEY';

-- Foreign Key Validation
-- Validate foreign key in the address table referencing restaurant
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'address' AND constraint_type = 'FOREIGN KEY';

-- Validate foreign key in the review table referencing restaurant
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'review' AND constraint_type = 'FOREIGN KEY';

-- Validate foreign keys in the categories_dishes table referencing category and dish
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'categories_dishes' AND constraint_type = 'FOREIGN KEY';



/* 
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */
INSERT INTO restaurant (name, description, rating, phone, hours)
VALUES (
  'Bytes of China',
  'Delectable Chinese Cuisine',
  3.9,
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
);

/* 
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address (street, city, state, website, restaurant_id)
VALUES (
  '2020',
  'Busy Street',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

/* 
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review (rating, description, date, restaurant_id)
VALUES (
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '2020-05-22',
  1
);

INSERT INTO review (rating, description, date, restaurant_id)
VALUES (
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '2020-04-01',
  1
);

INSERT INTO review (rating, description, date, restaurant_id)
VALUES (
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '2020-03-15',
  1
);

/* 
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category (id, name, description)
VALUES 
  ('C', 'Chicken', null),
  ('LS', 'Luncheon Specials', 'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice between 11:00 am and 3:00 pm from Monday to Friday.'),
  ('HS', 'House Specials', null);

/* 
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish (name, description, hot_and_spicy)
VALUES 
  ('Chicken with Broccoli', 'Diced chicken stir-fried with succulent broccoli florets', false),
  ('Sweet and Sour Chicken', 'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers', false),
  ('Chicken Wings', 'Finger-licking mouth-watering entree to spice up any lunch or dinner', true),
  ('Beef with Garlic Sauce', 'Sliced beef steak marinated in garlic sauce for that tangy flavor', true),
  ('Fresh Mushroom with Snow Peapods and Baby Corns', 'Colorful entree perfect for vegetarians and mushroom lovers', false),
  ('Sesame Chicken', 'Crispy chunks of chicken flavored with savory sesame sauce', false),
  ('Special Minced Chicken', 'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.', false),
  ('Hunan Special Half & Half', 'Shredded beef in Peking sauce and shredded chicken in garlic sauce', true);

/*
 *--------------------------------------------
 Insert values for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes (category_id, dish_id, price)
VALUES 
  ('C', 1, 6.95),
  ('C', 3, 6.95),
  ('LS', 1, 8.95),
  ('LS', 4, 8.95),
  ('LS', 5, 8.95),
  ('HS', 6, 15.95),
  ('HS', 7, 16.95),
  ('HS', 8, 17.95);
