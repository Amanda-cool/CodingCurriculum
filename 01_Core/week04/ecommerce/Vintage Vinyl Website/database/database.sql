USE vrp;
-- Description addition
CREATE TABLE products (
    product_ID TINYINT NOT NULL,
    artist VARCHAR(100),
    price DECIMAL(7,2),
    genre VARCHAR(100),
    img VARCHAR(100),
    PRIMARY KEY (product_ID)
);

CREATE TABLE contact (
    contact_ID SMALLINT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone CHAR(10),
    preferred VARCHAR(50),
    referral VARCHAR(50),
    comments VARCHAR(1000),
    date_creation TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (contact_ID)
);

INSERT INTO products (
    product_ID, artist, price, genre, img
) VALUES 
(1, "Florence and the Machine", 29.99, "Indie", "assets/images/florence.jpg"),
(2, "Joyce Manor", 49.99, "Emo/Punk", "assets/images/joyce_manor.jpg"),
(3, "Wolf Parade", 119.99, "Indie", "assets/images/wolf_parade.jpg"),
(4, "King Gizzard and the Wizard Lizard", 25.99, "Alternative", "assets/images/king_gizzard.jpg"),
(5, "Julien Baker", 19.99, "Indie", "assets/images/julien_baker.jpg"),
(6, "Broken Social Scene", 15.99, "Indie", "assets/images/broken_social_scene.jpg"),
(7, "Blonde Redhead", 32.99, "Alternative", "assets/images/blonde_redhead.jpg"),
(8, "Jeff Rosenstock", 19.99, "Emo/Punk", "assets/images/jeff_rosenstock.jpg");

