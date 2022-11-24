export const qs = (type) => document.querySelector(type);

export const ce = (type) => document.createElement(type);

export const GET = async (BASE_URL) =>
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);

export const DELETE = async (BASE_URL, id) => {
	return await fetch (`${BASE_URL}/${id}`, {
		method: 'DELETE'
	})
}

const formElement = document.forms.formEl.elements;
console.log(formElement);

const GET = async (url) => { 
    await fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

const btn = formElement.btnForm;

btn.addEventListener("click", () => {
    const par1 = formElement.value1.value;
    const par2 = formElement.value2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
});