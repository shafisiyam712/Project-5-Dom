//toggling with donation and history button

//activating donation section by donation btn
document.getElementById('donationForm-btn')
    .addEventListener('click', function () {
        showSectionById('donation');
    });

//activating history section by history btn
document.getElementById('historyForm-btn')
    .addEventListener('click', function () {
        showSectionById('history');
    });

 
