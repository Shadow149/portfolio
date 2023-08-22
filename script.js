
let blob = null;

function update_nightmode() {
    const svgs = Array.from(
        document.getElementsByTagName('svg')
    );

    if (document.getElementById("nightmode").checked == true) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#111";
        document.getElementsByTagName("body")[0].style.color = "white";
        document.getElementById("profile_pic").style.borderColor = "white";
        svgs.forEach(svg => {
            svg.style.fill = "white";
        });
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        document.getElementById("profile_pic").style.borderColor = "black";

        svgs.forEach(svg => {
            svg.style.fill = "black";
        });
    }
}

window.onload = function () {
    update_nightmode();

    document.getElementById("nightmode").addEventListener("change", function () {
        update_nightmode();
    });

    blob = document.getElementById("blob");
}

window.onpointermove = event => { 
    const { clientX, clientY } = event;

    if (!blob) return;

    // Inspired by Hyperplexed: https://www.youtube.com/watch?v=kySGqoU7X-s
    // CodePen: https://cdpn.io/KKBjvbG
    const width = Math.abs((window.innerWidth / 2) - clientX);
    const height = Math.abs((window.innerHeight / 2) - clientY);

    const radius = Math.max(300, width, height);
    
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
            height: `${radius}px`,
            width: `${radius}px`
        }, 
        { duration: 5000, fill: "forwards"}
    );

}