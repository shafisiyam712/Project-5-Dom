//donate now Nowakhali btn  activities
document.getElementById('donateNow-btn').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        modalsHide('my_modal_5');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
            if(donateMoney>balance){
                alert("You don't have sufficient balance");
          modalsHide('my_modal_5');
                return;
            }
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance.toFixed(2);

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance').innerText = afterDonate.toFixed(2);

    // added to history section
 const divItems=document.createElement('div');
 divItems.className="w-11/12 mx-auto p-5 rounded-md  border mt-3";
 divItems.innerHTML=`
             <h1 class="text-gray-500">${donateMoney.toFixed(2)} Tk is donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-gray-500">${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Dhaka',
                timeStyle: 'medium',
                dateStyle: 'full'
              })}</p>
 `
 document.getElementById('history').appendChild(divItems);

})



//donate now feni btn  activities
document.getElementById('donateNow-btn2').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money2');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        modalsHide('my_modal_6');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
    if(donateMoney>balance){
        alert("You don't have sufficient balance");
  modalsHide('my_modal_6');
        return;
    }
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance.toFixed(2);

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance2');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance2').innerText = afterDonate.toFixed(2);
 // added to history section
 const divItems=document.createElement('div');
 divItems.className="w-11/12 mx-auto p-5 rounded-md  border mt-3";
 divItems.innerHTML=`
             <h1 class="text-gray-500">${donateMoney.toFixed(2)} Tk is donated for Flood relief in Feni,Bangladesh</h1>
            <p class="text-gray-500">${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Dhaka',
                timeStyle: 'medium',
                dateStyle: 'full'
              })}</p>
 `
 document.getElementById('history').appendChild(divItems);

})

//donate now quota btn  activities
document.getElementById('donateNow-btn3').addEventListener('click',function(){
    const donateMoney = getInputFieldValueById('donate-money3');
    if(isNaN(donateMoney) || donateMoney<0){
        alert('Invalid Donate amount');
        modalsHide('my_modal_7');
        return;
    }

    //navbar account updated 
    const balance = getTextFieldValueById('account-balance');
    if(donateMoney>balance){
        alert("You don't have sufficient balance");
  modalsHide('my_modal_7');
        return;
    }
            const newBalance = balance - donateMoney;

            document.getElementById('account-balance').innerText = newBalance.toFixed(2);

    //donation account updated
    const previousDonate = getTextFieldValueById('donate-balance3');
    const afterDonate = previousDonate + donateMoney;

    document.getElementById('donate-balance3').innerText = afterDonate.toFixed(2);
 // added to history section
 const divItems=document.createElement('div');
 divItems.className="w-11/12 mx-auto p-5 rounded-md  border mt-3";
 divItems.innerHTML=`
             <h1 class="text-gray-500">${donateMoney.toFixed(2)} Tk is donated for aid for injured in the quota movement, Bangladesh</h1>
            <p class="text-gray-500">${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Dhaka',
                timeStyle: 'medium',
                dateStyle: 'full'
              })}</p>
 `
 document.getElementById('history').appendChild(divItems);

})