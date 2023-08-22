
let cards = [];


function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

window.onload = function () {
    cards = document.getElementsByClassName("card-wrap");
    window.onpointermove({clientX: window.innerWidth / 2, clientY: window.innerHeight / 2})
}

function animate_card(event, card, wrapper, img, lighting = true, multiplier = 1.0) {
    const { clientX, clientY } = event;

    let rect = wrapper.getBoundingClientRect();
    const x = ((rect.right - rect.left) - clientX) + (rect.x - (rect.width / 2));
    const y = ((rect.bottom - rect.top) - clientY) + (rect.y - (rect.height / 2));
        

    const rotate_y = clamp(((x * 3 * multiplier)/(window.innerWidth * 5)) * 360, -20 * multiplier, 20 * multiplier);
    const rotate_x = clamp(-((y * 3 * multiplier)/(window.innerHeight * 5)) * 360, -20 * multiplier, 20 * multiplier);
    
    let angle = (Math.atan2(y,x) / Math.PI) * 180 + 90;

    if (Math.abs(x) > rect.width * 1.2 || Math.abs(y) > rect.height * 1.2) {
        card.animate(
            {
                transform: `rotatey(0deg) 
                            rotatex(0deg)`,
            }, 
            { duration: 2000, fill: "forwards"}
        );
    } else {
        card.animate(
            {
                transform: `rotatey(${rotate_y}deg) 
                            rotatex(${rotate_x}deg)`,
            }, 
            { duration: 1000, fill: "forwards"}
        );
    }

    if (lighting) {
        card.animate(
            {
                background: `linear-gradient(${angle}deg, rgba(255,255,255,${0.3}), rgba(0,0,0,${0.2}))
                            ,url(${img})`,
                backgroundSize: "cover",
            }, 
            { duration: 100, fill: "forwards"}
        );
    }
}

window.onpointermove = event => { 

    for (let i = 0; i < cards.length; i ++) {
        let card = cards[i].getElementsByClassName("card")[0];
        let card_top = cards[i].getElementsByClassName("card-top")[0];

        animate_card(event, card, cards[i], "assets/heron_bk_1000.png");
        if (card_top)
            animate_card(event, card_top, cards[i], 
                        "assets/heron_head_1000.png", false, 0.8);
    }

}