let i = 1;
let url = `https://pokeapi.co/api/v2/pokemon/${i}`;

const sectionEl = document.querySelector("section");
fetch(url)
.then((res) => res.json())
.then((res) => createCard(res));

const cardEl = document.createElement("div");
const imgEl = document.createElement("img");
const nameEl = document.createElement("h1");
const idEl = document.createElement("h2");
const typeEl = document.createElement("h3");

const createCard = (res) => {
    cardEl.className = "card";
    imgEl.setAttribute("src", res.sprites.other.dream_world.front_default);
    imgEl.setAttribute("alt", res.name);

    cardEl.className = (`bg-${res.types[0].type.name}`)
    idEl.className = "pokemon_id";
    imgEl.className = "pokemon_image";
    nameEl.className = "pokemon_name";
    typeEl.className = "pokemon_type";

    function createId (id) {
        if(!id) return null;
        if(id < 10) {return `00${id}`}
        else if (id < 100) {return `0${id}`}
        return id
    }

    idEl.textContent = "#" + createId(res.id);
    nameEl.textContent = res.name;
    typeEl.textContent = `${res.types[0].type.name}`;

    cardEl.append(imgEl, nameEl, idEl, typeEl)
    sectionEl.append(cardEl);
}

const btnPrev = document.querySelector(".btnPrev")
const btnNext = document.querySelector(".btnNext")

btnPrev.addEventListener("click", () => {
    i--
    url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
    .then((res) => res.json())
    .then((res) => createCard(res));
    if (i <=2)
    btnPrev.disabled = true;
    btnNext.disabled = true;
    }
)

btnNext.addEventListener("click", () => {
    i++
    url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
    .then((res) => res.json())
    .then((res) => createCard(res));
    if (i >= 10) btnNext.disabled = true;
    if (i === 1) btnPrev.disabled = true;
    else btnPrev.disabled = false;
})

