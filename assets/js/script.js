/* This code is adding event listeners to all buttons on the page and displaying an alert message when a button is clicked. The addEventListener() function is used to add an event listener for the click event on each button. The event listener is a function that checks the data-type attribute of the clicked button to determine whether it was a "submit" button or a game type button. If the button is a "submit" button, it displays an alert message saying "You clicked Submit!". If it is a game type button, it gets the value of the data-type attribute and displays an alert message with the game type that was clicked.

The code is wrapped inside a DOMContentLoaded event listener to make sure that the JavaScript code is executed only after the page has finished loading. This ensures that all the necessary elements, including the buttons, are available for the code to manipulate. */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (button.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}!`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

