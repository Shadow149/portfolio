
// sessionStorage.setItem("nightmode","1")

function update_nightmode(onNightToggled, onDayToggled, manual_override = false) {
    if (!manual_override) {
        document.getElementById("nightmode").checked = Boolean(Number(sessionStorage.getItem("nightmode")));
    }
    if (document.getElementById("nightmode").checked == true) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#111";
        document.getElementsByTagName("body")[0].style.color = "white";
        onNightToggled();
        sessionStorage.setItem("nightmode","1");
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        onDayToggled();
        sessionStorage.setItem("nightmode","0");
    }
}


export {update_nightmode}