import pokemonProducts from "./mock.js";

const mainSection = document.createElement("div");

const bodyEl = document.querySelector("body");

const expansionSectionEl = document.querySelector(".expansion_section");
const tgSectionEl = document.querySelector(".tg_section");
const fullArtSectionEl = document.querySelector(".full-art_section");
const astriLucenti = document.querySelector(".astri_lucenti");
const originePerduta = document.querySelector(".origine_perduta");
const lucentezzaSiderale = document.querySelector(".lucentezza_siderale");
const evoluzioniEteree = document.querySelector(".evoluzioni_eteree");



const createCard = (product, parent) => {
    const cardEl = document.createElement("div");
    const cardDescription = document.createElement("div")
    const cardImgEl = document.createElement("img");
    const cardTitleEl = document.createElement("h1");0
    const cardParEl = document.createElement("p");
    const cardPriceEl = document.createElement("h2");
    const cardGradeEl = document.createElement("h2");
    const cardButtonEl = document.createElement("button");
  
    cardEl.className = "card";
    cardImgEl.className ="imgCard";
    cardDescription.className ="descriptionCard";
    cardGradeEl.className ="gradeCard";
    cardButtonEl.className ="button_card";
    cardImgEl.setAttribute("src", product.image);
    cardImgEl.setAttribute("alt", product.title);
    cardTitleEl.textContent = product.name;
    cardParEl.textContent = product.expansion;
    cardPriceEl.textContent = product.price;
    cardGradeEl.textContent = product.id;
    cardButtonEl.textContent = "🖤";

    cardButtonEl.addEventListener("click", () => alert("Carta aggiunta con successo ai Preferiti!"));
  
    cardEl.append(cardImgEl, cardDescription, cardButtonEl);
    cardDescription.append(cardTitleEl, cardParEl, cardPriceEl, cardGradeEl)
    parent.appendChild(cardEl);
    console.log(cardEl);
  };

  
const expansion1 = pokemonProducts.filter((product) => product.expansion === "ASTRI LUCENTI");
console.log(expansion1);
expansion1.forEach((product) => createCard(product, astriLucenti));

const expansion2 = pokemonProducts.filter((product) => product.expansion === "ORIGINE PERDUTA");
console.log(expansion2);
expansion2.forEach((product) => createCard(product, originePerduta));

const expansion3 = pokemonProducts.filter((product) => product.expansion === "LUCENTEZZA SIDERALE");
console.log(expansion3);
expansion3.forEach((product) => createCard(product, lucentezzaSiderale));

const expansion4 = pokemonProducts.filter((product) => product.expansion === "EVOLUZIONI ETEREE");
console.log(expansion4);
expansion4.forEach((product) => createCard(product, evoluzioniEteree));

const tgSection = pokemonProducts.filter((product => { return product.id.includes("TG")}));
console.log(tgSection);
tgSection.forEach((product) => createCard(product, tgSectionEl));


const fullArtSection = pokemonProducts.filter((product) => product.type === "full-art");
console.log(fullArtSection);
fullArtSection.map((product) => createCard(product, fullArtSectionEl));
