create table user_email (
    email varchar(250) not null
);

create table users (
	user_id serial primary key,
	email varchar(250) not null,
	password text not null
);

create table product(
    id serial primary key,
    name varchar(100),
    image text,
    size varchar(100),
    description varchar(500),
    price int
);

create table song 
(
    id serial primary key,
    song_image text,
    type varchar(50),
    title varchar(200),
    spotify text,
    apple text,
    soundcloud text
);

create table cart(
    cart_id serial primary key,
    id int references product(id),
    user_id int references users(user_id),
    total int,
    qty int
);