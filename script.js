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

// filter-items
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

// load-more-items
let loadMore = document.querySelector('#load-more');
let items = 4;
loadMore.onclick = () =>{
    let box = [...document.querySelectorAll(".box-container")];
    for (let i = items; i < items+4; i++){
        box[i].style.display = "block";
    }
    items += 4;
    if (items >= box.length){
        loadMore.style.display = "none";
    }
}