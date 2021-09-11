var billAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector("#check-button");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");
var availableNotes = [2000,500,100,20,10,5,1];
var noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAmountAndCashAmount() {
    message.style.display = "none";
    if (Number(billAmount.value) > 0) {
        console.log(Number(billAmount.value),Number(cashGiven.value));
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            console.log(Number(billAmount.value),Number(cashGiven.value));
          var amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
          calculateChange(amountToBeReturned);
        }
        else{
            console.log(Number(billAmount.value),Number(cashGiven.value));
            showMessage("The cash given should atleast be equal to bill amount")
        }
    } else {
        console.log(Number(billAmount.value),Number(cashGiven.value));
    showMessage("The Bill Amount should be greater than 0");
    }
});
function calculateChange(amountToBeReturned){
for(let i=0;i<availableNotes.length;i++)
{
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes; 
}
}

function showMessage(msg){
    message.style.display = "block";
        message.innerText = msg;
}