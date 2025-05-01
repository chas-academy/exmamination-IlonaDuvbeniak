const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")

document.getElementById("incomeBtn").addEventListener("click", () => {
    addToList("income")
})

document.getElementById("expenseBtn").addEventListener("click", () => {
    addToList("expense")
})

let incomes = []
let expenses = []


function addToList(type) {
    const descriptionInput = document.getElementById("desc")
    const amountInput = document.getElementById("amount")

    let desc = descriptionInput.value
    let amount = parseFloat(amountInput.value)

    let transaction = {
        description: desc,
        amount: amount,
        type: type
    }

    if (type === "income") {
        incomes.push(transaction);
    } else if (type === "expense") {
        expenses.push(transaction);
    }

    descriptionInput.value = ""
    amountInput.value = ""

    let transactions = incomes.concat(expenses)

    showList(transactions)
    updateBalance()
}

function updateBalance() {
    let balance = document.getElementById("balance")
    let totalIncome = 0
    let totalExpense = 0

    for (let income of incomes) {
        totalIncome += income.amount
    }

    for (let expense of expenses) {
        totalExpense += expense.amount
    }

    let balanceAmount = totalIncome - totalExpense

    balance.innerHTML = `${balanceAmount}`
}

function showList(transactions) {
    incomeList.innerHTML = ""
    expenseList.innerHTML = ""
    transactionList.innerHTML = ""

    for (let income of incomes) {
        let incomeItem = document.createElement("li")
        incomeItem.innerHTML = `${income.description} - ${income.amount}kr`
        incomeList.appendChild(incomeItem)
    }

    for (let expense of expenses) {
        let expenseItem = document.createElement("li")
        expenseItem.innerHTML = `${expense.description} - ${expense.amount}kr`
        expenseList.appendChild(expenseItem)
    }

    for (let transaction of transactions) {
        let transactionItem = document.createElement("li")
        transactionItem.innerHTML = `${transaction.description} - ${transaction.amount}kr (${transaction.type})`
        transactionList.appendChild(transactionItem)
    }
}

