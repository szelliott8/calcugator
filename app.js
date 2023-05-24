function layoutCalc(){
    let buttons = [0,1,2,3,4,5,6,7,8,9,"C","+","-","x","/","="]
    buttons.forEach(button =>  {
        let btn = document.createElement("button")
        btn.className = "calc-btn"
        btn.textContent = button
        let calcContainer = document.querySelector(".calc-container")
        console.log(calcContainer.clientWidth)
        btnWidth = `${Math.floor(calcContainer.clientWidth /4)}px`
        btn.style.width =btnWidth;  
        btn.style.height = btnWidth;
        calcContainer.appendChild(btn)

        if (button >= 0 && button <=9) {
            btn.addEventListener('click', number)
        }
        else if(button ==="C") {
            btn.addEventListener('click', clear)
        }
        display = document.querySelector('.display')
        display.style.height = btnWidth;
        display.textContent="0"
    })
}
let var1, var2, op, result;
let currentDisplay="0";
layoutCalc();

// function operate (var1, var2, op) {
//     if op === 
// }

function number(e) {
    console.log(currentDisplay)
    console.log(e.target.textContent)
    if (currentDisplay ==="0"){

        currentDisplay = e.target.textContent

    } 
    else{
        currentDisplay +=e.target.textContent
    }
    document.querySelector('.display').textContent = currentDisplay;
}

function clear(e) {
    currentDisplay="0"
    document.querySelector('.display').textContent = currentDisplay
}

