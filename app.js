console.log("connected");

let innerConatiner = document.querySelector(".inner-container");

const imageArray = [
    "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
    "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
    "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
    "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
    "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
    "https://hotemoji.com/images/emoji/t/kqmjgo15r8ryt.png",
    "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png",
    "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
    "https://hotemoji.com/images/emoji/g/1kwp9ory88zdg.png",
    "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
    "https://hotemoji.com/images/emoji/7/kqmjgo1y6zn87.png",
    "https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png",
    "https://hotemoji.com/images/emoji/a/kqmjgo4xj2ba.png",
    "https://hotemoji.com/images/emoji/5/kqmjgo1iwoh75.png",
    "https://hotemoji.com/images/emoji/l/6z6f7w15q6dkl.png",
    "https://hotemoji.com/images/emoji/k/6z6f7wbc2a7k.png"
];


// Shuffle the image URLs array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledImgArr = shuffleArray(imageArray);

let cardDisplayed = 0;

for (let index = 0; index < shuffledImgArr.length; index++) {

    // if (cardDisplayed === 2) {
    //     break; // Only display two cards
    // }

    const flipBox = document.createElement('div');
    flipBox.className = "flip-box";

    const image = document.createElement('img');
    image.src = shuffledImgArr[index];
    image.alt = "Card Image";

    flipBox.appendChild(image);
    innerConatiner.appendChild(flipBox);

    // cardDisplayed++;

    flipBox.addEventListener("click", (event) => {
        // event.target.style.display = "none";
        // console.log(event.target.className); 
        
        if (event.target.className === "flip-box") {
            event.target.classList.add("flip");
            // event.target.classList = "flip";
            event.target.children[0].style.display = "block";
        } 
        
        setTimeout(() => {
                   event.target.classList.remove("flip");
                   event.target.children[0].style.display = "none";

        }, 1000);  
        
        cardDisplayed++;
        // cardDisplayed--;
    })


}

console.log(innerConatiner);


// let box1 = document.querySelector(".inner-container");

// imageArray.forEach((image) => {
//     box1.appendChild(image);
//   });

// console.log(box1);

// box1.addEventListener("click", (event)=>{

//     clickedCardArr.push(box1);

//     if(clickedCardArr.length < 3){

//     }
//     else{

//     }

//     if(event.target.className === "flip-box"){
//         event.target.classList.add("flip");
//         event.target.children[0].style.display = "block"; 
//     }
// })

// let clickedCardArr = [];



