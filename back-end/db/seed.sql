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

INSERT INTO albums (title, artist, release_year, song_ids)
VALUES
    ('Young Americans', 'David Bowie', 1975, ARRAY[1]),
    ('Remain in Light', 'Talking Heads', 1980, ARRAY[2, 4]),
    ('Sand in the Vaseline', 'Talking Heads', 1992, ARRAY[3]),
    ('New Day Rising', 'Hüsker Dü', 1985, ARRAY[5]),
    ('Thin Mind', 'Wolf Parade', 2020, ARRAY[6]),
    ('This is...', 'Icona Pop', NULL, ARRAY[7]);