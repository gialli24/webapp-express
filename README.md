# Setup Web App Express

repo: **webapp-express**

La web app si occupa della gestione di una lista di film e relative recensioni.

### Da Fare

- Utilizzando il file in allegato, creiamo un database con MySQL Workbench
- Creiamo una nuova applicazione Express
- Colleghiamo l’app al db e verifichiamo che tutto funzioni
- Prepariamo una rotta index per ottenere la lista dei film
- Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni


- Inserire le immagini nel progetto express
- Inserire i dati di connessione al database come variabili d’ambiente
- Inserire le vostre API in controller
- Inserire le vostre rotte in un router
- Inserire un middleware per le rotte inesistenti
- Inserire un middleware per la gestione errori

## Database

**Nome Database**: `web-app-movies`

### Tabella dei Film

**Nome Tabella:** `movies`

- id INT PRIMARY KEY AUTO_INCREMENT NOT NULL
- title VARCHAR(100) NOT NULL
- description TEXT
- image VARCHAR(255) NOT NULL
- director VARCHAR(100) NOT NULL
- genre VARCHAR(50) NOT NULL
- release_date DATE NOT NULL
- duration INT NOT NULL
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP

### Tabella delle Recensioni

**Nome Tabella:** `reviews`

- id INT PRIMARY KEY AUTO_INCREMENT NOT NULL
- movie_id FOREIGN KEY (movie_id) REFERENCES movies(id)
- review TEXT
- vote INT NOT NULL
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL