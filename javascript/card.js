function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

let interval = null;
let iter = 0;

function animate_card(event, card, wrapper, img, lighting = true, multiplier = 1.0, gyro = false) {
    const { clientX, clientY } = event;

    let rect = wrapper.getBoundingClientRect();

    let x,y;
    if (!gyro) {
        x = ((rect.right - rect.left) - clientX) + (rect.x - (rect.width / 2));
        y = ((rect.bottom - rect.top) - clientY) + (rect.y - (rect.height / 2));
    } else {
        x = clientX;
        y = clientY;
    }

    let rotate_y = clamp(((x * 3.5 * multiplier)/(window.innerWidth * 5)) * 360, -20 * multiplier, 20 * multiplier);
    let rotate_x = clamp(-((y * 3.5 * multiplier)/(window.innerHeight * 5)) * 360, -20 * multiplier, 20 * multiplier);
    
    let angle = (Math.atan2(y,x) / Math.PI) * 180 + 90;

    let transform_duration = 1000;

    if (Math.abs(x) > rect.width * 1 || Math.abs(y) > rect.height * 1) {
        rotate_y = 0;
        rotate_x = 0;
        transform_duration = 2000;
        clearInterval(interval);
    } else {
        // let card_text = wrapper.parentElement.getElementsByTagName("h1")[0];
        // if (!card_text.dataset["original_text"])
        //     card_text.dataset["original_text"] = card_text.innerHTML;
        // let original_text = card_text.dataset["original_text"];

        // // clearInterval(interval);

        // interval = setInterval(() => {
        //     card_text.innerHTML = original_text.substr(0, original_text.length -1);
        // }, 500);

        // card_text.innerHTML = original_text;
        // clearInterval(interval);
        // card_text.innerHTML = original_text.substr(0, original_text.length -1)
    }

    card.animate(
        {
            transform: `rotatey(${rotate_y}deg) 
                        rotatex(${rotate_x}deg)`,
        }, 
        { duration: transform_duration, fill: "forwards"}
    );

    if (lighting) {
        card.animate(
            {
                "background": `linear-gradient(${angle}deg, rgba(255,255,255,${0.3}), rgba(0,0,0,${0.2}))
                            ,url(${img}) left center/200px 200px no-repeat`,
            }, 
            { duration: 100, fill: "forwards"}
        );
    } else {
        card.animate(
            {
                "background": `url(${img}) left center/200px 200px no-repeat`,
            }, 
            { duration: 100, fill: "forwards"}
        );
    }
}


export {animate_card}