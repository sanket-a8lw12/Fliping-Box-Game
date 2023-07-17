console.log("connected");

let mainConatiner =  document.getElementById("main-container");

let previousCard = "";
let countFlip = 0;

let time = document.getElementById("time");
let moves = document.getElementById("moves");
let start = document.getElementById("startButton");
let timeInterval ;
let timeInSec = 0;
let movesCount = 0;

let flag = true;

start.addEventListener("click" , ()=>{
    if(flag){
        flag = false;
        timeInterval = setInterval(()=>{
            time.textContent = Number(time.textContent) + 1;
        }, 1000)
    }
})

mainConatiner.addEventListener("click", (event) => {

    console.log(event.target)

    // event.target.style.display = "none";
    console.log(event.target.classList.contains('flip-box')); 
    
    if (event.target.classList.contains("flip-box") && countFlip < 2 && flag == false) {
        moves.textContent = Number(moves.textContent) + 1;
        event.target.classList.add("flip");
     
        event.target.children[0].style.display = "block";
        if(previousCard == ""){
            previousCard = event.target
            countFlip++;
     
        }
        else if(!matchedCards(previousCard.children[0], event.target.children[0])){
   
            countFlip++;
            setTimeout(() => {
                event.target.classList.remove("flip");
                event.target.children[0].style.display = "none";
                previousCard.classList.remove("flip");
                previousCard.children[0].style.display = "none";
                previousCard = "";
                countFlip = 0;
 
 
     }, 500); 

        }
    } 
    
})

function matchedCards(imgOne, imgTwo){
    if(imgOne.src === imgTwo.src){
        previousCard = "";
        countFlip = 0;
        return true;
    }
    else{
        return false;
    }
}








































// let innerContainer = document.querySelector(".inner-container");
// // let flippedCards = [];
// // let canClick = true;
// // https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png
// const imageArray = [
//   "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
//   "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
//   "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
//   "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
//   "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
//   "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
//   "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png",
//   "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
//   "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
//   "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
//   "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
//   "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
//   "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
//   "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
//   "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
//   "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png"
// ];

// // Shuffle the image URLs array
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {

//     const j = Math.floor(Math.random() * (i + 1));

//     [array[i], array[j]] = [array[j], array[i]];

//   }
//   return array;
// }

// const shuffledImgArr = shuffleArray(imageArray);

// for (let index = 0; index < shuffledImgArr.length; index++) {

//   const flipBox = document.createElement("div");
//   flipBox.className = "flip-box";

//   const image = document.createElement("img");
//   image.src = shuffledImgArr[index];
//   image.alt = "Card Image";

// //   flipBox.appendChild(image);
// //   innerContainer.appendChild(flipBox);

//   const frontDiv = document.createElement('div');
//   frontDiv.classList.add("front-card");

//   const backDiv = document.createElement('div');
//   backDiv.classList.add("back-card");
//   backDiv.appendChild(image);
// //   backDiv.style.backgroundImage = `url(${shuffleArray[index]})`;

//   flipBox.appendChild(frontDiv);
//   flipBox.appendChild(backDiv);
//     // backDiv.appendChild(image);
//     innerContainer.appendChild(flipBox);
// }

// // let previousCard = "";

// let clickCount = 0;

// let firstCard = "";
// let secondCard = "";

// function card_matches(){
//     let card_selected = document.querySelectorAll(".card-selected");
//     console.log("'card match fun")
//     console.log(card_selected);
//     card_selected.forEach((current) =>{
//         current.classList.add("card-match");
//     })
// }

// function reset_game(){
//      firstCard = "";
//      secondCard = "";
//      clickCount = 0;

//     let card_selected = document.querySelectorAll(".card-selected");
//     // console.log("'card match fun")
//     // console.log(card_selected);
//     card_selected.forEach((current) =>{
//         current.classList.remove("card-selected");
//     })
// }
// innerContainer.addEventListener("click", (event)=>{

//     let currentCard = event.target;

//     currentCard.parentNode.children[0].style.display = "none";
//     currentCard.parentNode.children[1].style.display = "block";

//     if(currentCard.id === "main-container"){
//         return false;  // to handle the condition that it should not click on inner container;
//     } 

//     clickCount++;
//     console.log(clickCount + "click")

//     if(clickCount < 3){
       
//         if(clickCount === 1){
//             // firstCard = currentCard.
//             firstCard = currentCard.parentNode.children[0].src;
//             currentCard.parentNode.classList.add("card-selected");
//             currentCard.parentNode.children[0].style.display = "block";
//             console.log(firstCard + " * ")
//         }
//         else{
//             secondCard = currentCard.parentNode.children[0].src;
//             currentCard.parentNode.classList.add("card-selected");
//             console.log(secondCard + " * ")
//         }      
        
     
//         if(firstCard !== "" && secondCard !== ""){
//             if(firstCard === secondCard){
//                 // currentCard.classList.add("card-match");
//                 console.log("matched =====")
//                 setTimeout(() => {
//                     card_matches();
//                     reset_game();
//                 }, 1000);
//             }
//             else{
//                 setTimeout(() => {
//                     reset_game();
//                 }, 1000);
//             }
//         }        

//     } 

// })




























// innerContainer.addEventListener("click", (event) => {
//     if(event.target.classList.contains("flip-box")){
//         if (canClick && !event.target.classList.contains("flip")) {
//         event.target.classList.add("flip");
//         event.target.children[0].style.display = "block";
//         flippedCards.push(event.target);
//         console.log(flippedCards);
//         console.log(event.target);

//         if(previousCard === ""){
//             previousCard = event.target;
//             console.log(previousCard)
//         }
//         else{
//             setTimeout(() => {
//                 console.log(event.target);
//                 console.log(previousCard , "---------");
                
//                 event.target.children[0].classList.remove("flip");
//                 previousCard.children[0].classList.remove("flip");
//                 event.target.children[0].style.display = "none";
//                 previousCard.children[0].style.display = "none";
//                 flippedCards = [];
//                 previousCard="";
//                 canClick = true;
//                 }, 1000);
//         }

        
//         // if (flippedCards.length === 2) {
//         //     canClick = false;
//         // }
//         }
//     }
//   });





























// console.log("connected");

let innerConatiner = document.querySelector(".inner-container");

// const imageArray = [
//     "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
//     "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
//     "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
//     "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
//     "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
//     "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
//     "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png",
//     "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
//     "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
//     "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
//     "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
//     "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
//     "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
//     "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
//     "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
//     "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png"
// ];


// Shuffle the image URLs array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// const shuffledImgArr = shuffleArray(imageArray);

// let cardDisplayed = 0;

// for (let index = 0; index < shuffledImgArr.length; index++) {

//     const flipBox = document.createElement('div');
//     flipBox.className = "flip-box";

//     const image = document.createElement('img');
//     image.src = shuffledImgArr[index];
//     image.alt = "Card Image";

//     flipBox.appendChild(image);
//     innerConatiner.appendChild(flipBox);

//     // cardDisplayed++;

   


// }



