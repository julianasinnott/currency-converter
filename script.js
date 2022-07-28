const form = document.getElementById('form')
const {real, dollar, euro} = form

form.addEventListener('submit', e => {
  e.preventDefault()
  getData()
})

function getData() {
  fetch('https://economia.awesomeapi.com.br/last/BRL-USD,USD-BRL,EUR-BRL,BRL-EUR,EUR-USD,USD-EUR')
  .then(response => {
    return  response.json()
  })
  .then (data => {
    setData(data)
  })
}

function setData(data) {
  if(real.value != '') {
    dollar.placeholder = (data.USDBRL.ask)*real.value
    euro.placeholder = (data.EURBRL.ask)*real.value
  }
  if (dollar.value != '') {
    real.placeholder = (data.BRLUSD.ask)*dollar.value
    euro.placeholder = (data.EURUSD.ask)*dollar.value
  }
  if (euro.value != '') {
    real.placeholder = (data.BRLEUR.ask)*euro.value
    dollar.placeholder = (data.USDEUR.ask)*euro.value
  }
}

function clearInputs(input) {
  if (!input.value) {
    real.placeholder = 'Cotação do Real'
    real.value = ''
    dollar.placeholder = 'Cotação do Dolar'
    dollar.value = ''
    euro.placeholder = 'Cotação do Euro'
    euro.value = ''
  }
}