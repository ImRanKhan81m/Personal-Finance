



// function expensesValue(costId){
//     const incomeInput = document.getElementById(costId);
//     const income = parseFloat(incomeInput.value);
//     incomeInput.value = '';
//     return income;
// }

document.getElementById('calculate').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);
    

    const foodCostInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodCostInput.value);
    const RentCostInput = document.getElementById('rent-cost');
    const RentCost = parseFloat(RentCostInput.value);
    const shoppingCostInput = document.getElementById('shopping-cost');
    const shoppingCost = parseFloat(shoppingCostInput.value);

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
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);

    const saveInput = document.getElementById('saving-input');
    const savePercent = parseFloat(saveInput.value);

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = parseFloat(savingAmount.innerText);
    savingAmount.innerText = (income * savePercent) / 100;


    const foodCostInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodCostInput.value);
    const RentCostInput = document.getElementById('rent-cost');
    const RentCost = parseFloat(RentCostInput.value);
    const shoppingCostInput = document.getElementById('shopping-cost');
    const shoppingCost = parseFloat(shoppingCostInput.value);

    const totalCost = foodCost + RentCost + shoppingCost;

    const remainingBalance = document.getElementById('remaining-balance').innerText;
    const remaningBalanceTotal = parseFloat(remainingBalance);
    const 
    
    
})
