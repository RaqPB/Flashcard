
let backHomepage = document.getElementById("backHomepage");

let flashcard = document.querySelector(".flashcard");
let flipCard = document.querySelector(".flipCard");
let frontcard = document.querySelector(".frontcard");
let backcard = document.querySelector(".backcard");

let frontText = document.querySelector(".frontText");
let backText = document.querySelector(".backText");

let saveButton = document.querySelector(".save");
let cancelButton = document.querySelector(".cancel");

flipCard.addEventListener("click", () => {
    flashcard.classList.toggle("flip");
});

saveButton.addEventListener("click", () => {
});

cancelButton.addEventListener("click", () => {
});

backHomepage.addEventListener("click", () => {
    window.location.href = "homepage.html";
});