$(function(){
    
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true, 
        preNextButtons: false
});

    $('.buttonwrap').on('click', 'button', function(){
        var textValue = $('subscribeInput').val();
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        if(isEmail(textValue)){
            alert('Thanks For Subscribing!');
        } else {
            alert('Please Enter a Valid Email!');
        }
        
    });


    var counter = 0;

    $('li').on('click', 'button', function(event){
        console.log(event);
        counter++;
        $('.cartNumber').addClass('showButton').text(counter);

    })
});