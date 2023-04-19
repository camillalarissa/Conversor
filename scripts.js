const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const dolar = 5.25
const euro = 5.62
const bitcoin = 147.66394


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

  if (select.value === "₿ Bitcoins") {
    currencyValueText.innerHTML = new Intl.NumberFormat('XTB',
      {
        style: 'currency',
        currency: 'BTC'
      }
    ).format(inputReais * bitcoin);
  }

}



changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === 'US$ Dólar Americano') {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./img/dolar.png"
  }

  if (select.value === '€$ Euro') {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./img/euro.png"

  }

  if (select.value === '₿ Bitcoins') {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./img/bitcoin.png"

  }
  console.log(changeCurrency)
  convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)