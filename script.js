$(".btn").click(function(){
    $(".container").slideToggle("slow");
});

$("body").click(function(e){
    var $container = $(".container");
    var $button = $(".btn")
    if(!$container.is(e.target) && $container.has(e.target).length === 0 && !$button.is(e.target) && $button.has(e.target).length === 0){
        $container.slideToggle("slow");
    }
});
// $(".btn").click(function(){
//     $(".container").animate({width:"toggle"});
// });