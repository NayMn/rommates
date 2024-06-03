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

INSERT INTO roommates (nombre, debe, recibe) VALUES
('nombre uno', 0, 0),
('nombre dos', 0, 0),
('nombre tres', 0, 0)


INSERT INTO gastos (roommate_id, descripcion, monto) VALUES
(1, 'descripcion uno', 100),
(2, 'descripcion dos', 300),
(3, 'descripcion tres', 200),