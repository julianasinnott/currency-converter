const form = document.getElementById('form')
const {real, dollar, euro} = form

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e)
  getData()
})

function getData() {
  fetch('https://economia.awesomeapi.com.br/last/BRL-USD,USD-BRL,EUR-BRL,BRL-EUR,EUR-USD,USD-EUR')
  .then(response => {
    return response.json()
  })
  .then (data => {
    setData(data)
  })
}

function setData(data) {
  if (real.value != '' && (!(real.value).includes(','))) {
    dollar.placeholder = ((data.BRLUSD.ask)*real.value).toFixed(2)
    euro.placeholder = ((data.BRLEUR.ask)*real.value).toFixed(2)
  } 
  validationInputs(real.value)
  if (dollar.value != '' && (!(dollar.value).includes(','))) {
    real.placeholder = ((data.USDBRL.ask)*dollar.value).toFixed(2)
    euro.placeholder = ((data.USDEUR.ask)*dollar.value).toFixed(2)
  }
  validationInputs(dollar.value)
  if (euro.value != '' && (!(dollar.value).includes(','))) {
    real.placeholder = ((data.EURBRL.ask)*euro.value).toFixed(2)
    dollar.placeholder = ((data.EURUSD.ask)*euro.value).toFixed(2)
  } 
  validationInputs(euro.value)
}

function validationInputs(value) {
  if (value != '' && value.includes(',')) {
    alert('Utilize ponto (.) ao invés de vírgulas (,)')
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