var randomnumber=Math.floor(Math.random() * 6)+1;
var randomimage="dice"+randomnumber+".png";
var randomimageee="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageee);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomnumber2+".png";
var randomimageeee="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimageeee);
if(randomnumber>randomnumber2)
{
    document.querySelector("h1").innerHTML="👏player1 wins!";

}
else if(randomnumber2>randomnumber)
{
    document.querySelector("h1").innerHTML="👏player2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw!";
}