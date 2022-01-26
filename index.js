// alert("I am linkked here");
// # STEP 1 = Page Load / page refresh
// # STEP 2 = random nos will be generated between 1-6 for 2 dices
// # STEP 3 = Compare the Dice & Update the Header & dice images

var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice"+randomNum1+".png";

var randomImageSource =  randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomDiceImage2 = "dice"+randomNum2+".png";

var randomImageSource2 =  randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);



if (randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
  }
    else if (randomNum1 < randomNum2){
   document.querySelector("h1").innerHTML = "🚩 Player 2 Wins"
    }
     else{
     document.querySelector("h1").innerHTML = "📣Its a Draw📣"
    }












// // # STEP 3 = Compare the Dice & Update the Header & dice images
//
// // if dice 1 > dice 2{
// //   Header = player 1 wins
// //   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
//
// //   img1 = dice-x
// //   img2 = dice-y
// //   }
// //    else if dice 1 < dice 2{
// //      Header = player 2 wins
// //      document.querySelector("h1").innerHTML = "🚩 Player 2 Wins"
//
// //      img1 = dice-x
// //      img2 = dice-y
// //    }
// //     else{
// //       Header = Its a draw
// //       document.querySelector("h1").innerHTML = "Its a draw";
//
// //      img1 = dice-x
// //      document.querySelectorAll("img")[1].src="file:///D:/Web%20Development/Section1%202%20-%20Dicee%20Challenge%20-%20Starting%20Files/images/dice3.png";
//
// //      img2 = dice-x
// //      document.querySelectorAll("img")[1].src="file:///D:/Web%20Development/Section1%202%20-%20Dicee%20Challenge%20-%20Starting%20Files/images/dice3.png";
// //     }
