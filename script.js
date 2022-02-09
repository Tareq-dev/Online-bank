   // login button handle
   const loginBtn = document.getElementById("login");
   loginBtn.addEventListener("click", function(){

   const loginArea = document.getElementById("login_area");
   loginArea.classList.add('d-none')

   const transaction_area = document.getElementById("transaction_area");
   transaction_area.style.display = "block";
});

  //diposit button handle
  const depositBtn = document.getElementById('diposit');
  depositBtn.addEventListener('click', function(){
      const addDeposit = document.getElementById('addDeposit').value;
      const depositNumber = parseFloat(addDeposit);

      updateSpanText('currentDeposit', depositNumber);
      updateSpanText('currentBalance', depositNumber);

       
      document.getElementById('addDeposit').value = '';
  })

  //widraw button handle
  const addWithdraw = document.getElementById('addWithdraw');
  addWithdraw.addEventListener('click',function(){
       
       const withdrawAmount = document.getElementById('withdraw-amount').value;
       const withdrawAmountNumber = parseFloat(withdrawAmount);

     updateSpanText('currentWithdraw',withdrawAmountNumber);
     updateSpanText('currentBalance', -1 * withdrawAmountNumber);
   
       document.getElementById('withdraw-amount').value = '';

  })
  function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}