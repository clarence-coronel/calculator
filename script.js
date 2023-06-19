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
const img = document.querySelector('.image');

let zeroIsOn = true;
let display = "";
let equationContent = [];
let pointIsAvail = true;
let answerAvail = false;
let answer = null;
let isNotRotated = false;
let rotation = 360;

window.addEventListener('load', ()=>{
    spin();
    setInterval(spin,3000);
});

function spin(){
    // if(isNotRotated){
    //     img.style.transform = 'rotate(0)';
    //     isNotRotated = false;
    // }
    // else if(!isNotRotated){
        img.style.transform = `rotate(${rotation}deg`;
        isNotRotated = true;
        rotation += 360;
    //}
}

numbers.forEach((num) =>{
    num.addEventListener('click', () => {
        if(answerAvail){
            display = "";
            equationContent = [];
            pointIsAvail = true;
            answerAvail = false;
            answer = null;
            result.innerHTML = ""
            equation.style.color = 'black';
        }
        
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
    if(answerAvail){
            display = "";
            equationContent = [];
            pointIsAvail = true;
            answerAvail = false;
            answer = null;
            result.innerHTML = ""
            equation.style.color = 'black';
        }
    if(display[display.length-1] != '%'){
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
    if(answerAvail){
        result.innerHTML = "";
        equation.innerHTML = "";
        display = "";
        equation.style.color = 'black';
        update(answer);
        answer = null;
        answerAvail = false;
    }

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

    if(answerAvail){
        result.innerHTML = "";
        equation.innerHTML = "";
        display = "";
        equation.style.color = 'black';
        update(answer);
        answer = null;
        answerAvail = false;
    }

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

    if(answerAvail){
        result.innerHTML = "";
        equation.innerHTML = "";
        display = "";
        equation.style.color = 'black';
        update(answer);
        answer = null;
        answerAvail = false;
    }

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

    if(answerAvail){
        result.innerHTML = "";
        equation.innerHTML = "";
        display = "";
        equation.style.color = 'black';
        update(answer);
        answer = null;
        answerAvail = false;
    }

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

    if(display[display.length-1] == '%'){
        point.style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            point.style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
        return;
    }

    if(display.length == 0 || display[display.length-1] == " " ){
        update('0');
    }
    
    update(point.innerHTML);
    pointIsAvail = false;
    
});

percent.addEventListener('click', ()=> {
    if(answerAvail){
        result.innerHTML = "";
        equation.innerHTML = "";
        display = "";
        equation.style.color = 'black';
        update(answer);
        answer = null;
        answerAvail = false;
    }
    
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
     answer = 0;
     pointIsAvail = true;
})

dlt.addEventListener('click', ()=> {

    if(answer != 0){
        equationContent = [];
        equation.innerHTML = "";
        result.innerHTML = "";
        display = "";
        answer = 0;
        pointIsAvail = true;
    }

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

    answer = solve(equationContent);
    equation.style.color = 'rgb(80, 81, 82)'
    result.innerHTML = answer;
});

function update(char){
    display+=char;

    //  display = display.replace(',', '');
    //  display = display.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    equation.innerHTML = display;
    
}

function solve(arr){
    //operations = ['%', '*/', '+', '-'];
    temp = arr;
    isNotClear = true;

    if(temp[temp.length-1] == '+' || temp[temp.length-1] == '-' || temp[temp.length-1] == '*' || temp[temp.length-1] == '/' || temp[temp.length-1] == '.'){
        equationContent.pop();
    }
    
    while(isNotClear){ //palitan ng condition na hanggat merong multiplication and division uulitin to??
        for(i = 0; i < temp.length; i++){
            // Turns all % into decimals
            for(j = 0; j < temp[i].length; j++){
                if(temp[i][j] == '%'){
                // num = '';
                // for(k = 0; k < temp[i].length-1; k++){
                //     num += temp[i][k];
                // }
                // num = parseInt(num);
                // num /= 100;
                temp[i] = parseFloat(temp[i]);
                temp[i] /= 100;
                }
            }
    
            if(temp[i] == '*' || temp[i] == '/'){
                    firstNum = parseFloat(temp[i-1]);
                    secondNum = parseFloat(temp[i+1]);
                    operation = temp[i];
                    ans = 0;
                    if(operation == '*'){
                        ans = firstNum * secondNum;
                    }
                    else if(operation == '/'){
                        if(secondNum == 0){
                            answer = 'null';
                            answerAvail = false;
                            return 'What you doing bro?';
                            
                        }
                        ans = firstNum / secondNum;
                    }

                    ansFix = ans.toFixed(2);
                    finalAns = ans;
                    if(ansFix[ansFix.length-1] != '0' && ansFix[ansFix.length-2] != '0'){
                        finalAns = ansFix;
                        pointIsAvail = false;
                    }

                    temp[i] = finalAns;
                    temp[i-1] = ' ';
                    temp[i+1] = ' ';
                    break;
            }
        }
        
        for(n = 0; n < temp.length; n++){
            if(temp[n] == '*' || temp[n] == '/') isNotClear = true;
            else{
                isNotClear = false;
            }
        }
    }

    if(temp.length != 1){
        while(true){
            if(temp.length > 1){
                temp = temp.filter((item)=>{
                    if(item != ' ')return true;
                    
                });
            }
            for(i = 0; i<temp.length; i++){
                if(temp[i] == '+' || temp[i] == '-'){
                    firstNum = parseFloat(temp[i-1]);
                    secondNum = parseFloat(temp[i+1]);
                    operation = temp[i];
                    ans = 0;
                    if(operation == '+'){
                        ans = firstNum + secondNum;
                    }
                    else if(operation == '-'){
                        ans = firstNum - secondNum;
                    }

                    ansFix = ans.toFixed(2);
                    finalAns = ans;
                    
                    if(ansFix[ansFix.length-1] != '0' && ansFix[ansFix.length-2] != '0'){
                        finalAns = ansFix;
                    }
                    
                    if((finalAns - Math.floor(n)) !== 0) pointIsAvail = false;
        
                    temp[i] = finalAns;
                    temp[i-1] = ' ';
                    temp[i+1] = ' ';

                    break;
            }
            }

            if(temp.length == 0){
                temp.push(0);
            }

            if(temp.length == 1) {
                break;
            }
        }
    }
    answerAvail = true;
    return temp;
}

window.addEventListener('keydown', (e) => {
    if(e.key == '0'){
        if(answerAvail){
            display = "";
            equationContent = [];
            pointIsAvail = true;
            answerAvail = false;
            answer = null;
            result.innerHTML = ""
            equation.style.color = 'black';
        }

        if(display[display.length-1] != '%'){
            document.getElementById('zero').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('zero').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300);
            update(zero.innerHTML);
        }
        else{
            document.getElementById('zero').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('zero').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == '1'){
        numInput('1', 'one');
    }
    else if(e.key == '2'){
        numInput('2', 'two');
    }
    else if(e.key == '3'){
        numInput('3', 'three');
    }
    else if(e.key == '4'){
        numInput('4', 'four');
    }
    else if(e.key == '5'){
        numInput('5', 'five');
    }
    else if(e.key == '6'){
        numInput('6', 'six');
    }
    else if(e.key == '7'){
        numInput('7', 'seven');
    }
    else if(e.key == '8'){
        numInput('8', 'eight');
    }
    else if(e.key == '9'){
        numInput('9', 'nine');
    }
    else if(e.key == "Backspace"){
        if(answer != null){
            equationContent = [];
            equation.innerHTML = "";
            result.innerHTML = "";
            display = "";
            answer = 0;
            pointIsAvail = true;
        }
    
        if(display[display.length-1] == '.' && display[display.length-2] == '0'){
            display = display.slice(0, display.length-2);
        }
    
        if(display[display.length-1] == ' '){
            display = display.slice(0, display.length-3);
        }
        else{
            display = display.slice(0, display.length-1);
        }

        document.getElementById('delete').style.backgroundColor = 'rgb(126, 124, 124)';
        setTimeout(()=>{
            document.getElementById('delete').style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300);

        equation.innerHTML = display;
    }
    else if(e.key == '+'){
        if(answerAvail){
            result.innerHTML = "";
            equation.innerHTML = "";
            display = "";
            equation.style.color = 'black';
            update(answer);
            answer = null;
            answerAvail = false;
        }
    
        if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
            update(' + ');
            document.getElementById('plus').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('plus').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            pointIsAvail = true;
        }
        else{
            document.getElementById('plus').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('plus').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == '-'){
        if(answerAvail){
            result.innerHTML = "";
            equation.innerHTML = "";
            display = "";
            equation.style.color = 'black';
            update(answer);
            answer = null;
            answerAvail = false;
        }
    
        if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
            update(' - ');
            document.getElementById('minus').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('minus').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            pointIsAvail = true;
        }
        else{
            document.getElementById('minus').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('minus').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == '*'){
        if(answerAvail){
            result.innerHTML = "";
            equation.innerHTML = "";
            display = "";
            equation.style.color = 'black';
            update(answer);
            answer = null;
            answerAvail = false;
        }
        if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
            update(' * ');
            document.getElementById('multiply').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('multiply').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            pointIsAvail = true;
        }
        else{
            document.getElementById('multiply').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('multiply').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == '/'){
        if(answerAvail){
            result.innerHTML = "";
            equation.innerHTML = "";
            display = "";
            equation.style.color = 'black';
            update(answer);
            answer = null;
            answerAvail = false;
        }
        if(display[display.length-1] != ' ' && display[display.length-1] != '.' && display.length != 0){
            update(' / ');
            document.getElementById('divide').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('divide').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            pointIsAvail = true;
        }
        else{
            document.getElementById('divide').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('divide').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == '.'){
        if(!pointIsAvail) {
            document.getElementById('point').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('point').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            return;
        };
    
        if(display[display.length-1] == '%'){
            document.getElementById('point').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('point').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            return;
        }
    
        if(display.length == 0 || display[display.length-1] == " " ){
            update('0');
        }
        
        document.getElementById('point').style.backgroundColor = 'rgb(126, 124, 124)';
        setTimeout(()=>{
            document.getElementById('point').style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
        update('.');
        pointIsAvail = false;
    }
    else if(e.key == '%'){
        if(answerAvail){
            result.innerHTML = "";
            equation.innerHTML = "";
            display = "";
            equation.style.color = 'black';
            update(answer);
            answer = null;
            answerAvail = false;
        }
        
        if(display[display.length-1] != ' ' && display[display.length-1] != '%' && display.length != 0 && display[display.length-1] != '.'){
            document.getElementById('point').style.backgroundColor = 'rgb(126, 124, 124)';
            setTimeout(()=>{
                document.getElementById('point').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
            update('%');
        }
        else{
            document.getElementById('percent').style.backgroundColor = 'rgb(224, 72, 61)';
            setTimeout(()=>{
                document.getElementById('percent').style.backgroundColor = 'rgb(80, 81, 82)';
            }, 300)
        }
    }
    else if(e.key == 'Enter'){
        equationContent = display.split(' ');  
        answer = solve(equationContent);
        equation.style.color = 'rgb(80, 81, 82)'
        result.innerHTML = answer;

        document.getElementById('equal').style.backgroundColor = 'rgb(6, 216, 41)';
            setTimeout(()=>{
                document.getElementById('equal').style.backgroundColor = 'rgb(6, 190, 36)';
            }, 300)
    }
})

function numInput(input, name){
    if(answerAvail){
        display = "";
        equationContent = [];
        pointIsAvail = true;
        answerAvail = false;
        answer = null;
        result.innerHTML = ""
        equation.style.color = 'black';
    }
    
    if(display[display.length-1] != '%'){
        update(input);
        document.getElementById(name).style.backgroundColor = 'rgb(126, 124, 124)';
        setTimeout(()=>{
            document.getElementById(name).style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
        return;
    }

    else{
        document.getElementById(name).style.backgroundColor = 'rgb(224, 72, 61)';
        setTimeout(()=>{
            document.getElementById(name).style.backgroundColor = 'rgb(80, 81, 82)';
        }, 300)
        return;
    }
}

