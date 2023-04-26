const celsiusInput = document.querySelector('#celsius-input');
const fahrenheitInput = document.querySelector('#fahrenheit-input');
const convertButton = document.querySelector('#convert-button');

convertButton.addEventListener('click', function() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(celsius)) {
    const convertedFahrenheit = celsius * 1.8 + 32;
    fahrenheitInput.value = convertedFahrenheit.toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    const convertedCelsius = (fahrenheit - 32) / 1.8;
    celsiusInput.value = convertedCelsius.toFixed(2);
  }
});
