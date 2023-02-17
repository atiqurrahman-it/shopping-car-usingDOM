
let phoneCasePrice=59



// phoneCase plus button click 
document.getElementById('phoneCase-plus-btn').addEventListener('click',function(){
    let phoneCaseItemTotal=phoneAndPhoneCaseItemUpdate(true,'PhoneCaseTotalItem')

    //total phoneCase price update 
    phone_phoneCaseTotalPriceUpdate(phoneCaseItemTotal,'totalPhoneCasePriceElement',phoneCasePrice)
    subTotal()

})

// phoneCase minus button click 
document.getElementById('phoneCase-minus-btn').addEventListener('click',function(){
    const  phoneCaseItemTotal= phoneAndPhoneCaseItemUpdate(false,'PhoneCaseTotalItem')

    //total phone price
    phone_phoneCaseTotalPriceUpdate(phoneCaseItemTotal,'totalPhoneCasePriceElement',phoneCasePrice)
    subTotal()

})

