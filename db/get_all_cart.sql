select * from product 
join cart on product.id = cart.id
join users on cart.user_id = users.user_id
where users.user_id = $1;