console.log("labas");
console.log(5 + 7);

let name = "Naglis";
let surname = 'Mockevičius';

console.log(name + " " + surname);

const PI = 3.14;
// PI = 50;
console.log("po to");

for (let i = 0; i < 10; i++) {
    console.log(i);
}
name = 30;
console.log(name);

for (let i = 0; i < 10; i++) {
    console.log("labas");
}

if (-7) {
    console.log("tai gi zinoma");
} else {
    console.log("meibi not");
}
sayHi();

function sayHi() {
    console.log("hi");
}

console.log(thereUGo());
function thereUGo() {
    return "take it";
}

arr = [1, -5, 10, -18, 3, 4, 20];
console.log(arr.join(", ").toString());
for (let a = 0; a < arr.length; a++) {
    let row = "";
    for (let i = a; i < arr.length; i++) {
        row += arr[i] + ",";
        if (Math.abs(arr[a]) < Math.abs(arr[i])) {
            let temp = arr[a];
            arr[a] = arr[i];
            arr[i] = temp;
        }

    }
    console.log(row);
    }
console.log(arr.join(", ").toString());


// 16? 8, 4, 2, ... = 3;


let HTML = `<div class="row">`;
let fragment = 
    `   <div class="col-4">
            <h1>title</h1>
            <p>description</p>
        </div>`;

    for (let i = 0; i < 10; i++) {
            HTML += fragment;        
        }
HTML += `</div>`;
// document.getElementById("result").innerHTML = HTML;
document.querySelector("#result").innerHTML = HTML;

doStuff("labas")
function doStuff(textToGo) {
    //susiranda h1 taga, innterText yra textToGo
}

function doMoreStuff(text, htag) {
    
}

doMoreStuff("labas",6);
doMoreStuff("iki",3);
doMoreStuff("maxima",4);

