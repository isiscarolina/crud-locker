CREATE DATABASE myLocker;

USE mylocker;

CREATE TABLE locker(
    id INT(12) NOT NULL,
    serial_locker VARCHAR(12) NOT NULL,
    nome_usuario_locker VARCHAR(80) NOT NULL,    
    img TEXT NOT NULL,
   

);

ALTER TABLE locker
    ADD PRIMARY KEY (id);

ALTER TABLE locker
    MODIFY id INT(22) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT = 2;