$( window ).scroll(function() {
    var height = $(window).scrollTop();
    var scind = 1 + height/2000;
    if(height > 10) {
        $('.container1').fadeOut();
    }else{
        $('.container1').fadeIn();
    }
    if(height <= 900){
        $('.drink').css('transform', 'scale(' + scind + ')');
        $('#big-img div').css('box-shadow', 'inset #014a38a0 0 0 100px ' + height + 'px' );
        $('.full').css('filter', 'blur(5px)');
    }
});

// $('#big-img').animate(
    //     {boxShadow: 'inset 6rem 6rem 100px 10px #01785b'});