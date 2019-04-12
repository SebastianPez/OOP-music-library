function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

function Playlist(name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;

}

function Track(title, rating, length) {
    if(typeof title !== "string") {
        console.log(`The title must be a string. ${title} is not a string.`);
        return; 
    } else if (rating < 1 || rating > 5) {
        console.log(`The rating can only be from 1 to 5 stars. ${rating} doesn't meet those requirements.`);
        return;
    } else if (typeof length !== "number") {
        console.log(`The length of the track must be an integer and be in number of seconds.`);
        return;
    }
    this.title = title;
    this.rating = rating;
    this.length = length;
}

Library.prototype.addPlaylist = function(playlist) {
    this.playlists.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
    this.tracks.push(track);
    this.updateRating();
    this.updateDuration();
}

Playlist.prototype.updateRating = function() {
    let totalRating = 0;
    let totalTracks = this.tracks.length;
    for (let track of this.tracks) {
        totalRating += track.rating;
    }
    this.overallRating = totalRating / totalTracks;
}

Playlist.prototype.updateDuration = function() {
    let totalDuration = 0;
    for (let track of this.tracks) {
        totalDuration += track.length;
    }
    this.totalDuration = totalDuration;
}

const newLibrary = new Library('Test', 'Tester');
const newPlaylist = new Playlist('Grooves');
const firstTrack = new Track('Drop It', 3, 184);
const secondTrack = new Track('Bop It', 5, 177);
newLibrary.addPlaylist(newPlaylist);
newPlaylist.addTrack(firstTrack);
newPlaylist.addTrack(secondTrack);