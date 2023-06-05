var x=Math.floor(Math.random()*6)+1;
var randomImage="dice" +x+ ".png";
var imageSrc="images/" + randomImage;
var element=document.querySelectorAll("img")[0];
element.setAttribute("src", imageSrc);

var x1=Math.floor(Math.random()*6)+1;
var randomImage1="dice" +x1+ ".png";
var imageSrc1="images/" + randomImage1;
var element1=document.querySelectorAll("img")[1];
element1.setAttribute("src", imageSrc1);

if(x>x1){
  document.querySelector("h1").innerHTML="PLAYER 1 WINNS !!!";
}
else if(x<x1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINNS !!!";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
