// game pattern

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // flash the button
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

nextSequence();


function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
