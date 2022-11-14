let i = 1;
let url = `https://jsonplaceholder.typicode.com/posts/${i}`

const bodyEl = document.querySelector("body");
const cardEl = document.querySelector(".card");
const higherDiv = document.querySelector(".higher");
const titleEl = document.querySelector("h1");
const idEl = document.querySelector("h2");
const postEl = document.querySelector("p");
const btnSect = document.querySelector(".buttons");
const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
const loader = document.querySelector(".lds-heart");


const createCard = (res) => {
    
    function createId (id) {
        if(!id) return null;
        if(id < 10) {return `${id}`}
        else if (id < 100) {return `${id}`}
        return id
    }

    titleEl.innerHTML = res.title;
    postEl.innerHTML = res.body;
    idEl.innerHTML = "#" + createId(res.id);

    btnSect.append(btnPrev, btnNext);
    higherDiv.append(titleEl, idEl)
    cardEl.append(higherDiv, postEl);
    bodyEl.append(cardEl, btnSect);
}

btnPrev.addEventListener("click", () => {
    i--
    url = `https://jsonplaceholder.typicode.com/posts/${i}`;
    fetch(url)
    .then((res) => res.json())
    .then((res) => createCard(res));
    if (i <=1)
    btnPrev.disabled = true;
    btnNext.disabled = false;
    }
)

btnNext.addEventListener("click", () => {
    i++
    url = `https://jsonplaceholder.typicode.com/posts/${i}`;
    fetch(url)
    .then((res) => res.json())
    .then((res) => createCard(res));
    if (i >= 10) btnNext.disabled = true;
    else btnPrev.disabled = false;
})

function createPost (url) {
    loader.classList.add("active");
    fetch(url)
     .then((res) => res.json())
     .then((res) => createCard(res))
     .finally(() => loader.classList.remove("active"));
}

bodyEl.append(loader);
