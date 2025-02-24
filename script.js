let display = document.getElementById('display');

// Append clicked button value to the display
function appendValue(value){
    display.value += value;
}

// Clear the display
function clearDisplay(){
    display.value = '';
}