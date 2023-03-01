element__thuong_hieu_list = document.querySelector(".thuong_hieu-list")

element__thuong_hieu = document.querySelector(".thuong_hieu")




element__thuong_hieu.addEventListener("mouseenter", function() {
    element__thuong_hieu_list.hidden = false
});
  
element__thuong_hieu.addEventListener("mouseleave", function() {
    element__thuong_hieu_list.hidden = true
});


//////////////////////////////////////////////////////////


element__gioi_tinh_list = document.querySelector(".gioi_tinh-list")
element__gioi_tinh = document.querySelector(".gioi_tinh")

element__gioi_tinh.addEventListener("mouseenter", function() {
    element__gioi_tinh_list.hidden = false
});
  
element__gioi_tinh.addEventListener("mouseleave", function() {
    element__gioi_tinh_list.hidden = true
});

/////////////////////////////////////////////////////////

element__search_icon = document.querySelector("#search_icon");
element__search_icon_label = document.querySelector("#search_icon_label");

element__search_icon_label.onclick = function() {
    element__search_icon.focus();
};


/////////////////////////////////////////////////////////

element__trang_chu = document.querySelector(".trang_chu")

element__trang_chu.addEventListener( "click",()=>{
    window.location.href = "?";
})

/////////////////////////////////////////////////////////////
element__new_product = document.querySelector(".new_product")

element__new_product.addEventListener("click",()=>{
    window.location.href="?mod=category&act=main&type=newproduct";
})


///////////////////////////////////////////////////////////

element__policy = document.querySelector(".policy");

element__policy.addEventListener('click',()=>{
    window.location.href="?mod=pages&act=policy";
})


////////////////////////////////////////////////////

element__logo = document.querySelector(".navbar_logo")

element__logo.addEventListener('click',()=>{
    window.location.href="?";
})

///////////////////////////////////////////////////////////
element__dang_nhap = document.querySelector(".dang_nhap")
element__dang_ky = document.querySelector(".dang_ky")

element__dang_nhap.addEventListener("click",()=>{
    window.location.href="?mod=pages&act=login";
})

element__dang_ky.addEventListener("click",()=>{
    window.location.href="?mod=pages&act=register";
})


///////////////////////////////////
element__subnav_cart_img = document.querySelector(".subnav_cart-img")
element__subnav_cart_img.addEventListener("click",()=>{
    window.location.href="?mod=cart&act=show";
})