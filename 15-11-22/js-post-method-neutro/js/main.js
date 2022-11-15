import {c, q, GET, POST} from './utils.js';

let i = "/1";

const url = "http://localhost:3000/pokemon";

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
    const nameEl = c("h1");
    const typeEl = c("h2");
    const imgEl = c("img");

    cardEl.className = "card";
    nameEl.className = "pokemon_name";
    typeEl.className = "pokemon_type";
    imgEl.className = "img";

    nameEl.textContent = res.name;
    typeEl.textContent = res.type;
    imgEl.setAttribute("src", `https://picsum.photos/200/300/`);
    imgEl.setAttribute("alt", "image");

    cardEl.append(nameEl, typeEl, imgEl);
    container.append(cardEl);
    bodyEl.append(container);

}

window.onload = GET(url).then(res => res.map((res) => createCard(res)))