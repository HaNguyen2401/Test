//////////////////////////////////////////////////
element__add_color = document.querySelector(".add_filter_color")

element__tmp = element__add_color

element__all_filer = document.querySelector(".category_all_filter")

document.querySelector(".add_filter_color").remove()


// element__all_filer.appendChild(element__tmp);

element__add_shape = document.querySelector(".add_filter_shape")
element__tmp_shape = element__add_shape

document.querySelector(".add_filter_shape").remove()
// element__all_filer.appendChild(element__tmp_shape)

///////////////////////////////////////////////////

element__category_color  = document.querySelector(".category_color")

value = "notshow"


element__category_color.addEventListener("click", function() {
    if (value=="notshow"){
        element__category_color.innerHTML = "Màu Sắc&#x25B4;";
        element__all_filer.appendChild(element__tmp)
        value = "show"
        element__color_black = document.querySelector(".black_color")
        element__color_white = document.querySelector(".white_color")
        element__color_pink = document.querySelector(".pink_color")
        element__color_silver = document.querySelector(".silver_color")
        element__color_other = document.querySelector(".other_color")
        element__color_all = document.querySelector(".all_color")
        element__color_all.addEventListener("click",()=>{
            element__color_black.style.border = "0px solid red";
            element__color_white.style.border = "0px solid red";
            element__color_pink.style.border = "0px solid red";
            element__color_silver.style.border = "0px solid red";
            element__color_other.style.border = "0px solid red";
            element__color_all.style.border = "3px solid red";
        })
        
        element__color_black.addEventListener("click",()=>{
            element__color_black.style.border = "3px solid red";
            element__color_white.style.border = "0px solid red";
            element__color_pink.style.border = "0px solid red";
            element__color_silver.style.border = "0px solid red";
            element__color_other.style.border = "0px solid red";
            element__color_all.style.border = "0px solid red";
        })
        
        element__color_white.addEventListener("click",()=>{
            element__color_black.style.border = "0px solid red";
            element__color_white.style.border = "3px solid red";
            element__color_pink.style.border = "0px solid red";
            element__color_silver.style.border = "0px solid red";
            element__color_other.style.border = "0px solid red";
            element__color_all.style.border = "0px solid red";
        })
        
        element__color_pink.addEventListener("click",()=>{
            element__color_black.style.border = "0px solid red";
            element__color_white.style.border = "0px solid red";
            element__color_pink.style.border = "3px solid red";
            element__color_silver.style.border = "0px solid red";
            element__color_other.style.border = "0px solid red";
            element__color_all.style.border = "0px solid red";
        })
        
        element__color_silver.addEventListener("click",()=>{
            element__color_black.style.border = "0px solid red";
            element__color_white.style.border = "0px solid red";
            element__color_pink.style.border = "0px solid red";
            element__color_silver.style.border = "3px solid red";
            element__color_other.style.border = "0px solid red";
            element__color_all.style.border = "0px solid red";
        })
        element__color_other.addEventListener("click",()=>{
            element__color_black.style.border = "0px solid red";
            element__color_white.style.border = "0px solid red";
            element__color_pink.style.border = "0px solid red";
            element__color_silver.style.border = "0px solid red";
            element__color_other.style.border = "3px solid red";
            element__color_all.style.border = "0px solid red";
        })
        

    } else {
        element__category_color.innerHTML = 'Màu Sắc&#x25BE;';
        document.querySelector(".add_filter_color").remove()
        value = "notshow"
    }
});

////////////////////////////////////////////////////////// change color 
value_shape = "notshow"

element__category_shape = document.querySelector(".category_shape")

element__category_shape.addEventListener("click",()=>{
    if (value_shape=="notshow"){
        element__category_shape.innerHTML = "Hình Dạng&#x25B4;"
        value_shape = "show"
        element__all_filer.appendChild(element__tmp_shape)

        element__all_shape = document.querySelector(".all_shape")
        element__around_shape = document.querySelector(".around_shape")
        element__square_shape = document.querySelector(".square_shape")
        element__special_shape = document.querySelector(".special_shape")

        element__all_shape.addEventListener("click",()=>{
            element__all_shape.style.color = "red"
            element__around_shape.style.color = "black"
            element__square_shape.style.color = "black"
            element__special_shape.style.color = "black"
        })
        element__around_shape.addEventListener("click",()=>{
            element__all_shape.style.color = "black"
            element__around_shape.style.color = "red"
            element__square_shape.style.color = "black"
            element__special_shape.style.color = "black"
        })
        element__square_shape.addEventListener("click",()=>{
            element__all_shape.style.color = "black"
            element__around_shape.style.color = "black"
            element__square_shape.style.color = "red"
            element__special_shape.style.color = "black"
        })
        element__special_shape.addEventListener("click",()=>{
            element__all_shape.style.color = "black"
            element__around_shape.style.color = "black"
            element__square_shape.style.color = "black"
            element__special_shape.style.color = "red"
        })
    } else {
        element__category_shape.innerHTML = "Hình Dạng&#x25BE;"
        value_shape = "notshow"
        document.querySelector(".add_filter_shape").remove()
    }
})

//////////////////////////////////////////////////////////////////\\\
value_filter_by = "notshow"

element__category_filter_by = document.querySelector(".category_filter_by")

element__category_filter_by_list = document.querySelector(".category_filter_by-list")

element__category_filter_by.addEventListener("click",()=>{
    if  (value_filter_by=="notshow"){
        value_filter_by ="show"
        element__category_filter_by_list.hidden = false
    } else {
        value_filter_by ="notshow"
        element__category_filter_by_list.hidden = true
    }
})