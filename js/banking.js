function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
};

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
};
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}

function updateBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText); 
    */
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + inputAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - inputAmount;
    }
};

document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText); */

    // get current deposit
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + depositInputAmount; */

    // new account balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceAmount + depositInputAmount
    */

    const depositInputAmount = getInputValue('deposit-input');
    if (depositInputAmount > 0) {
        updateTotalField('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);

    };


});

// handle withdraw event handler
// Withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the amount withdraw
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */

    // set withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */

    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
     */

    const newWithdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    };
    if (newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    };
});
