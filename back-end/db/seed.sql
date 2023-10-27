-- Use the songs_dev database
\c songs_dev

-- Insert data into the 'songs' table
INSERT INTO songs (name, url, category, description, is_favorite)
VALUES ('i love you', 'www.google.com', 'POP', 'smashmouth', false),
       ('bad guy', 'www.apple.com', 'pop', 'for people', true),
       ('voy palla', 'www.apple.com', 'bachata', 'for dominicans', true);
