create table user_email (
    email varchar(250) not null
);

create table users (
	id serial primary key,
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