fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => users.map((key) => console.log(key.name, key.address, key.address.city)))
  .catch((e) => console.log("Qualcosa è andato storto"))
  .finally(() => console.log("-------------"))


fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => todos.map((key) => console.log(key.id, key.title)))
  .catch((e) => console.log("Qualcosa è andato storto"))
  
  