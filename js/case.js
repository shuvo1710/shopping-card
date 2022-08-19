function updateCaseNumber(isInncrease){
    const caseBtnField = document.getElementById('btn-case-field');
    const caseBtnString = caseBtnField.value;
    const previousCaseNumber = parseInt(caseBtnString);

    let newCaseNumber;

    if(isInncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseBtnField.value = newCaseNumber;
    return newCaseNumber
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const casePrice = document.getElementById('case-total-price');
    casePrice.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    // const caseBtnField = document.getElementById('btn-case-field');
    // const caseBtnString = caseBtnField.value;
    // const previousCaseNumber = parseInt(caseBtnString);
    
    // const newCaseNumber = previousCaseNumber + 1;
    // caseBtnField.value = newCaseNumber;

    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber)
    calculetSubTotal();
    
})


document.getElementById('btn-case-minus').addEventListener('click',function(){
    // const caseBtnField = document.getElementById('btn-case-field');
    // const caseBtnString = caseBtnField.value;
    // const previousCaseNumber = parseInt(caseBtnString);

    // const newCaseNumber = previousCaseNumber - 1;
    // caseBtnField.value = newCaseNumber
    const newCaseNumber = updateCaseNumber(false)
    
    updateCaseTotalPrice(newCaseNumber);
    calculetSubTotal();

})