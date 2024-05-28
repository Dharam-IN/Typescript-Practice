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
// interface Person{
//     name: String,
//     email: String
// }

// const myobj: Person = {
//     name: "Dharam",
//     email: "dharamdotin@gmail.com"
// }




// UTILITY TYPE
// ---Partial
// type Person = {
//     name: string,
//     email: string
// }

// type Person2 = Partial<Person>


// ---  Required - Opposite of Partial
// type Person = {
//     name?: string,
//     email: string
// }


// type Person2 = Required<Person>







// GENERICS IN TYPESCRIPT
// const func = <CustomType>(n: CustomType): CustomType => {
//     return n;
// }

// const ans = func(5);
// const ans2 = func("india");
// const ans3 = func(true);

// type Person = {
//     name: string,
//     age: number
// };

// const Users: Person[] = [
//     {
//         name: "Dharam",
//         age: 19,
//     },
//     {
//         name: "Karam",
//         age: 19
//     },
//     {
//         name: "Radhe",
//         age: 22
//     },
//     {
//         name: "Ram",
//         age: 20
//     },
// ]

// const filterByPeoples = <T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[] => {
//     return arr.filter((item) => item[property] === value)
// }

// const filterPeopleUsingName = filterByPeoples(Users, "name", "Ram")
// console.log(filterPeopleUsingName)

type Person = {
    name: string,
    age: number
}

const User: Person = {
    name: "Ram",
    age: 30
}

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}

const getName = getProperty(User, "age")
console.log(getName)