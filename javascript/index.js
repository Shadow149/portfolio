import { update_nightmode } from "./src/night_mode.js"
import { animate_blob } from "./src/blob.js"


window.onload = function () {
   

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

}

window.onpointermove = event => {
    animate_blob(event);
}