element__brand_pic = document.querySelectorAll(".brand-pic")

for (let key in element__brand_pic) {
    if (!isNaN(key)) {

        element__brand_pic[key].addEventListener("mouseenter", function() {
            element__brand_pic[key].src = element__brand_pic[key].src.replace("brand","brand-red")
            
        });


        element__brand_pic[key].addEventListener("mouseleave", function() {
            element__brand_pic[key].src = element__brand_pic[key].src.replace("brand-red","brand")
        });
    }

}