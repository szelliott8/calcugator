function layoutCalc(){
    let buttons = [0,1,2,3,4,5,6,7,8,9,"C","+","-","x","/","="]
    buttons.forEach(button =>  {
        let btn = document.createElement("button")
        btn.textContent = button
        let calcContainer = document.querySelector(".calc-container")
        console.log(calcContainer.clientWidth)
        btnWidth = `${Math.floor((calcContainer.clientWidth-20) /4)}px`
        btn.style.width =btnWidth;  
        btn.style.height = btnWidth;
        calcContainer.appendChild(btn)

        if (button >= 0 && button <=9) {
            btn.addEventListener('click', number)
            btn.className = "numbers"
        }
        else if(button ==="C") {
            btn.addEventListener('click', clear)
            btn.className = "clear"
        }
        else if(button ==="=") {
            btn.addEventListener('click', operate)
            btn.className = "equals"
        }
        else {
            btn.addEventListener('click', chooseOperation)
            btn.className = "operation"
        }
        display = document.querySelector('.display')
        display.style.height = btnWidth;
        display.textContent="0"
    })
}

function number(e) {
    clearButtons()
    console.log(currentDisplay)
    console.log(e.target.textContent)
    if (newDisplay){
        currentDisplay = e.target.textContent
        newDisplay = false
    } 
    else{
        currentDisplay +=e.target.textContent
    }
    document.querySelector('.display').textContent = currentDisplay;
    
}

function clear() {
    clearButtons();
    currentDisplay="0"
    var1 = undefined
    var2 = undefined
    op = undefined
    document.querySelector('.display').textContent = currentDisplay
}

function chooseOperation(e) {

    clearButtons();
    
    e.target.style.backgroundColor = 'blue'
    if(!var1) {
        console.log(var1)
        console.log(var2)
        var1=currentDisplay
        op = e.target.textContent
        }
    else {
        operate();
        op = e.target.textContent
    }
    newDisplay=true;
}

function operate(){
    console.log(op)
    if(!var2) {
        var2=currentDisplay;
    }
    if(op ==="+") {
        result = parseInt(var1)+parseInt(var2)
        console.log(var1)
        console.log(var2)
    }
    if(op ==="-") {
        result = parseInt(var1)-parseInt(var2)
    }
    if(op ==="x") {
        result = parseInt(var1)*parseInt(var2)
    }
    if(op ==="/") {
        result = parseInt(var1)/parseInt(var2)
    }
    
    currentDisplay = result;
    var1=result;
    var2=undefined;
    document.querySelector('.display').textContent = currentDisplay;
    console.log(currentDisplay)
    newDisplay=true;
    op=undefined

}

function clearButtons(){
    
    let allBtns = document.querySelectorAll('.operation')
    allBtns.forEach(button=>{
        button.style.backgroundColor = 'rgb(239,239,239)'
    })
}


let var1, var2, op, result;
let currentDisplay="0";
let newDisplay = true; // this is to know whether to concat the display or if start fresh
layoutCalc();

// function operate (var1, var2, op) {
//     if op === 
// }



