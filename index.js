var num1=Math.round(((Math.random())/2)*10)+1;
switch(num1){
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;
}
var num2=Math.round(((Math.random())/2)*10)+1;
switch(num2){
    case 1:
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        break;
}
if (num1>num2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}