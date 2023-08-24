import { update_nightmode } from "./javascript/night_mode.js"
import { animate_blob } from "./javascript/blob.js"


let night_toggle = function(manual = false){ 
    const svgs = Array.from(
        document.getElementsByTagName('svg')
    );

    update_nightmode(() => {
            document.getElementById("profile_pic").style.borderColor = "white";
            svgs.forEach(svg => {
                svg.style.fill = "white";
            });
        }, 
        () => {
            document.getElementById("profile_pic").style.borderColor = "black";
            svgs.forEach(svg => {
                svg.style.fill = "black";
            });
        }, 
        manual
    );
};

night_toggle();
document.getElementById("nightmode").addEventListener("change", function () {
    night_toggle(true);
});

window.onpointermove = event => {
    animate_blob(event);
}