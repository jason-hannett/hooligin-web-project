update cart
set 
qty = $3,
total = $2
where cart_id = $1;