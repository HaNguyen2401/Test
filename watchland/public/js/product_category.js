element__buynow = document.querySelectorAll(".category_item-buynow")
    element__category_item = document.querySelectorAll(".product_category-item")
    

    for (let key in element__category_item) {
        if (!isNaN(key)) {

            element__category_item[key].addEventListener("mouseenter", function() {
                element__buynow[parseInt(key)].hidden = false
            });
        

            element__category_item[key].addEventListener("mouseleave", function() {
                element__buynow[parseInt(key)].hidden = true
            });
        }
        
    }