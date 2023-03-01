element__category_item_all_img = document.querySelectorAll(".category_item-img")

element__category_item_all_img.forEach((img)=> {
    img.addEventListener("click",()=>{
        window.location.href ="?mod=product&act=detail";
    })
});
