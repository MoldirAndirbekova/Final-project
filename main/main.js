$(document).ready(function(){
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
            $('#big-img div').css('box-shadow', 'inset #014a38a0 0 0 100px ' + height + 'px' )
        }
    
        if(height >= 700 && height<= 900){
            $('.full').css('filter', 'blur(5px)');
        }else {
            $('.full').css('filter', 'blur(0px)');
        }
         
        if(height > 1440){
            $('.header2').css('box-shadow', 'none');
        }else{
            $('.header2').css('box-shadow', 'inset 0 6rem 100px 10px #01785b'); 
        }    

        if(height >= 1800){
           $('.header2').css('color', '#01785b');
           $('#avec').css('color', '#01785b');
           $('.header1').css('color', 'white');
           $('.header1').css('background-color', '#01785b');
           $('.header2').css('box-shadow', 'inset 0 6rem 100px 10px #fff6e0');
        }else{
           $('.header1').css('color', '#01785b');
           $('.header1').css('background-color', '#fcbf10');
           $('.header2').css('color', '#fcbf10');
           $('#avec').css('color', '#fcbf10');
        }

        if(height >= 1960){
           $('.drink').css('display', 'none');
           $('#green img').css('display', 'block');
           $('#green .description').css('padding-top', '60px');
         }else{
           $('.drink').css('display', 'block');
           $('#green img').css('display', 'none');
           $('#green .description').css('padding-top', '420px');
         }
    });
    
    $("#green").mouseover(function(){
        $('#green').css('transform', 'scale(1.73)');
        $('#green').css('margin', '0 7.2%');
    }); 

    $("#green").mouseout(function(){
        $('#green').css('transform', 'scale(1.73)');
        $('#green').css('margin', '0 7.2%');
    }); 

    $(".item").mouseover(function(){
        $(this).css('font-size', '11.56px');
        $("#green .description").css('font-size', '20px');
        $('#green').css('transform', 'scale(1)');
        $(this).css('transform', 'scale(1.73)');
        $('.container3 div').css('margin', '0 2.15%');
        $(this).css('margin', '0 7.2%');
    }); 

    $(".item").mouseout(function(){
        $(this).css('font-size', '20px');
        $("#green .description").css('font-size', '11.56px');
        $('#green').css('transform', 'scale(1.73)');
        $(this).css('transform', 'scale(1)');
        $('.container3 div').css('margin', '0 2.15%');
        $('#green').css('margin', '0 7.2%');
    });
});



