// GET DATA
// const form = document.getElementById("MyForm") as HTMLFormElement;
// const input = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e) => {
//     e.preventDefault()
//     const value = Number(input.value)
//     console.log(value);
//     console.log(typeof value)

//     const h2 = document.createElement("h1");
//     h2.textContent = String(value + 20);

//     const body = document.querySelector("body")!;
//     body.append(h2)
// }




// INTERFACE CREATE
interface Person{
    name: String,
    email: String
}

const myobj: Person = {
    name: "Dharam",
    email: "dharamdotin@gmail.com"
}