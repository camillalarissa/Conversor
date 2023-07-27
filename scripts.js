const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')




const convertValues = async () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('value-text')
  const currencyValueText = document.getElementById('currency-value-text')

  const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  console.log(data)
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