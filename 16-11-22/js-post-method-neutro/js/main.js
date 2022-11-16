import {c, q, GET, POST, DELETE} from './utils.js';

const url = "http://localhost:3000/pokemon";
let i = 1

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");
const bodyEl = q("body");
const container = q(".pokemon_container");

form.addEventListener("submit", (e) => {
    const data = {
        name: element.pokeName.value,
        type: element.pokeType.value
    };

    POST(url, data)
    .then((response) => response.json())
    .then((res) => {
        console.log("Success:", res);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
})



const createCard = (res) => {
    const cardEl = c("div");
    const idEl = c("h3");
    const nameEl = c("h2");
    const typeEl = c("h3");
    const imgEl = c("img");
    const button = c("button");

    cardEl.className = "card";
    nameEl.className = "pokemon_name";
    typeEl.className = "pokemon_type";
    idEl.className = "pokemon_id";
    imgEl.className = "img";
    button.className = "card_button";

    nameEl.textContent = res.name;
    typeEl.textContent = "Type:" + res.type;
    idEl.textContent = res.id + "°";
    button.textContent = "🚮";
    i++;
    imgEl.setAttribute("src", `https://picsum.photos/100/100/?${i}`);
    imgEl.setAttribute("alt", "image");

    cardEl.append(idEl, nameEl, typeEl, imgEl, button);
    container.append(cardEl);
    bodyEl.append(container);

    button.addEventListener("click", () => {
        DELETE(url, res.id)
    })

}

window.onload = GET(url).then(res => res.map((res) => createCard(res)))