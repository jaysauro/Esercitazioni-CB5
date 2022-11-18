const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
	const res = await fetch(BASE_URL);
	return await res.json();
}

const POST = async (BASE_URL, body) => {
	return await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}

const DELETE = async (BASE_URL, id) => {
	return await fetch (`${BASE_URL}/${id}`, {
		method: 'DELETE'
	})
}

const PATCH = async (BASE_URL, id, body) => {
	return await fetch (`${BASE_URL}/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})
}


export { c, q, GET, POST, DELETE, PATCH}