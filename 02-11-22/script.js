
const basSection = document.querySelector(".basics_section");
const luxSection = document.querySelector(".luxury_section");
const basCardList = document.querySelector(".basics_card_list");
const luxCardList = document.querySelector(".luxury_card_list");

const titleBas = document.createElement("h1");
const titleLux = document.createElement("h1");

titleBas.textContent = "Basics";
titleLux.textContent = "Luxury";

basSection.appendChild(titleBas);
luxSection.appendChild(titleLux);

const createCard = (title, imgUrl, description, price) => {
 const cardEl = document.createElement("div");
 cardEl.className = "card";

 const titleCard = document.createElement("h1");
 titleCard.textContent = title;

 const imgCard = document.createElement("img");
 imgCard.setAttribute("src", imgUrl);

 const parCard = document.createElement("p");
 parCard.textContent = description;

 const priceCard = document.createElement("h2");
 priceCard.textContent = price;

 cardEl.append(titleCard, imgCard, parCard, priceCard);
 document.appendChild(cardEl);
}

products
   .filter((product) => product.price <= "70")
   .map((product) =>
     createCard(
       product.title,
       product.image,
       product.description,
       product.category
     )
  );

products
   .filter((product) => product.price >= "70")
   .map((product) =>
     createCard(
       product.title,
       product.image,
       product.description,
       product.category
     )
  );


import products from "./products.js";


