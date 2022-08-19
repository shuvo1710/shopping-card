function getTextElementById(elementId){
    const phonePriceElement = document.getElementById(elementId);
    const phonePriceString = phonePriceElement.innerText;
    const currentPhoneTotal = parseInt(phonePriceString)
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculetSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-price');
    const currentCaseTotal = getTextElementById('case-total-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;  
    setTextElementValueById('current-sub-total', currentSubTotal)

    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString);
    setTextElementValueById('tax-amount', texAmount);

    const finalTotal = currentSubTotal + texAmount;
    setTextElementValueById('final-total', finalTotal)
}

// tax calculet

