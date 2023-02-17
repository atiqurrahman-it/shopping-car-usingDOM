
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


function subTotal(){
    const subTotalElement=document.getElementById('subTotalPrice')
    const phoneTotalPrice=document.getElementById('totalPhonePriceElement')
    const phone_caseTotalPrice=document.getElementById('totalPhoneCasePriceElement')
    const phonePrice=parseInt(phoneTotalPrice.innerText) 
    const casePrice=parseInt(phone_caseTotalPrice.innerText)
    const subTotal=phonePrice+casePrice
    subTotalElement.innerText=subTotal
}