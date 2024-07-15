"use strict";
function make_album(artist_name, album_title, track) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
let album1 = make_album("Areesha", "album title 1");
console.log(album1);
let album2 = make_album("sumair", "album title 2");
console.log(album2);
let album3 = make_album("zunairah", "album title 3", 20);
console.log(album3);
