import {c, q, GET, POST, DELETE, PATCH} from './utils.js';

const url = "http://localhost:3000/pokemon";
let i = 1

const form = document.forms.pokemon;
const element = form.elements;

const modifyForm = document.forms.modifyForm;
const modifyElements = modifyForm.elements;

const ul = q(".pokemonList");
const bodyEl = q("body");
const container = q(".pokemon_container");
const searchBar = q(".search_bar");

//searchBar.addEventListener("input", (e) => {
    //const searchString = e.target.value
    //container.replaceChildren();

    //pokemon.filter(res => res.name.includes(searchString))
    //.map(res => createCard(res))
//})

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
    const modifyButton = c("button");

    cardEl.className = "card";
    nameEl.className = "pokemon_name";
    typeEl.className = "pokemon_type";
    idEl.className = "pokemon_id";
    imgEl.className = "img";
    button.className = "card_button";

    nameEl.textContent = res.name;
    typeEl.textContent = res.type;
    idEl.textContent = res.id;
    button.textContent = "🚮";
    modifyButton.textContent = "MODIFY";
    i++;
    imgEl.setAttribute("src", `https://picsum.photos/100/100/?${i}`);
    imgEl.setAttribute("alt", "image");

    cardEl.append(idEl, nameEl, typeEl, imgEl, button, modifyButton);
    container.append(cardEl);
    bodyEl.append(container);

    button.addEventListener("click", () => {
        DELETE(url, res.id)
    })

   modifyButton.addEventListener("click", () => {
        modifyForm.pokeNameMod.value = nameEl.textContent
        modifyForm.pokeTypeMod.value = typeEl.textContent
        modifyForm.pokeIdMod.value = idEl.textContent
   })

}

modifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = modifyElements.pokeIdMod.value
    const result = {
        name: modifyElements.pokeNameMod.value,
        type: modifyElements.pokeTypeMod.value
    }

    PATCH(url, id, result)
    .then(() => location.reload())
    .catch(e => console.log(e))
})

window.onload = GET(url).then(res => res.map((res) => createCard(res)))