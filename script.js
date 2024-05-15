import { animate_blob } from "./javascript/blob.js"

let email = "robertsalfie14@gmail.com";

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

document.getElementById("emailAnchor").addEventListener("click", function() {
    document.getElementById("emailSvg").style.display = "none";
    document.getElementById("tickSvg").style.display = "inline-block";
    document.getElementById("copyTooltip").style.display = "block";

    navigator.clipboard.writeText(email);

    setTimeout(() => {
        document.getElementById("emailSvg").style.display = "inline-block";
        document.getElementById("tickSvg").style.display = "none";
        document.getElementById("copyTooltip").style.display = "none";
    }, 1500);
});

document.getElementById("nightmode").addEventListener("change", function (event) {
    night_toggle(event.target.checked);
});

window.onpointermove = event => {
    animate_blob(event);
}

window.onload = function () {
    night_toggle(Boolean(Number(localStorage.getItem("nightmode"))));
}