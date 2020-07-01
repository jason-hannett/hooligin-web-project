insert into users 
(email, password) 
values 
(${email}, ${password})
returning user_id, email;