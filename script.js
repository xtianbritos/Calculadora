
let calc = document.getElementById("calculadora");

calc.style.width = "175px";
calc.style.height = "100px";
calc.style.background = "yellow";
calc.style.margin = "auto";

calc.innerHTML =`

<input type="text" id="n1">
<input type="text" id="n2">

<button id="suma">+</button>
<button id="resta">-</button>
<button id="multi">*</button>
<button id="divi">/</button>

<button id="calcular">=</button>

<p id="res">Resultado</p>

`;

let op;

document.querySelector("#suma").addEventListener("click", (e)=>{
    op = '+';
})

document.querySelector("#resta").addEventListener("click", (e)=>{
    op = '-';
})

document.querySelector("#multi").addEventListener("click", (e)=>{
    op = '*';
})

document.querySelector("#divi").addEventListener("click", (e)=>{
    op = '/';
})


document.querySelector("#calcular").addEventListener("click", (e)=>{
    const n1 = parseInt(document.querySelector("#n1").value);
    const n2 = parseInt(document.querySelector("#n2").value);

    let r;

    if(op =='+'){
        r = n1 + n2;
    }else if(op =='-'){
        r = n1 - n2;
    }else if(op =='*'){
        r = n1 * n2;
    }else if(op =='/'){
        r = n1 / n2;
    }

    document.querySelector("#res").innerHTML = r;
})





