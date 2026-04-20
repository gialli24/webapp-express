CREATE DATABASE IF NOT EXISTS web_app_movies;

USE web_app_movies;

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    director VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    release_date DATE NOT NULL,
    duration INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT,
    vote INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

INSERT INTO movies (title, description, image, director, genre, release_date, duration) VALUES
('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology.', 'inception.jpg', 'Christopher Nolan', 'Sci-Fi', '2010-07-16', 148),
('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality.', 'matrix.jpg', 'Lana Wachowski, Lilly Wachowski', 'Sci-Fi', '1999-03-31', 136),
('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire.', 'godfather.jpg', 'Francis Ford Coppola', 'Crime', '1972-03-24', 175);

INSERT INTO reviews (movie_id, review, vote) VALUES
(1, 'Mind-bending masterpiece that keeps you guessing until the very end.', 5),
(1, 'Visually stunning, though the plot can be a bit confusing at times.', 4),
(2, 'Revolutionary special effects and a deeply philosophical story.', 5),
(3, 'One of the greatest films ever made. Perfect pacing and acting.', 5),
(3, 'A timeless classic that everyone should watch at least once.', 5);
