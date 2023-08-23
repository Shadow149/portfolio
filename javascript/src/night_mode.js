
let toggled = true;

function update_nightmode(onNightToggled, onDayToggled, manual_override = false) {
    if (!manual_override) {
        document.getElementById("nightmode").checked = toggled;
    }
    if (document.getElementById("nightmode").checked == true) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#111";
        document.getElementsByTagName("body")[0].style.color = "white";
        onNightToggled();
        toggled = true;
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        onDayToggled();
        toggled = false;
    }
}


export {update_nightmode}