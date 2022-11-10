const bodyEl = document.querySelector("body");

//const loadingEl = document.createElement("h1");
//loadingEl.textContent = "Pokemon in arrivo..";

const createCard = (value) => {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const idEl = document.createElement("h3");
    const nameEl = document.createElement("h1");
    const typeEl = document.createElement ("h2");

    cardEl.className = (`bg-${value.types[0].type.name}`)
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

    imgEl.setAttribute("src", value.sprites.other.dream_world.front_default);

    idEl.textContent = "#" + createId(value.id);
    nameEl.textContent = value.name;
    typeEl.textContent = `${value.types[0].type.name}`;

    cardEl.append(imgEl, idEl, nameEl, typeEl);
    bodyEl.append(cardEl);

}

const urlArray = [];

for (let i = 1; i <= 150; i++) {
    urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

let request = urlArray.map((url) => {
    //loadingEl.classList.add("active");
    return fetch(url) .then((res) => res.json());
})

Promise.all(request) 
.then((res) => res.map((pokemon) => createCard(pokemon))
//.finally(() => loadingEl.classList.remove("active")))
);