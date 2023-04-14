// Initialize click variable
let clicks = 0;

// Retrieve the click count from local storage if it exists
function initClicks() {
    let currClicks = localStorage.getItem("clicks");
    if (currClicks == undefined) {
        localStorage.setItem("clicks", 0);
        clicks = 0;
    } else {
        clicks = parseInt(currClicks);   
    }
    document.getElementById("clicks").innerHTML = clicks;
}

// Increments the click count and saves it to local storage
function incrementClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("button").onclick = incrementClick;
initClicks();