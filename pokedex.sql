CREATE DATABASE Pokedex;

use Pokedex;

CREATE TABLE pokemon(
    pokemon_id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20),
    altura DECIMAL(9,2) ,
    categoria VARCHAR(20),
    peso  DECIMAL(9,2),
    habilidad VARCHAR(20),
    tipo VARCHAR(20),
    pokemon_img_url VARCHAR(255),
    PRIMARY KEY (pokemon_id)
);

--Ejemplos insert
INSERT INTO pokemon(`pokemon_id`,`nombre`,`altura`,`categoria`,`peso`,`habilidad`,`tipo`,`pokemon_img_url`)
VALUES(1,'Bulbasaur',2.04,'Seed',15.2 , 'Overgrow','Grass','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png');


INSERT INTO pokemon(`pokemon_id`,`nombre`,`altura`,`categoria`,`peso`,`habilidad`,`tipo`,`pokemon_img_url`)
VALUES(2,'Ivysaur',3.04,'Seed',28.7, 'Overgrow','Grass','https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png');
 

INSERT INTO pokemon(`pokemon_id`,`nombre`,`altura`,`categoria`,`peso`,`habilidad`,`tipo`,`pokemon_img_url`)
VALUES(3,'Venusaur',6.07,'Seed',220.5, 'Overgrow','Grass','https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png');
 

INSERT INTO pokemon(`pokemon_id`,`nombre`,`altura`,`categoria`,`peso`,`habilidad`,`tipo`,`pokemon_img_url`)
VALUES(4,'Charmander',2.00,'Lizard',18.7 , 'Blaze','Water','https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png');

