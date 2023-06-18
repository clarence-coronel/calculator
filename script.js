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
const zero = document.querySelector('#zero');

let zeroIsOn = true;
let tempNumber = "";
let display = "";
let equationContent = [];
let pointIsAvail = true;


numbers.forEach((num) =>{
    num.addEventListener('click', () => {
        if(display[display.length-1] != '%'){
            update(num.innerHTML);
        }
        else{
            num.style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                num.style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    });
});

zero.addEventListener('click', () => {
    if(display.length != 0 && display[display.length-1] != ' '){
        update(zero.innerHTML);
    }
    else{
        zero.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            zero.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

plus.addEventListener('click', ()=>{
    if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
        update(' + ');
        pointIsAvail = true;
    }
    else{
        plus.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            plus.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

minus.addEventListener('click', ()=>{
    if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
        update(' - ');
        pointIsAvail = true;
    }
    else{
        minus.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            minus.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

multiply.addEventListener('click', ()=>{
    if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
        update(' * ');
        pointIsAvail = true;
    }
    else{
        multiply.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            multiply.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

divide.addEventListener('click', ()=>{
    if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
        update(' / ');
        pointIsAvail = true;
    }
    else{
        divide.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            divide.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

point.addEventListener('click', ()=> {

    if(!pointIsAvail) {
        point.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            point.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
        return;
    };
    if(display[display.length-1] == ' ' || display.length == 0){
        update('0');
    }

    update(point.innerHTML);
    pointIsAvail = false;
    
});

percent.addEventListener('click', ()=> {
    if(display[display.length-1] != ' ' && display[display.length-1] != '%' && display.length != 0 && display[display.length-1] != '.'){
        update('%');
    }
    else{
        percent.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            percent.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
    }
});

clear.addEventListener('click', ()=> {
     equationContent = [];
     equation.innerHTML = "";
     result.innerHTML = "";
     display = "";
     pointIsAvail = true;
})

dlt.addEventListener('click', ()=> {

    if(display[display.length-1] == '.' && display[display.length-2] == '0'){
        display = display.slice(0, display.length-2);
    }

    if(display[display.length-1] == ' '){
        display = display.slice(0, display.length-3);
    }
    else{
        display = display.slice(0, display.length-1);
    }
    equation.innerHTML = display;
});

equal.addEventListener('click', ()=>{
    equationContent = display.split(' ');
    console.table(equationContent);
});

function update(char){
    
    display+=char;

    //  display = display.replace(',', '');
    //  display = display.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    equation.innerHTML = display;
    
}

