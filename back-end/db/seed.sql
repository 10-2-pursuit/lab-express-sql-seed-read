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

INSERT INTO playlists (song_id, title, creator, creation_year)
VALUES
    ('1', 'Don''t Listen Unless Stable', 'Dan Miller', 1975),
    ('2', 'Music that Heals', 'Sarah Mikelson', 1980),
    ('2', 'Nostalgic Journeys', 'Jacob Daniels', NULL),
    ('4', 'Driving vocals', 'Ryan Han', 1980),
    ('4', 'Feelings and Other Stupid Things', 'Millie Adams', NULL),
    ('3', 'Astral traveling', 'Sean Farley', 1992),
    ('5', 'Songs that will make you go WTF', 'Dean Mayers', NULL),
    ('6', 'If you like anxiety, you should try depression', 'Max Conners', 2020),
    ('7', 'Airplane Mode', 'Ian Woods', NULL),
    ('7', 'The Ex Girlfriends Club', 'Enzo Lewis', 2023);