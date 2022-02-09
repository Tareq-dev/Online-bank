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

       function updateSpanText(id, depositNumber) {
       const current = document.getElementById(id).innerText;
      const currentNumber = parseFloat(current);
      const totalAmount = depositNumber + currentNumber;
      document.getElementById(id).innerText = totalAmount;
  }
      document.getElementById('addDeposit').value = '';
  })