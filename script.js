let display = document.getElementById('display');

// Append clicked button value to the display
function appendValue(value){
    display.value += value;
}

// Clear the display
function clearDisplay(){
    display.value = '';
}

// Calculate the result
function calculateResult(){
    try{
        display.value = eval(display.value);
    } catch(e){
        display.value = 'Error';
    }
}