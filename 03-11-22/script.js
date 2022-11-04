import pokemonProducts from "./mock.js";

const mainSection = document.createElement("div");

const bodyEl = document.querySelector("body");
//const navbarEl = document.querySelector(".navbar");
const heroEl = document.querySelector(".hero");
const expansionSectionEl = document.querySelector(".expansion_section");
const expansionCardsEl = document.querySelector(".expansion_cards");
const titleExpansion = document.querySelector("exp_title");
const tgSectionEl = document.querySelector(".tg_section");
const tgCardsEl = document.querySelector(".tg_cards");
const fullArtSectionEl = document.querySelector(".full-art_section");
const fullArtCardsEl = document.querySelector(".full-art_cards");
const contactsEl = document.querySelector(".contacts");


const createCard = (product, parent) => {
    const cardEl = document.createElement("div");
    const cardDescription = document.createElement("div")
    const cardImgEl = document.createElement("img");
    const cardTitleEl = document.createElement("h1");
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


//pokemonProducts.map((product) => createCard(product, bodyEl));
const expansion1 = pokemonProducts.filter((product) => product.expansion === "ASTRI LUCENTI");
console.log(expansion1);
expansion1.forEach((product) => createCard(product, expansionSectionEl));

const expansion2 = pokemonProducts.filter((product) => product.expansion === "ORIGINE PERDUTA");
console.log(expansion2);
expansion2.forEach((product) => createCard(product, expansionSectionEl));

const expansion3 = pokemonProducts.filter((product) => product.expansion === "LUCENTEZZA SIDERALE");
console.log(expansion3);
expansion3.forEach((product) => createCard(product, expansionSectionEl));

const expansion4 = pokemonProducts.filter((product) => product.expansion === "EVOLUZIONI ETEREE");
console.log(expansion4);
expansion4.forEach((product) => createCard(product, expansionSectionEl));

//expansionCardsEl.append(expansion1, expansion2, expansion3, expansion4);
//expansionSectionEl.append(titleExpansion, expansionCardsEl);


const tgSection = pokemonProducts.filter((product => { return product.id.includes("TG")}));
console.log(tgSection);
tgSection.map((product) => createCard(product, tgSectionEl));

//tgSectionEl.append(tgSection);


const fullArtSection = pokemonProducts.filter((product) => product.type === "full-art");
console.log(fullArtSection);
fullArtSection.map((product) => createCard(product, fullArtSectionEl));
//fullArtSectionEl.append(fullArtSection);

//document.append(cardEl);
