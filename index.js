
    // 1 meter = '3.281 feet'
    // 1 liter = '0.264 gallon'
    // 1 kilogram = '2.204 pound'
let length = 3.281 
let volume = 0.264 
let weight = 2.204 

const inputEl = document.querySelector('#input-el')
const convertBtn = document.querySelector('#convert-btn')


convertBtn.addEventListener('click', () => {
    const inputValue = inputEl.value
    meterToFeet = inputValue * length
    litersToGallon = inputValue * volume
    kilogramsToPounds = inputValue * weight
    feetToMeter = inputValue / length
    gallonToLiters = inputValue / volume
    PoundsToKilograms = inputValue / weight
    alert (feetToMeter)
})