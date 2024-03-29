const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Update the response for the "Yes" button
  question.innerHTML = "Thank you for the drawing Nehir, graphic design really is your passion <333 (also free Palestine)";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  // Remove buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// Keep bouncing "No" button even after click on mobile
noBtn.addEventListener("click", () => {
  bounceNoButton();
});

noBtn.addEventListener("mouseover", () => {
  bounceNoButton();
});

function bounceNoButton() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
