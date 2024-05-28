"use strict";
// GET DATA
// const form = document.getElementById("MyForm") as HTMLFormElement;
// const input = document.querySelector("form > input") as HTMLInputElement;
const User = {
    name: "Ram",
    age: 30
};
function getProperty(obj, key) {
    return obj[key];
}
const getName = getProperty(User, "age");
console.log(getName);
