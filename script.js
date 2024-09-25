
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);//Convert Buttons to an Array
arr.forEach(button => {
    button.addEventListener('click', (e) => {//Attach Click Event Listener to Each Button
        handleInput(e.target.innerHTML);//function call
    });
});

// Function to handle input (both from buttons and keyboard)
function handleInput(value) {
    if (value == '=') {
        try {
            string = eval(string);//Evaluate is an inbuilt function in js whose used for evaluting anything
            input.value = string;// The result is then displayed in the inputBox
        } catch (error) {
            input.value = "Error";
            string = "";
        }
    } else if (value == 'AC') {
        string = "";
        input.value = string;
    } else if (value == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}

// Add keyboard input functionality
document.addEventListener('keydown', (e) => {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter', 'Backspace', 'Escape', '.'];

    if (validKeys.includes(e.key)) {
        if (e.key === 'Enter') {
            handleInput('=');
        } else if (e.key === 'Backspace') {
            handleInput('DEL');
        } else if (e.key === 'Escape') {
            handleInput('AC');
        } else {
            handleInput(e.key);
        }
    }
});

