USE vrp;

CREATE TABLE products (
    product_ID INT NOT NULL,
    artist VARCHAR(100),
    price FLOAT,
    genre VARCHAR(100),
    img VARCHAR(100),
    PRIMARY KEY (product_ID)
);

CREATE TABLE contact (
    contact_ID INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone INT,
    preferred VARCHAR(50),
    referral VARCHAR(50),
    comments VARCHAR(200),
    PRIMARY KEY (contact_ID)
);

INSERT INTO products (
    product_ID, artist, price, genre, img
)

VALUES 
(1, "Florence and the Machine", 19.99, "Indie", "assets/images/florence.jpg"),
(2, "Joyce Manor", 19.99, "Emo/Punk", "assets/images/joyce_manor.jpg"),
(3, "Wolf Parade", 19.99, "Indie", "assets/images/wolf_parade.jpg"),
(4, "King Gizzard and the Wizard Lizard", 19.99, "Alternative", "assets/images/king_gizzard.jpg"),
(5, "Julien Baker", 19.99, "Indie", "assets/images/julien_baker.jpg"),
(6, "Broken Social Scene", 19.99, "Indie", "assets/images/broken_social_scene.jpg"),
(7, "Blonde Redhead", 19.99, "Alternative", "assets/images/blonde_redhead.jpg"),
(8, "Jeff Rosenstock", 19.99, "Emo/Punk", "assets/images/jeff_rosenstock.jpg");

