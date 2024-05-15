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

document.getElementById("nightmode").addEventListener("change", function (event) {
    night_toggle(event.target.checked);
});

window.onpointermove = event => {
    animate_blob(event);
}

window.onload = function () {
    night_toggle(Boolean(Number(localStorage.getItem("nightmode"))));
}