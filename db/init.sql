create table user_email (
    email varchar(250) not null
);

create table users (
	id serial primary key,
	email varchar(250) not null,
	password text not null
);