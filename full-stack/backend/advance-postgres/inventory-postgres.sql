-- Display the first 10 rows of the parts table
SELECT * FROM parts LIMIT 10;

-- Ensure that the code column is not null and has unique values
ALTER TABLE parts
ALTER COLUMN code SET NOT NULL,
ADD CONSTRAINT unique_code UNIQUE (code);

-- Fill in missing descriptions with a default value
UPDATE parts
SET description = 'None Available'
WHERE description IS NULL;

-- Create a table to store descriptions for parts
CREATE TABLE part_descriptions (
    id SERIAL PRIMARY KEY, 
    description TEXT
);

-- Fill the part_descriptions table with descriptions for missing values in parts
INSERT INTO part_descriptions (description)
VALUES ('5V resistor'), ('3V resistor');

-- Update the parts table with descriptions from part_descriptions for rows with missing descriptions
UPDATE parts
SET description = pd.description
FROM part_descriptions pd
WHERE parts.description IS NULL
AND parts.id = pd.id;

-- Ensure that the description column is not null
ALTER TABLE parts
ALTER COLUMN description SET NOT NULL;

INSERT INTO parts (id, code, manufacturer_id, description) VALUES (55, 'V1-009', 9, 'hola');

-- Ensure that quantity is not null in the reorder_options table
ALTER TABLE reorder_options
ALTER COLUMN quantity SET NOT NULL;

-- Ensure that price_usd and quantity are positive values in the reorder_options table
ALTER TABLE reorder_options
ADD CHECK (price_usd > 0 AND quantity > 0);

-- Add a constraint to limit the price per unit in the reorder_options table to a specified range
ALTER TABLE reorder_options
ADD CHECK (price_usd/quantity > 0.02 AND price_usd/quantity < 25.00);

-- Form a relationship between parts and reorder_options
ALTER TABLE reorder_options
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

-- Add a constraint to ensure that each value in the qty column of the locations table is greater than 0
ALTER TABLE locations
ADD CHECK (qty > 0);

-- Ensure that locations records only one row for each combination of location and part
ALTER TABLE locations
ADD CONSTRAINT unique_location_part UNIQUE (part_id, location);

-- Write a constraint to ensure that only valid parts are entered into the locations table
ALTER TABLE locations
ADD FOREIGN KEY (part_id) REFERENCES parts (id);

-- Write a constraint to ensure that all parts in the parts table have a valid manufacturer
ALTER TABLE parts
ADD FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id);

-- Create a new manufacturer in the manufacturers table and update the old manufacturers' parts in the parts table to reference the new manufacturer
INSERT INTO manufacturers (id, name)
VALUES (11, 'Pip-NNC Industrial');

UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id = (SELECT id FROM manufacturers WHERE name = 'Pip Industrial')
   OR manufacturer_id = (SELECT id FROM manufacturers WHERE name = 'NNC Manufacturing');

-- Update the old manufacturers' parts in the parts table to reference the new manufacturer
UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id = (SELECT id FROM manufacturers WHERE name = 'Pip-NNC Industrial');
