const bodyEl = document.querySelector("body");
const cardEl = document.querySelector(".card");
const btn = document.getElementById("card_btn");
const card_title = document.getElementById("title");
const card_message = document.getElementById("message");

const urlAdvice = " https://api.adviceslip.com/advice";

function getAdvice(_URL) {
    fetch(urlAdvice, {cache: "no-cache"})
        .then((res) => res.json())
        .then((res) => {
            card_title.innerHTML = ("ADVICE" + "#" + res.slip.id)
            card_message.innerHTML = ('"' + res.slip.advice + '"')
        });
}

window.onload = getAdvice(urlAdvice);

btn.addEventListener("click", () => {
   getAdvice(urlAdvice)
})

bodyEl.append(cardEl)
