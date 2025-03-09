

document.getElementById("roll-dice").addEventListener("click" , function () {


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceimg = "dice" + randomNumber1 + " copy" + ".png";
var imgsrc = "images/" + diceimg ;
document.querySelectorAll("img")[0].setAttribute("src" , imgsrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceimg2 = "dice" + randomNumber2 + " copy" + ".png";
var imgsrc2 = "images/" + diceimg2 ;
document.querySelectorAll("img")[1].setAttribute("src" , imgsrc2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML=("🚩 Player 1 wins");
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=("🚩 Player 2 wins");
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML=("Draw!");
}

});


document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").classList.add("hidden"); // Hide welcome screen
    document.getElementById("game-container").classList.remove("hidden"); // Show game
});





