"use strict";
// Declare Variable
// let a:string = "10";
// let a=<string> "10";
// console.log(a)
// UNION ASIGN IN VARIABLE
// let b: string | number;
// b = 10
// console.log(b)
// FUNCTION DECLARE WITH TYPE
// const func = (a:number,b:number): number => {
//     console.log(a,b)
//     return a*b;
// }
// func(10,20)
// CUSTOM TYPE IN TYPESCRIPT
// type NumberData = number;
// let a:NumberData = 25;
// console.log(a);
// type NumberFun = (n: number, m:number) => number;
// const func:NumberFun = (n,m) => {
//     console.log(n,m)
//     return n*m
// }
// console.log(func(10,20))
// console.log(func(1,2))
// ARRAY DEFINE IN TYPESCRIPT
// const myarr:number[] = [10,20,30];
// console.log(myarr)
// const newarr:Array<string | number> = ["dharam", "yadav", 15];
// console.log(newarr)
// OBJECTS IN TYPESCRIPT
// type Obj = {
//     name: string,
//     age: number,
//     city?: string
// }
// const obj:Obj = {
//     name: "Dharam",
//     age: 18
// }
// console.log(obj)
// INTERFACE IN TYPESCRIPT OBJECTS
// interface obj {
//     fname: string,
//     age?: number,
//     married: boolean
// }
// interface newobj extends obj {
//     scoller: boolean,
//     func?: () => void
// }
// const myobj:newobj = {
//     fname: "india",
//     age: 19,
//     married: false,
//     scoller: true
// }
// console.log(myobj)
// CLASSES IN TYPESCRIPT
// class Player {
//     private height;
//     public weight;
//     constructor(height: number, weight: number){
//         this.height = height,
//         this.weight = weight
//     }
//     myfun(){
//         return this.height;
//     }
// }
// const dharam = new Player(175, 100);
// console.log(dharam.myfun())
// TYPE ASSERTION
// Three way to define
// const btn = document.getElementById("mybtn") as HTMLElement; --- as HTMLElement
// const btn = document.getElementById("mybtn")!; --- !
// const btn = <HTMLElement> document.getElementById("mybtn"); --- <HTMLElement>
// const btn = <HTMLElement> document.getElementById("mybtn");
const img = document.getElementById("MYimg");
img.src;
