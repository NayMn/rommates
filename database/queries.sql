DROP TABLE IF EXISTS roommates;
DROP TABLE IF EXISTS gastos;

CREATE TABLE roommates (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    debe DECIMAL(10, 2) DEFAULT 0,
    recibe DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE gastos (
    id SERIAL PRIMARY KEY,
    roommate_id  SERIAL NOT NULL,
    descripcion TEXT,
    monto DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (roommate_id) REFERENCES roommates(id) ON DELETE CASCADE
);

INSERT INTO roommates (id, nombre, debe, recibe) VALUES

INSERT INTO gastos (id, roommate_id, descripcion, monto) VALUES
    