import { update_nightmode } from "./src/night_mode.js"
import { animate_card } from "./src/card.js";
import { animate_blob } from "./src/blob.js";

let cards = [];

window.onload = function () {

    let night_toggle = function(manual = false){ update_nightmode(() => {}, () => {}, manual)};

    night_toggle();
    document.getElementById("nightmode").addEventListener("change", function () {
        night_toggle(true);
    });

    cards = document.getElementsByClassName("card-wrap");
    window.onpointermove({clientX: window.innerWidth / 2, clientY: window.innerHeight / 2})
}

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