\c songs_dev;

INSERT INTO artists (artist, nationality, is_favorite)
VALUES
('Rolling Stones', 'United Kingdom', false),
('David Bowie', 'United Kingdom', false),
('Talking Heads', 'United States', false),
('Hüsker Dü', 'United States', false),
('Wolf Parade', 'Canada', false),
('Icona Pop', 'Sweden', false);

INSERT INTO albums (album, year, is_favorite, artist_id)
VALUES
('Hackney Diamonds', '2023', false, '1'),
('Young Americans', '1975', false, '2'),
('Remain in Light', '1980', false, '3'),
('Sand in the Vaseline', '1992', false, '3'),
('New Day Rising', '1985', false, '4'),
('Thin Mind', '2020', false, '5'),
('This is...', '2013', false, '6');

INSERT INTO songs (name, artist, album, time, is_favorite, album_id)
VALUES 
('Angry', 'Rolling Stones', 'Hackney Diamonds', '03:46', false, '1'),
('Get Close', 'Rolling Stones', 'Hackney Diamonds', '04:10', false, '1'),
('Depending On You', 'Rolling Stones', 'Hackney Diamonds', '04:02', false, '1'),
('Bite My Head Off', 'Rolling Stones', 'Hackney Diamonds', '03:31', false, '1'),
('Whole Wide World', 'Rolling Stones', 'Hackney Diamonds', '03:58', false, '1'),
('Fame', 'David Bowie', 'Young Americans', '4:12', true, '2'),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true, '3'),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true, '4'),
('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false, '3'),
('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true, '5'),
('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true, '6'),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false, '7');

INSERT INTO playlist (song_id)
VALUES
('1'),
('2'),
('3');