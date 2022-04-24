const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("cursor", "top: "+(e.pageY - 16)+"px; left: "+(e.pageX - 16)+ "px;")
});

const nextButton = document.querySelector(".next-button");


const levelOne= document.querySelector(".level-one");
const levelTwo= document.querySelector(".level-two");
const levelThree= document.querySelector(".level-three");
const levelFour= document.querySelector(".level-four");

const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

let currentLevel = 1;
const levels = [
  null,
  levelOne,
  levelTwo,
  levelThree,
  levelFour,
];
//
//
const collisionCheck = (value) => {
  if(value === "maze-border") alert ("game over...Try again.");
  if(value === "finish"){
    nextButton.style.opacity= 1;
    nextButton.style.pointerEvents= "all";
    levels[currentLevel].style.pointerEvents = "none";
    nextButton.textContent = `level ${currentLevel + 1}`;

    if (!levels[currentLevel + 1]) {
      document.querySelector('body').style.backgroundImage = "url('assets/finish line.jpg')";
      nextButton.textContent = "Restart";
    }
  }
};

window.addEventListener("mousemove", (e) => {
  const check = e.target.classList.value;
  collisionCheck(check);
});


nextButton.addEventListener("click", () => {
  console.log(currentLevel, levels.length)
  if (currentLevel >= levels.length - 1) {
    currentLevel = 0;
    document.querySelector('body').style.backgroundImage = "url('assets/background.jpg')";
  }

  currentLevel++;
  levels.forEach((level, index) => {
    if (level !== null) {
      if (index === currentLevel) {
        level.style.display = "block"
      } else {
        level.style.display = "none";
      }
    }
  });
  nextButton.style.opacity= 0;
  nextButton.style.pointerEvents= "none";
  uiLevel.textContent= `level ${currentLevel}`;
  uiMessage.textContent = " continue!";
});
