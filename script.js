

//log in button events handler
const loginBtn = document.getElementById('log-in');
loginBtn.addEventListener("click", function () {
    const logIn = document.getElementById('log-in-area');
    logIn.style.display = 'none';
    const transtn = document.getElementById('Transaction-area');
    transtn.style.display = 'block'
})

//Deposit button events handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    // Deposit
    const currentDeposite = document.getElementById('currentDeposite').innerText;
    const currentDepositNumber = parseFloat(currentDeposite);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposite').innerText = totalDeposit;

    // Balance
    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById("depositAmount").value = 0;
})

//Withdraw button events handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    // Withdraw
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentwithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentwithdrawNumber;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    // Balance
    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('withdrawAmount').value = 0;
})


        // updateSpanText("currentDeposit", depositNumber);
        // updateSpanText("currentBalance", depositNumber);
        // function updateSpanText(id, depositNumber){
        // const current = document.getElementById(id).innerText;
        // const currentNumber = parseFloat(current);
        // const totalAmount = depositNumber + currentNumber;
        // document.getElementById(id).innerText = totalAmount;
        // }


