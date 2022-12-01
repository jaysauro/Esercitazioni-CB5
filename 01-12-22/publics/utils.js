const ce = (el) => document.createElement(el);

const qs = (el) => document.querySelector(el);

const url = "http://localhost:3000/attori";

const GET = async (url) => {
	const res = await fetch(url);
	return await res.json();
}

const POST = async (url, body) => {
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams(body)
	});
}

const DELETE = async (url,id) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return await res.json();
};

function deleteActor(id) {
    const url = `http://localhost:3000/attore`;
    return DELETE(url,id);
}

export {ce, qs, GET, POST, DELETE, deleteActor};