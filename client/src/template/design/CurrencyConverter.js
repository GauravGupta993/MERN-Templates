import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  const API_KEY = '067408d32d604004126a7143'; // Replace with your ExchangeRate-API key

  useEffect(() => {
    // Fetch available currencies
    axios
      .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(response => {
        const currencyList = Object.keys(response.data.conversion_rates);
        setCurrencies(currencyList);
        setExchangeRate(response.data.conversion_rates[toCurrency]);
      })
      .catch(error => console.error('Error fetching currencies:', error));
  }, [API_KEY, toCurrency]);

  const convertCurrency = () => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
      )
      .then(response => setExchangeRate(response.data.conversion_rate))
      .catch(error => console.error('Error fetching exchange rate:', error));
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span> to </span>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={convertCurrency} style={{ marginTop: '10px' }}>
        Convert
      </button>
      <h3>
        {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
      </h3>
    </div>
  );
};

export default CurrencyConverter;
