function updatePhoneNumber(isInncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString)

    let newPhoneNumber;
    if(isInncrease == true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price') 
    phonePrice.innerText = totalPhonePrice;
}
document.getElementById('btn-phone-number-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);
    // const totalPhonePrice = newPhoneNumber * 1219;
    // const phonePrice = document.getElementById('phone-price') 
    // phonePrice.innerText = totalPhonePrice;
    updatePhoneTotalPrice(newPhoneNumber);

    calculetSubTotal();
    

       
})


document.getElementById('btn-phone-number-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    // const totalPhonePrice = newPhoneNumber * 1219;
    // const phonePrice = document.getElementById('phone-price') 
    // phonePrice.innerText = totalPhonePrice;
    updatePhoneTotalPrice(newPhoneNumber);

    calculetSubTotal();
})