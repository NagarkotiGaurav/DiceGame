var random1= (Math.floor(Math.random()*6)+1);
var random2= (Math.floor(Math.random()*6)+1);
var image1="/images/dice"+random1+".png";
var image2="/images/dice"+random2+".png";
var text="";

document.querySelector( ".img1").setAttribute("src",image1);
document.querySelector( ".img2").setAttribute("src",image2);

if(random1>random2){
  text=" 🚩Player1 wins!";
}
else if(random2>random1){
    text=" Player2 wins!🚩 ";
  }
  else{
    text="Draw!";
  }

document.querySelector(".container h1").innerHTML=text;