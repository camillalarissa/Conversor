const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const dolar = 5.25
const euro = 5.62
const bitcoin = 141835.09


const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('value-text')
  const currencyValueText = document.getElementById('currency-value-text')



  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  ).format(inputReais);


  if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'USD'
      }
    ).format(inputReais / dolar);
  }

  if (select.value === "€$ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
      {
        style: 'currency',
        currency: 'EUR'
      }
    ).format(inputReais / euro);
  }

  if (select.value === "'₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat('XBT',
      {
        style: 'currency',
        currency: 'BTC'
      }
    ).format(inputReais / bitcoin);
  }
}



changeCurrency = () => {
  const currencyName = document.getElementById('currecy-name')
  const currencyImg = document.getElementById('currecy-img')

  if (select.value === 'US$ Dólar Americano') {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "img/dolar.png"
  }

  if (select.value === '€$ Euro') {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "img/euro.png"

  }

  if (select.value === '₿ Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "img/bitcoin.png"

  }

  convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)