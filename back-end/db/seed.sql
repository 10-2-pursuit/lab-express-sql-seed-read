\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES
    ('Fame', 'David Bowie', 'Young Americans', '4:12', true ),
    ('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true ),
    ('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true ),
    ('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false ),
    ('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true ),
    ('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true ),
    ('We Got the World', 'Icona Pop', 'This is...', '3:17', false );

INSERT INTO albums (song_id, title, artist, release_year)
VALUES
    ('1', 'Young Americans', 'David Bowie', 1975),
    ('2', 'Remain in Light', 'Talking Heads', 1980),
    ('2', 'Remain in Light (Deluxe)', 'Talking Heads', NULL),
    ('4', 'Remain in Light', 'Talking Heads', 1980),
    ('4', 'Remains of the Day', 'Talking Heads', NULL),
    ('3', 'Sand in the Vaseline', 'Talking Heads', 1992),
    ('5', 'New Day Rising', 'Hüsker Dü', NULL),
    ('6', 'Thin Mind', 'Wolf Parade', 2020),
    ('7', 'This is...', 'Icona Pop', NULL),
    ('7', 'Club Romantech', 'Icona Pop', 2023);