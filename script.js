// TODO
// *Ang ginagawa ni percent is kino-convert yung preceding whole number 
// into decimal by dividing it to 100

// *Make sure na di nakakapag input if yung preceeding 
// value sa string is operator tas operator din yung idagdag
// same with point and percent

// *if nag input pa ng operator sa dulo si user maliban sa percent is dapat iignore pag kinclick yung equal

// *iko-convert yung string na display into array pag hiwahiwalayin yung dapat pag hiwahiwalayin

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percent");
const point = document.querySelector("#point");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const dlt = document.querySelector("#delete");
const equation = document.querySelector("#equation");
const result = document.querySelector("#result");
const numbers = document.querySelectorAll('.key--num');

let zeroIsOn = true;
let tempNumber = "";
let display = "";
let equationContent = [];


numbers.forEach((num) =>{
    num.addEventListener('click', () => {
        update(num.innerHTML);
    });
});

plus.addEventListener('click', ()=>{
    update('+');
});

minus.addEventListener('click', ()=>{
    update('-');
});

multiply.addEventListener('click', ()=>{
    update('*');
});

divide.addEventListener('click', ()=>{
    update('/');
});

point.addEventListener('click', ()=> {
    update('.');
});

percent.addEventListener('click', ()=> {
    update('%');
});

clear.addEventListener('click', ()=> {
    // equationContent = [];
     equation.innerHTML = "";
     result.innerHTML = "";
     display = "";
})

dlt.addEventListener('click', ()=> {
    equationContent.pop();
    display = display.replace(display[display.length-1], "");
    equation.innerHTML = display;
});

function update(char){
    display+=char;
    equation.innerHTML = display;
}
