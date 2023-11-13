function showCurrencyName() {
    var selectCurrency = document.getElementById("toCurrency");
    var currencyName = selectCurrency.options[selectCurrency.selectedIndex].text;
    document.getElementById("currencyName").innerHTML = currencyName;
  }

  function showFromCurrencyName() {
    var selectFromCurrency = document.getElementById("fromCurrency");
    var fromCurrencyName = selectFromCurrency.options[selectFromCurrency.selectedIndex].text;
    document.getElementById("fromCurrencyName").innerHTML = fromCurrencyName;
  }

      const amountInput = document.querySelector('#amount');
      const fromCurrencySelect = document.querySelector('#fromCurrency');
      const toCurrencySelect = document.querySelector('#toCurrency');
      const convertButton = document.querySelector('#convert');
      const resultParagraph = document.querySelector('#result');
      
      convertButton.addEventListener('click', () => {
      const amount = amountInput.value;
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const apiKey = "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
      const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}&api_key=${apiKey}`;
    
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const rate = data[fromCurrency];
          const result = amount / rate;
    
          resultParagraph.innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(8)} ${toCurrency}`;
        })
        .catch(error => {
          resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
          console.error(error);
        });
    });