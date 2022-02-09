/**
 * Get the image and button elements and add eventlisteners
 */

document.addEventListener("DOMContentLoaded", function() {
    
    playGame();

    let button = document.getElementsByTagName("input");
    button[0].addEventListener("click", function() {
        playGame();
    })
});

/**
 * Starts a new game with random position of the images.
 */
function playGame() {
    //Shows the backside of all the cards
    let cards = document.getElementById("back-side").children;
    for (let card of cards) {
        card.setAttribute("src", "assets/images/card.jpg");
    }

    //Create an array of 20 random unique numbers
    let arrayRandom = []
    while (arrayRandom.length < 20) {
        let number = Math.floor(Math.random()*20);
        if (arrayRandom.includes(number) === false) {
            arrayRandom.push(number);
        }
    }

    //With help of random array =
    //Create an array of the images on the front side of the card, with random order.
    let frontCards = document.getElementById("front-side").children;
    let newFrontCards = []
    for(let i = 0; i < 20; i++) {
        newFrontCards.push(frontCards[arrayRandom[i]])
    }

    //Add eventlistener "click" to all the backside cards and call turnCard function.
    let backCards = document.getElementById("back-side").children;
    for (let backCard of backCards) {
        backCard.addEventListener("click", function() {
            let i = backCard.id - 1;
            turnCard(newFrontCards, i);
        })
    }
}

/**
 * Turns the card clicked on.
 */
function turnCard(newFrontCards, i) {
    console.log(newFrontCards);
    let source = newFrontCards[i].getAttribute("src")
    //console.log(source)
    document.getElementsByTagName("img")[i].setAttribute("src", source);
}

/**
 * Checks if the turned cards are a pair or not.
 */
function checkPair() {
        alert("hello from inside the checkPair function!");
}

/**
 * Counts number of draws.
 */
function drawCount() {
    alert("hello from inside the drawCount function!");
}

/**
 * Keeps the record: The lowest drawcount for every game played sinse page loaded.
 */
function recordCound() {
        alert("hello from inside the recordCount function!");
}

/**
 * Congratulates when all pairs are found.
 */
function gameFinished() {
    alert("hello from inside the gameFinished function!");
}

