// declare a function to take all input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const number=Number(inputValue);
    const inputNumber = parseFloat(number);
    
    return inputNumber;
}

//converting default string amount to number function
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
    let result= document.getElementById(id).close();
    // result.classList.add('hidden')
}