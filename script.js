const field = document.querySelector('#calcField');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backSpace');
const equal = document.querySelector('#equal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('value');
        if (value){
            field.value += value;
        }
    });
});

clear.addEventListener('click', () => {
    field.value = '';
});

backspace.addEventListener('click', () => {
    field.value = field.value.slice(0, -1);
});

equal.addEventListener('click', () => {
    try{
        field.value = eval(field.value);
    } catch {
        field.value = 'ERROR!';
    }
});