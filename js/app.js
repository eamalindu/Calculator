window.addEventListener('DOMContentLoaded', () => {

    //operation 1 -> add
    //operation 2 -> sub
    //operation 3 -> multi
    //operation 4 -> divide

    let operation;
    let valueOne;
    let valueTwo;

    const display = document.querySelector('#textDisplay');

    //numbers
    const number1 = document.querySelector('#number1');
    const number2 = document.querySelector('#number2');
    const number3 = document.querySelector('#number3');
    const number4 = document.querySelector('#number4');
    const number5 = document.querySelector('#number5');
    const number6 = document.querySelector('#number6');
    const number7 = document.querySelector('#number7');
    const number8 = document.querySelector('#number8');
    const number9 = document.querySelector('#number9');
    const number0 = document.querySelector('#number0');
    const dot = document.querySelector('#dot');

    //operations
    const add = document.querySelector('#add');
    const substract = document.querySelector('#substract');
    const muliti = document.querySelector('#multi');
    const equal = document.querySelector('#equal');
    const divide = document.querySelector('#divide');

    const operationSymbol = document.querySelector('#operationSymbol');

    //extras
    const ac = document.querySelector('#ac');

    number1.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 1;
        } else {
            display.value = 1;
        }
    });

    number2.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 2;
        } else {
            display.value = 2;
        }
    });

    number3.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 3;
        } else {
            display.value = 3;
        }
    });

    number4.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 4;
        } else {
            display.value = 4;
        }
    });

    number5.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 5;
        } else {
            display.value = 5;
        }
    });

    number6.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 6;
        } else {
            display.value = 6;
        }
    });
    number7.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 7;
        } else {
            display.value = 7;
        }
    });
    number8.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 8;
        } else {
            display.value = 8;
        }
    });
    number9.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 9;
        } else {
            display.value = 9;
        }
    });
    number0.addEventListener('click', () => {
        if (display.value !== "0") {
            display.value = display.value + 0;
        } else {
            display.value = 0;
        }
    });

    dot.addEventListener('click', () => {
            display.value = display.value + ".";
    });

    ac.addEventListener('click', () => {
        display.value = 0;
        operationSymbol.innerText = '';
        valueOne = null;
        valueTwo = null;
    });

    add.addEventListener('click', () => {
        valueOne = parseFloat(display.value);
        operation = 1;
        display.value = 0;
        operationSymbol.innerText = '+';

    });

    substract.addEventListener('click', () => {
        valueOne = parseFloat(display.value);
        operation = 2;
        display.value = 0;
        operationSymbol.innerText = '-';

    });

    muliti.addEventListener('click', () => {
        valueOne = parseFloat(display.value);
        operation = 3;
        display.value = 0;
        operationSymbol.innerText = 'x';

    });

    divide.addEventListener('click', () => {
        valueOne = parseFloat(display.value);
        operation = 4;
        display.value = 0;
        operationSymbol.innerText = '/';
    });

    equal.addEventListener('click', () => {
        valueTwo = parseFloat(display.value);
        if (operation === 1) {
            display.value = valueOne + valueTwo;
        } else if (operation === 2) {
            display.value = valueOne - valueTwo;
        } else if (operation === 3) {
            display.value = valueOne * valueTwo;
        } else if (operation === 4) {

            if (valueTwo != 0) {
                display.value = valueOne / valueTwo;
            } else {
                display.value = "Error";
            }
        }
        operationSymbol.innerText = '';
    });

});

