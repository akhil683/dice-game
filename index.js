        // dice1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[0].setAttribute("src", "dice" + randomNumber1 + ".png");

        // dice2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[1].setAttribute("src", "dice" + randomNumber2 + ".png");

        // announcing winner
if  (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 won";
} 

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 won";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}
