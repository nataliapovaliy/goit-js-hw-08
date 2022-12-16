import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerVimeo = document.querySelector("#vimeo-player");

const player = new Player(playerVimeo);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));