function calculateChange(amountDue,moneyReceived)
{
    var result = Math.ceil(moneyReceived - amountDue);
    //check if change is divisible by dollars
    if(result > 99){
      var dollars = Math.floor(result/100);
      result = result%100;
      $("dollars-output").value = dollars
      document.getElementById("dollars-output").innerHTML = dollars;
    }
    //check if change is divisible by quarters
    if (result > 24){
      var quarters = Math.floor(result/25);
      result = result%25;
      $("quarters-output").value = quarters
      document.getElementById("quarters-output").innerHTML = quarters;
    }
    //check if change is divisible by dimes
    if (result > 9 | result > 0){
      var dimes = Math.floor(result/10);
      result = result%10;
      $("dimes-output").value = dimes
      document.getElementById("dimes-output").innerHTML = dimes;
    }
    // check if change is divisible by nickels
    if (result > 4 | result > 0){
      var nickels = Math.floor(result/5);
      result = result%5;
      $("nickels-output").value = nickels
      document.getElementById("nickels-output").innerHTML = nickels;
    }
    // check if change is divisible by pennies
    if (result > 0){
      var pennies = Math.floor(result/1);
      result = result%1;
      $("pennies-output").value = pennies
      document.getElementById("pennies-output").innerHTML = pennies;
    }    
}
function handleClickEvent(e) {
    // 3. Create a variable called moneyReceived and assign the value of the MONEY RECEIVED.
    var moneyReceived = Math.floor(document.getElementById("amount-received").value * 100);
    // 4. Create a variable called moneyDue and assign the value of the AMOUNT DUE
    var amountDue = Math.floor(document.getElementById("amount-due").value * 100);
    // 5. Create a variable called result and assign the value of the CHANGE AMOUNT.
    var result = calculateChange(amountDue,moneyReceived);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = "Finished Calculating Your Change!"
}

// 7. Set the #calculate-change element's onclick method to use the handleClickEvent function.
$('#calculate-change').click(function(){
    handleClickEvent();
});