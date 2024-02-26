function openLetter() {
  document.getElementById("truck-container").style.left = "100%";
  setTimeout(() => {
    document.getElementById("letter-container").style.display = "block";
    document.getElementById("letter-content").innerHTML = "Thank you for the drawing Nehir, graphic design really is your passion <333";
  }, 2000); // Wait for the truck to reach the end
}
