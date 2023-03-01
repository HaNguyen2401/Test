element__pay_cart = document.querySelector(".pay_cart")

element__pay_cart.addEventListener("click", ()=>{
    window.location.href = "?mod=cart&act=payment"
})