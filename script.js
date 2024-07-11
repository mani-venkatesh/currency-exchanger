async function fetchRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    return await response.json();
}

async function convertCurrency(event) {
    event.preventDefault();
    const rates = await fetchRates();
    const amount = parseFloat(document.getElementById('amount').value);
    const baseCurrency = document.getElementById('base-currencies').value;
    const quotedCurrency = document.getElementById('quoted-currency').value;

    const baseToUSD = baseCurrency === 'USD' ? 1 : rates.rates[baseCurrency];
    const quotedToUSD = quotedCurrency === 'USD' ? 1 : rates.rates[quotedCurrency];

    const conversion = (amount / baseToUSD) * quotedToUSD;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${amount} ${baseCurrency} is ${conversion.toFixed(2)} ${quotedCurrency}`;
}
