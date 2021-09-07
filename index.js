const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAmountAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculateChange(amountToBeReturned);
        }
        else{
            showMessage("The cash given should atleast be equal to bill amount")
        }
    } else {
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