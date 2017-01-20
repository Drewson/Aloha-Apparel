$(function(){
    $('.scrollButtons').on('click','li',function(event){
        $(this).toggleClass('lilButtonPhase2');
        // $(this).removeClass('lilButtonPhase1');
        console.log(event);
    });
});