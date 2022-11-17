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