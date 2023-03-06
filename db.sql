--CODE WAS RUN ON TERMINAL
create TABLE foodKind(
    id SERIAL PRIMARY KEY,
    kind VARCHAR(200) NOT NULL
);


create TABLE foodItem(
    id SERIAL PRIMARY KEY,
    img VARCHAR(200), --path to img route
    kind VARCHAR(200),
    descpt VARCHAR(200),
    price FLOAT(24)
);
