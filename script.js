let celsiusInput = document.querySelector('#celsius > input')
let fahrenhietInput = document.querySelector('#fahrenhiet > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100;
} 

celsiusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusInput.value)||0;
    celsiusInput.placeholder="0";
    let fTemp = (cTemp*(9/5))+32;
    let kTemp = cTemp+273.15;

    fahrenhietInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})
fahrenhietInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenhietInput.value)||0;
    fahrenhietInput.placeholder="0";
    let cTemp = (fTemp-32)*(5/9);
    let kTemp = (fTemp-32)*(5/9)+273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})
kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value)||0;
    kelvinInput.placeholder="0";
    let cTemp = kTemp-273.15;
    let fTemp = (kTemp-273.15) * (9/5)+32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenhietInput.value = roundNumber(fTemp);
})

btn.addEventListener('click',()=>{
    celsiusInput.value="";
    celsiusInput.placeholder="celsius";
    fahrenhietInput.value="";
    fahrenhietInput.placeholder="Fahrenheit";
    kelvinInput.value="";
    kelvinInput.placeholder="kelvin";
})
