

document.getElementById('calculate').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);

    const foodCostInput = document.getElementById('food-cost').value;
    const foodCost = parseFloat(foodCostInput);
    const RentCostInput = document.getElementById('rent-cost').value;
    const RentCost = parseFloat(RentCostInput);
    const shoppingCostInput = document.getElementById('shopping-cost').value;
    const shoppingCost = parseFloat(shoppingCostInput);

    const totalCost = foodCost + RentCost + shoppingCost;

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);
    totalExpenses.innerText = totalCost;

    const updateBalance = document.getElementById('update-balance')
    const totalBalanceText = updateBalance.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    updateBalance.innerText = income - totalCost;
    
})




// update saving balance
document.getElementById('saving-btn').addEventListener('click', function(){
    const saveInput = document.getElementById('saving-input');
    const savePercent = parseFloat(saveInput.value);

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = parseFloat(savingAmount.innerText);
    savingAmount.innerText = (income * savePercent) / 100;

    const remainingBalance = document.getElementById('remaining-balance');
    
})
