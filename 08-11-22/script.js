const bodyEl = document.querySelector("body");

const createCard = (value) => {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const idEl = document.createElement("h3");
    const nameEl = document.createElement("h1");
    const typeEl = document.createElement ("h2");

    cardEl.className = "card";
    idEl.className = "pokemon_id";
    imgEl.className = "pokemon_image";
    nameEl.className = "pokemon_name";
    typeEl.className = "pokemon_type";

    imgEl.setAttribute("src", value.sprites.other.dream_world.front_default);

    idEl.textContent = `${value.id}`;
    nameEl.textContent = value.name;
    typeEl.textContent = `${value.types[0].type.name}`;

    cardEl.append(imgEl, idEl, nameEl, typeEl);
    bodyEl.append(cardEl);

    if(typeEl === "electric") {
        cardEl.style.backgroundColor = '#FCF7DE'
    } else if (value.types[0].type.name === "water") {
        cardEl.style.backgroundColor = '#DEF3FD'
    } else if (value.types[0].type.name === "ground") {
        cardEl.style.backgroundColor = '#f4e7da'
    } else if (value.types[0].type.name === "rock") {
        cardEl.style.backgroundColor = '#d5d5d4'
    } else if (value.types[0].type.name === "fairy") {
        cardEl.style.backgroundColor = '#fceaff'
    } else if (value.types[0].type.name === "poison") {
        cardEl.style.backgroundColor = '#98d7a5'
    } else if (value.types[0].type.name === "bug") {
        cardEl.style.backgroundColor = '#f8d5a3'
    } else if (value.types[0].type.name === "dragon") {
        cardEl.style.backgroundColor = '#97b3e6'
    } else if (value.types[0].type.name === "psychic") {
        cardEl.style.backgroundColor = '#eaeda1'
    } else if (value.types[0].type.name === "flying") {
        cardEl.style.backgroundColor = '#F5F5F5'
    } else if (value.types[0].type.name === "fighting") {
        cardEl.style.backgroundColor = '#E6E0D4'
    } else if (value.types[0].type.name === "normal") {
        cardEl.style.backgroundColor = '#F5F5F5'
    } else if (value.types[0].type.name === "fire") {
        cardEl.style.backgroundColor = '#FDDFDF'
    } else if (value.types[0].type.name === "grass") {
        cardEl.style.backgroundColor = '#DEFDE0'
    } else if (value.types[0].type.name === "ghost") {
        cardEl.style.backgroundColor = '#705898'
    } else if (typeEl === "ice") {
        cardEl.style.backgroundColor = '#98d8d8'
    }
}

const pokemonData = fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((res) => res.json())
  .then((pokemonArray) => {
    pokemonArray.results.map((key) => fetch(key.url)
    .then((res) => res.json()
    .then((pokemon) => createCard(pokemon))))})
