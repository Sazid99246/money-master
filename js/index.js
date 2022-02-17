// Income Section
document.getElementById('calculate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // total expenses
    const foodText = document.getElementById('food').value;
    const food = parseInt(foodText);
    const rentText = document.getElementById('rent').value;
    const rent = parseInt(rentText);
    const clothesText = document.getElementById('clothes').value;
    const clothes = parseInt(clothesText);
    const totalExpence = food + rent + clothes;
    const expenses = document.getElementById('expences')
    expenses.innerText = totalExpence;

    // new balance
    const incomeText = document.getElementById('income').value;
    const income = parseInt(incomeText);
    const balance = document.getElementById('balance');
    const newBalance = income - totalExpence;
    balance.innerText = newBalance;

    // error handling for expense and balance
    if (income < 0) {
        alert('Please Input a Valid Number');
    }
    if (food < 0) {
        alert('Please Input a Valid Number');
    }
    if (rent < 0) {
        alert('Please Input a Valid Number');
    }
    if(clothes < 0) {
        alert('Please Input a Valid Number');
    }
    if (totalExpence > income) {
        alert('Please Input a Valid Number');
    }
    // savings section
    document.getElementById('savings-button').addEventListener('click',function (event) {
        event.preventDefault();
        // saving amount
        const savingText = document.getElementById('savings-input').value;
        const saving = parseInt(savingText);
        const savingAmount = income / 100 * saving;
        const savings = document.getElementById('savings-amount');
        savings.innerText = savingAmount;

        // remaining amount
        const remainingAmount = document.getElementById('remaining-balance');
        const remainings = newBalance - savingAmount;
        remainingAmount.innerText = remainings;
        if (savingAmount > newBalance) {
            alert('Please enter a valid number');
        }
    })
})