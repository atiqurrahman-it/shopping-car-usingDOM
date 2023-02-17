
// document.getElementById('remove_item').addEventListener('click',function(event){
//     const deleteElement=event.target.parentNode.parentNode
//     deleteElement.remove(event.target.parentNode)
// })

function phoneAndPhoneCaseItemUpdate(incrementDecrement,phoneAndItemById){
    const phoneAndPhoneCaseTotalItemsElement=document.getElementById(phoneAndItemById)
    const previousPhoneOrCaseItem=parseInt(phoneAndPhoneCaseTotalItemsElement.value)

    if(incrementDecrement){
        //increment item
        phoneAndPhoneCaseTotalItemsElement.value=previousPhoneOrCaseItem+1
    }else{
        //decrement item
        phoneAndPhoneCaseTotalItemsElement.value=previousPhoneOrCaseItem-1
    }

    return phoneAndPhoneCaseTotalItemsElement.value

}


function phone_phoneCaseTotalPriceUpdate(quantity,priceElementId,defaultPrice){
    let quantityNumber=parseInt(quantity)
    let priceElement=document.getElementById(priceElementId)

    // update phone price or phone Case price 
    priceElement.innerText=quantityNumber*defaultPrice

}

// setTextElementValueById
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function subTotal(){

    const phoneTotalPriceElement=document.getElementById('totalPhonePriceElement')
    const phone_caseTotalPriceElement=document.getElementById('totalPhoneCasePriceElement')

    const phonePrice=parseInt(phoneTotalPriceElement.innerText) 
    const casePrice=parseInt(phone_caseTotalPriceElement.innerText)

    const currentSubTotal=phonePrice+casePrice

    setTextElementValueById('subTotalPrice',currentSubTotal)

    // calculate tax
    console.log(currentSubTotal)
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    // final total
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}

subTotal()