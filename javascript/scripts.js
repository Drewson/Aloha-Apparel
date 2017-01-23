

$(function(){
    
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });    
    
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true, 
        preNextButtons: false
    });

    $('.buttonWrap').on('click', '.subscribeInput', function(){
        $(this).val('');
    });

    $('.buttonWrap').on('click', 'button', function(){
        console.log(this)
        var textValue = $('.subscribeInput').val();
        $('.subscriberInput').html().css('color', 'black');

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