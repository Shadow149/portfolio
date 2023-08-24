
let blob = null;

function animate_blob(event) {

    if (!blob) {
        blob = document.getElementById("blob");
    }

    const { clientX, clientY } = event;

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

export {animate_blob}