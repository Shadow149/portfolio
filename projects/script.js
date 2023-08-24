import { update_nightmode } from "../javascript/night_mode.js"
import { animate_card } from "../javascript/card.js";
import { animate_blob } from "../javascript/blob.js";

let cards = [];

function is_mobile() {
    return navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i);
}

let night_toggle = function(manual = false){ update_nightmode(() => {}, () => {}, manual)};

night_toggle();
document.getElementById("nightmode").addEventListener("change", function () {
    night_toggle(true);
});

cards = document.getElementsByClassName("card-wrap");


if (is_mobile()) {
    window.addEventListener("deviceorientation", event => {
        console.log(`Angular velocity along the X-axis ${event.alpha}`);
        console.log(`Angular velocity along the Y-axis ${event.beta}`);
        console.log(`Angular velocity along the Z-axis ${event.gamma}`);
        
        for (let i = 0; i < cards.length; i ++) {
            let card = cards[i].getElementsByClassName("card")[0];
            let card_top = cards[i].getElementsByClassName("card-top")[0];
            animate_card({clientX: event.gamma, clientY: event.beta - 90}, card, cards[i], card.dataset["img"], true, 1, true);
            if (card_top)
                animate_card({clientX: event.gamma, clientY: event.beta - 90}, card_top, cards[i], card_top.dataset["img"], false, 0.8, true);
        }
    });
}

window.onload = function () {

    window.onpointermove({clientX: window.innerWidth / 2, clientY: window.innerHeight / 2});
}


if (!is_mobile()) {
    window.onpointermove = event => { 

        for (let i = 0; i < cards.length; i ++) {
            let card = cards[i].getElementsByClassName("card")[0];
            let card_top = cards[i].getElementsByClassName("card-top")[0];
            animate_card(event, card, cards[i], card.dataset["img"]);
            if (card_top)
                animate_card(event, card_top, cards[i], card_top.dataset["img"], false, 0.8);
        }

        animate_blob(event, blob);

    }
} else {
    window.onpointermove = event => { 
        animate_blob(event, blob);
    }
}