let acertos = 0;
let erros = 0;

let acertosNum = document.querySelector(".acertosNum");
let errosNum = document.querySelector(".errosNum");

let rever = false;

let flipFlashcard = document.querySelector(".flashcard");
let frontcard = document.querySelector(".frontcard")
let backcard = document.querySelector(".backcard")
let check = document.getElementById("check")
let mistake = document.getElementById("mistake")
let backHomepage = document.getElementById("backHomepage")

const content = [
    {
        textFrontcard:"食べる（たべる）",
        textBackcard:"Verbo que significa 'comer'.\nUtilizado para descrever o ato de ingerir alimentos.\nExemplo: パンを食べます (Eu como pão)."
    }
];

frontcard.querySelector("p").textContent = content[0].textFrontcard;
backcard.querySelector("p").textContent = content[0].textBackcard;

check.addEventListener("click", () => {
    acertos 
    += 1;
    acertosNum.textContent = acertos;
});

mistake.addEventListener("click", () => {
    erros 
    += 1;
    errosNum.textContent = erros;
});

backHomepage.addEventListener("click", () => {
    window.location.href = "homepage.html";
});

flipFlashcard.addEventListener("click", () => {
    flipFlashcard.classList.toggle("flip");
});