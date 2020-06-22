insert into song
(
    song_image, 
    type, 
    title, 
    spotify, 
    apple, 
    soundcloud
)
values 
(
    ${song_image}, 
    ${type}, 
    ${title}, 
    ${spotify}, 
    ${apple}, 
    ${soundcloud}
);