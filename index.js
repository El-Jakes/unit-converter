// 1 meter = '3.281 feet'
// 1 liter = '0.264 gallon'
// 1 kilogram = '2.204 pound'
let length = 3.281;
let volume = 0.264;
let weight = 2.204;

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

convertBtn.addEventListener("click", () => {
  render();
});

const render = () => {
  const inputValue = inputEl.value;
  meterToFeet = inputValue * length;
  litersToGallon = inputValue * volume;
  kilogramsToPounds = inputValue * weight;
  feetToMeter = inputValue / length;
  gallonToLiters = inputValue / volume;
  poundsToKilograms = inputValue / weight;

  if (inputValue <= 1) {
    lengthEl.innerHTML = `
      <span>${inputValue} meter = ${meterToFeet.toFixed(3)} feet</span> |
      <span>${inputValue} foot = ${feetToMeter.toFixed(3)} meter</span>`;
    volumeEl.innerHTML = `
      <span>${inputValue} liter = ${litersToGallon.toFixed(3)} gallon</span> |
      <span>${inputValue} gallon = ${gallonToLiters.toFixed(3)} liters</span>`;
    massEl.innerHTML = `
      <span>${inputValue} kilo = ${kilogramsToPounds.toFixed(3)} pounds</span> |
      <span>${inputValue} pound = ${poundsToKilograms.toFixed(3)} kilos</span>`;
  } else if (
    inputValue > 1 &&
    feetToMeter <= 1 &&
    litersToGallon <= 1 &&
    poundsToKilograms <= 1
  ) {
    lengthEl.innerHTML = `
      <span>${inputValue} meters = ${meterToFeet.toFixed(3)} feet</span> |
      <span>${inputValue} feet = ${feetToMeter.toFixed(3)} meter</span>`;
    volumeEl.innerHTML = `
      <span>${inputValue} liters = ${litersToGallon.toFixed(3)} gallon</span> |
      <span>${inputValue} gallons = ${gallonToLiters.toFixed(3)} liters</span>`;
    massEl.innerHTML = `
      <span>${inputValue} kilos = ${kilogramsToPounds.toFixed(
      3
    )} pounds</span> |
      <span>${inputValue} pounds = ${poundsToKilograms.toFixed(3)} kilo</span>`;
  } else {
    lengthEl.innerHTML = `
      <span>${inputValue} meters = ${meterToFeet.toFixed(3)} feet</span> |
      <span>${inputValue} feet = ${feetToMeter.toFixed(3)} meters</span>`;
    volumeEl.innerHTML = `
      <span>${inputValue} liters = ${litersToGallon.toFixed(3)} gallons</span> |
      <span>${inputValue} gallons = ${gallonToLiters.toFixed(3)} liters</span>`;
    massEl.innerHTML = `
      <span>${inputValue} kilos = ${kilogramsToPounds.toFixed(
      3
    )} pounds</span> |
      <span>${inputValue} pounds = ${poundsToKilograms.toFixed(
      3
    )} kilos</span>`;
  }
};
