/*const max = 100;
const min = 70;

let random = Math.floor(Math.random() * max - min)+ min;

console.log(random);*/

const mybutton = document.getElementById("mybutton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const max = 200;
const min = 150;
let randomNo1;
let randomNo2;
let randomNo3;

mybutton.onclick = function(){
    randomNo1 = Math.floor(Math.random() * (max - min)) + min;
    randomNo2 = Math.floor(Math.random() * (max - min)) + min;
    randomNo3 = Math.floor(Math.random() * (max - min)) + min;


    mylabel1.textContent = randomNo1;
    mylabel2.textContent = randomNo2;
    mylabel3.textContent = randomNo3;   
}