// declare a function to take all input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}

//converting default string amount to number
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

//show section by function
function showSectionById(id){
    // hide all the sections
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

//hiding modals function
function modalsHide(id){
    const result= document.getElementById(id).close();
    // result.classList.add('hidden')
}