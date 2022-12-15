import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const playerVimeo = document.querySelector("#vimeo-player");

const onPlay = function(data) {
    const timeCurrent = playerVimeo.setItem("videoplayer-current-time", data);
};

player.on('play', onPlay);

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});