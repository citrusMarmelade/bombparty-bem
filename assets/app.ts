/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


import Timer from './timer';

function formatTimer(ms: number) {
    const totalSeconds = ms / 1000;
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds.toFixed(0).padStart(2, "0")}`;
}

const timer = new Timer(100);

timer.addEventListener("tick", function(event) {
    const time = formatTimer(event.time);
    (document.querySelector(".header_game__timer") as HTMLDivElement).innerText = time;
})

timer.start(10000);