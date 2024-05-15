
// sessionStorage.setItem("nightmode","1")

function update_nightmode(onNightToggled, onDayToggled, manual_override = null, early = false) {
    let checked = Boolean(Number(localStorage.getItem("nightmode")));
    if (manual_override != null && !early) {
        console.log("override", manual_override, early)
        checked = manual_override;
        document.getElementById("nightmode").checked = checked;
    }
    if (checked) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#111";
        document.getElementsByTagName("body")[0].style.color = "white";
        onNightToggled();
        localStorage.setItem("nightmode","1");
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        onDayToggled();
        localStorage.setItem("nightmode","0");
    }
}

