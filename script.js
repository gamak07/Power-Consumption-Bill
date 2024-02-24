let form = document.getElementById('form')
let Name = document.getElementById('name')
let address = document.getElementById('address')
let meterNo = document.getElementById('meter_no')
let prevMeterReading = document.getElementById('prev_meter_reading')
let currMeterReading = document.getElementById('curr_meter_reading')

let submitButton = document.getElementById('btn')
let isValid = true 
const inputs = form.querySelectorAll('input')
submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    validateInput()
    checkForValidation()   
})


const validateInput = () =>{
    validateName()
    validateAddress()
    validateMeterNo()
    validatePrevMeterReadings()
    validateCurrMeterReadings()

}

const checkForValidation = () =>{
    let isValid = true
    let inputs = form.querySelectorAll('input')
    inputs.forEach(input => {
        // Check validity of each input field
        if (!input.checkValidity()) {
            isValid = false;
            return ''
        } else {
            return generateReports()
        }
    });

    
}

// name input field validaton
const validateName = () =>{
    const invalidCharsRegex = /[0-9!@#$%^&*()_+={}|[\]\\;:'",<>/?]/;

    if (Name.value == '') {
        Name.classList.add('error')
        Name.classList.remove('success')
    }
    else if (invalidCharsRegex.test(Name.value)) {
        Name.classList.add('error')
        Name.classList.remove('success')
    }
    else{
        Name.classList.remove('error')
        Name.classList.add('success')
    }
}

// address input field validation
const validateAddress = () =>{
    if (address.value === '') {
        address.classList.add('error')
        address.classList.remove('success')
    }
    else{
        address.classList.add('success')
        address.classList.remove('error')
    }
}

const validateMeterNo = () =>{
    const nonNumericRegex = /\D/

    if (meterNo.value == '') {
        meterNo.classList.add('error')
        meterNo.classList.remove('success')
    }
    else if (meterNo.value.length < 11){
        meterNo.classList.add('error')
        meterNo.classList.remove('success')
    }
    else if (nonNumericRegex.test(meterNo.value)){
        meterNo.classList.add('error')
        meterNo.classList.remove('success')
    }
    
    else{
        meterNo.classList.remove('error')
        meterNo.classList.add('success')
    }
}

const validatePrevMeterReadings = () =>{
    const nonNumericRegex = /\D/
    if (prevMeterReading.value == '') {
        prevMeterReading.classList.add('error')
        prevMeterReading.classList.remove('success')
    }
    else if (nonNumericRegex.test(prevMeterReading.value)) {
        prevMeterReading.classList.add('error')
        prevMeterReading.classList.remove('success')
    }
    else{
        prevMeterReading.classList.add('success')
        prevMeterReading.classList.remove('error')
    }
}
const validateCurrMeterReadings = () =>{
    const nonNumericRegex = /\D/
    if (currMeterReading.value == '') {
        currMeterReading.classList.add('error')
        currMeterReading.classList.remove('success')
    }
    else if (nonNumericRegex.test(currMeterReading.value)) {
        currMeterReading.classList.add('error')
        currMeterReading.classList.remove('success')
    }
    else{
        currMeterReading.classList.add('success')
        currMeterReading.classList.remove('error')
    }
}

const generateReports = () =>{


    const output = document.querySelector('.output')
    const currMeterReadingValue = parseInt(currMeterReading.value);
    const prevMeterReadingValue = parseInt(prevMeterReading.value);
    const unitDifference = currMeterReadingValue - prevMeterReadingValue;
    const costPerUnit = 15;
    const totalCost = currMeterReadingValue * costPerUnit;
    const vat = 0.1 * totalCost;
    const totalCostWithVat = totalCost + vat;

    
        output.innerHTML = `
        <p>Dear, ${Name.value} <br> The unit difference of your previous and current meter reading is: ${unitDifference}kw/h at ${address.value} and the total cost of ur power consumption is #${totalCostWithVat} including  a 10% vat. <br> note: the cost per unit is 15 naira. <br> yours faithfully <br> PHCN</p>
        `


}