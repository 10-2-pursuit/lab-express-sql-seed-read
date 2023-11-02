\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES 
('Angry', 'Rolling Stones', 'Hackney Diamonds', '03:46', false),
('Get Close', 'Rolling Stones', 'Hackney Diamonds', '04:10', false),
('Depending On You', 'Rolling Stones', 'Hackney Diamonds', '04:02', false),
('Bite My Head Off', 'Rolling Stones', 'Hackney Diamonds', '03:31', false),
('Whole Wide World', 'Rolling Stones', 'Hackney Diamonds', '03:58', false),
('Fame', 'David Bowie', 'Young Americans', '4:12', true ),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true ),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true ),
('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false ),
('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true ),
('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true ),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false );

INSERT INTO artists (artist, nationality, is_favorite)
VALUES
('Rolling Stones', 'United Kingdom', false),
('David Bowie', 'United Kingdom', false),
('Talking Heads', 'United States', false),
('Hüsker Dü', 'United States', false),
('Wolf Parade', 'Canada', false),
('Icona Pop', 'Sweden', false);