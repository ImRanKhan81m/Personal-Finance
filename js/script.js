
// getIncomeVelue
function getIncomeVelue(){
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);
    return income;
}
// getExpensesCost
function getExpensesVelue(costId){
    const costInput = document.getElementById(costId);
    const cost = parseFloat(costInput.value);
    return cost;  
}

document.getElementById('calculate').addEventListener('click', function(){
    const income = getIncomeVelue();
    const foodCost = getExpensesVelue('food-cost')
    const rentCost = getExpensesVelue('rent-cost');
    const shoppingCost = getExpensesVelue('shopping-cost');

    if( foodCost >= 0 && rentCost >= 0 && shoppingCost >= 0 && income > 0){
        const totalCost = foodCost + rentCost + shoppingCost;

        if( totalCost < income){
            const totalExpenses = document.getElementById('total-expenses');
        const totalExpensesText = totalExpenses.innerText;
        const totalExpensesAmount = parseFloat(totalExpensesText);
        totalExpenses.innerText = totalCost;

        const updateBalance = document.getElementById('update-balance')
        const totalBalanceText = updateBalance.innerText;
        const totalBalance = parseFloat(totalBalanceText);
        updateBalance.innerText = income - totalCost;
        }else {
            alert('Sorry!! You can not expenses money more than your income')
        }
    }else{
        alert('Please input a valid number')
    }
    
})

// update saving balance
document.getElementById('saving-btn').addEventListener('click', function(){
    const income = getIncomeVelue();
        const saveInput = document.getElementById('saving-input');
        const savePercent = parseFloat(saveInput.value);
        const totalSave = (income * savePercent) / 100;       
        const updateBalance = document.getElementById('update-balance');
        const updateBalanceText = updateBalance.innerText;
        const updateTotalBalance = parseFloat(updateBalanceText);
        updateBalance.innerText = updateTotalBalance;

    if(income > 0 && savePercent > 0){       
         if(totalSave <= updateBalanceText){
            const savingAmount = document.getElementById('saving-amount');
            const savingAmountText = parseFloat(savingAmount.innerText);
            savingAmount.innerText = totalSave;  
            const remainingBalance = document.getElementById('remaining-balance');
            const remaingTotalBalance = parseFloat(remainingBalance.innerText);
            remainingBalance.innerText = (updateTotalBalance - savingAmount.innerText);            
        }
        else{
            alert('Sorry!! You can not saving this Amount!!')
        }
    }else{
        alert('Please input a valid number')
    }
   
})

