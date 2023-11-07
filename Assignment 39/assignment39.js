"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
let album1 = make_album("Artist1", "Album Title 1");
let album2 = make_album("Artist2", "Album Title 2", 12); // Including the number of tracks
let album3 = make_album("Artist3", "Album Title 3");
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
