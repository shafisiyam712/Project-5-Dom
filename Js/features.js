//toggling with donation and history button

document.getElementById('donationForm-btn')
    .addEventListener('click', function () {
        showSectionById('donation');
    });


document.getElementById('historyForm-btn')
    .addEventListener('click', function () {
        showSectionById('history');
    });

 
// const p = document.createElement('p');
//             p.innerText = `Added: ${donateMoney} Tk. New Balance:`;
//             console.log(p); 

//             // should be a common function
//             document.getElementById('history').appendChild(p);