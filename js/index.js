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
})