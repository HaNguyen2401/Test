const element__thuong_hieu_list = document.querySelector(".thuong_hieu-list")

const element__thuong_hieu = document.querySelector(".thuong_hieu")




element__thuong_hieu.addEventListener("mouseenter", function() {
    element__thuong_hieu_list.hidden = false
});
  
element__thuong_hieu.addEventListener("mouseleave", function() {
    element__thuong_hieu_list.hidden = true
});


//////////////////////////////////////////////////////////


const element__gioi_tinh_list = document.querySelector(".gioi_tinh-list")
const element__gioi_tinh = document.querySelector(".gioi_tinh")

element__gioi_tinh.addEventListener("mouseenter", function() {
    element__gioi_tinh_list.hidden = false
});
  
element__gioi_tinh.addEventListener("mouseleave", function() {
    element__gioi_tinh_list.hidden = true
});

/////////////////////////////////////////////////////////

const element__search_icon = document.querySelector("#search_icon");
const element__search_icon_label = document.querySelector("#search_icon_label");

element__search_icon_label.onclick = function() {
    element__search_icon.focus();
};


/////////////////////////////////////////////////////////

element__trang_chu = document.querySelector(".trang_chu")

element__trang_chu.addEventListener( "click",()=>{
    window.location.replace("?");
})


element__new_product = document.querySelector(".new_product")

element__new_product.addEventListener("click",()=>{
    window.location.replace("?mod=category&act=main");
})


///////////////////////////////////////////////////////////

element__policy = document.querySelector(".policy");

element__policy.addEventListener('click',()=>{
    window.location.replace("?mod=pages&act=policy");
})