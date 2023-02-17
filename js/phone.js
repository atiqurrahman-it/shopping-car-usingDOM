

//single phone price 1219
let phonePrice=1219


// phone plus button click 
document.getElementById('phone-plus-btn').addEventListener('click',function(){
    let TotalPhoneItem=phoneAndPhoneCaseItemUpdate(true,'phoneTotalItems')

    // phone total number update when you plus button click 
    phone_phoneCaseTotalPriceUpdate(TotalPhoneItem,'totalPhonePriceElement',phonePrice)
    subTotal()
})

// phone minus button click 
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    let TotalPhoneItem=phoneAndPhoneCaseItemUpdate(false,'phoneTotalItems')

    // phone total number update when you minus button click 
    phone_phoneCaseTotalPriceUpdate(TotalPhoneItem,'totalPhonePriceElement',phonePrice)
    subTotal()
})



