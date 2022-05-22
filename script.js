// like button
$(document).ready(function(){
    $(".like").click(function(){
        $(this).toggleClass("heart");
    });
    // $(".get-course-text").click(function(){
    //     $(".like").toggleClass("heart");
    // });
});
function fav(id){
    // $(`#${id}`).toggleClass("heart");
    $("#" + id).toggleClass("heart");
}

// filter-item
$("#category-filter").change(function(){
    let filter = $(this).val();
    filterList(filter);
});
function filterList(value) {
    let list = $(".box-container");
    $(list).hide();
    if(value == "all"){
        $(".filter-section").find('.box-container').each(function(i){
            $(this).show();
        });
    } else{
        $(".filter-section").find("." + value).each(function(i){
            $(this).show();
        });
    }
}

// expand-and-collapse