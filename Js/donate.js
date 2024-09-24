//donate now Nowakhali btn  activities
document.getElementById('donateNow-btn').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance;

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance').innerText = afterDonate;

    // added to history section
//  add to transaction history
 const div=document.createElement('div');
 const h = document.createElement('h1');
 h.innerText = `${donateMoney} Tk is donated for Flood at Noakhali, Bangladesh`;
 div.appendChild(h);

 // should be a common function
 document.getElementById('history').appendChild(div);
})



//donate now feni btn  activities
document.getElementById('donateNow-btn2').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money2');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance;

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance2');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance2').innerText = afterDonate;
})

//donate now quota btn  activities
document.getElementById('donateNow-btn3').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money3');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance;

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance3');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance3').innerText = afterDonate;
})