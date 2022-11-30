import { ce, qs, GET, POST, deleteActor} from './utils.js';

const urlAttori = "http://localhost:3000/attori";
const urlNuovoAttore = "http://localhost:3000/attore";
const cardContainer = qs(".card_container");
const form = document.forms.nuovi_attori;
const element = form.elements;

const createCard = (data) => {
    const cardEl = ce("div");
    cardEl.classList.add("card_attore");

    const imgEl = ce("img");
    imgEl.className = "actor_placeholderimg";
    imgEl.setAttribute("src", `https://picsum.photos/300/400?${data.id}`);
    imgEl.setAttribute("alt", "imgGallery");

    const nameEl = ce("h3");
    nameEl.className = "nome_attore";

    const surnameEl = ce("p");
    surnameEl.className = "cognome_attore";

    const dateEl = ce("p");
    dateEl.className = "nascita_attore";

    const btnEl = ce("button");
    btnEl.className = "btn_card";
    btnEl.textContent = "Elimina";

    const textContainerEl = ce("div");
    textContainerEl.className = "text_container";
    textContainerEl.append(nameEl, surnameEl);

    const containerEl = ce("div");
    containerEl.className = "container_general"
    containerEl.append(textContainerEl, btnEl);

    nameEl.textContent = data.nome;
    surnameEl.textContent = data.cognome;
    dateEl.textContent = data.data_nascita;

    cardContainer.append(cardEl);
    cardEl.append(imgEl, containerEl);

    const idEl = data.id;
    console.log(idEl);

    btnEl.addEventListener("click", (e) => {
        e.preventDefault();
        deleteActor(idEl).then(() => location.reload());
      });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        nome: element.nome_attore.value,
        cognome: element.cognome_attore.value,
    }
    
    POST(urlNuovoAttore, data)
        .then((res) => res.json())
        .then((res) => {
            console.log("Fatto:", res);
            location.reload();
        })
        .catch((err) => {
            console.log("Errore", err);
        });
});

window.onload = GET(urlAttori).then(res => res.map(actor => createCard(actor)));