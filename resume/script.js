import { update_nightmode } from "../javascript/night_mode.js"
import { animate_blob } from "../javascript/blob.js"

let night_toggle = function(manual = false){ update_nightmode(() => {}, () => {}, manual)};
night_toggle();

document.getElementById("nightmode").addEventListener("change", function () {
    night_toggle(true);
});

window.onpointermove = event => {
    animate_blob(event);
}