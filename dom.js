function getPin() {
    const pin = generatePin();
    const pinStr = pin + '';
    if (pinStr.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';

        } else if (number === 'D') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value;

    const typeNumber = document.getElementById('type-number');
    const typeNumberValue = typeNumber.value;

    if(displayPinValue === typeNumberValue){
        document.getElementById('correct').style.display = 'block'
        document.getElementById('incorrect').style.display = 'none'

    } else{
        document.getElementById('incorrect').style.display = 'block'
        document.getElementById('correct').style.display = 'none'
    }
})