"use strict";
// GET DATA
// const form = document.getElementById("MyForm") as HTMLFormElement;
// const input = document.querySelector("form > input") as HTMLInputElement;
const Users = [
    {
        name: "Dharam",
        age: 19,
    },
    {
        name: "Karam",
        age: 19
    },
    {
        name: "Radhe",
        age: 22
    },
    {
        name: "Ram",
        age: 20
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filterPeopleUsingName = filterByPeoples(Users, "name", "Ram");
console.log(filterPeopleUsingName);
