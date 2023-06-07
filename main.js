let cardsArray = [
  {
    name: "teddy",
    img: "./images/teddy.png",
  },
  {
    name: "star",
    img: "./images/star.png",
  },
  {
    name: "cry",
    img: "./images/cry.png",
  },
  {
    name: "laugh",
    img: "./images/lagh.png",
  },
  {
    name: "ghost",
    img: "./images/ghost.png",
  },
  {
    name: "monkey",
    img: "./images/monkey.png",
  },
];

const parentDiv = document.querySelector("#card-section");
//dyplicate each card
const gameCard = cardsArray.concat(cardsArray);

let suffleChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

//match the cards
const card_matches = () => {
  let card_selected = document.querySelectorAll(".card-selected");
  card_selected.forEach((curElem) => {
    curElem.classList.add("card-match");
  });
};

//reset the game for further cards
let resetGame = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card-selected");
  card_selected.forEach((curElem) => {
    curElem.classList.remove("card-selected");
  });
};

parentDiv.addEventListener("click", (event) => {
  let currentCard = event.target;
  if (currentCard.id === "card-section") return false;
  clickCount++;
  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = currentCard.parentNode.dataset.name;
      currentCard.parentNode.classList.add("card-selected");
    } else {
      secondCard = currentCard.parentNode.dataset.name;
      currentCard.parentNode.classList.add("card-selected");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        //currentCard.classList.add('card-match');
        setTimeout(() => {
          card_matches();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});
for (let i = 0; i < suffleChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = suffleChild[i].name;
  // childDiv.style.backgroundImage = `url(${suffleChild[i].img})`;

  const frontDiv = document.createElement("div");
  frontDiv.classList.add("front-card");

  const backDiv = document.createElement("div");
  backDiv.classList.add("back-card");

  backDiv.style.backgroundImage = `url(${suffleChild[i].img})`;

  parentDiv.append(childDiv);

  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);
}
