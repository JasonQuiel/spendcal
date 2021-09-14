//ID that are going to be targeted
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money_plus')
const money_minus = document.getElementById('money_minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []
 // Add Transaction

function addTransaction(e) {
    e.preventDefault()

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('please add a text and amount')

     }else {
        const transaction = {
            id: generateId(), 
            text: text.value,
            amount: +amount.value,
        }
// console.log(transaction)

transactions.push(transaction)

addTransactionList(transaction)

updateValues()

updateLocalStorage()

text.value = ''
amount.value = ''
     }
}

// Generates random id 
function generatedId() {

}

//