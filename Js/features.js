//toggling with donation and history button

document.getElementById('donationForm-btn')
    .addEventListener('click', function () {
        showSectionById('donation');
    });


document.getElementById('historyForm-btn')
    .addEventListener('click', function () {
        showSectionById('history');
    });

//added to history section
 // add to transaction history
//  const div=document.createElement('div');
//  document.div.style="border rounded-xl p-5"
//  const h = document.createElement('h1');
//  h.innerText = `${donateMoney} Tk is donated for Flood at Noakhali, Bangladesh`;
//  div.appendChild(h)

//  // should be a common function
//  document.getElementById('history').appendChild(div);
 
const p = document.createElement('p');
            p.innerText = `Added: ${donateMoney} Tk. New Balance:`;
            console.log(p); 

            // should be a common function
            document.getElementById('history').appendChild(p);