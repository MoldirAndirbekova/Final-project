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
            $('#big-img div').css('box-shadow', 'inset #014a38a 0 0 0 100px ' + height + 'px' )
        }
    
        if(height >= 700 && height<= 900){
            $('.full').css('filter', 'blur(5px)');
        }else {
            $('.full').css('filter', 'blur(0px)');
        }    

        if(height >= 1800){
           $('.header2 a').css('color', '#01785b');
           $('.header2').css('color', '#01785b');
           $('#avec a').css('color', '#01785b');
           $('.header1').css('color', '#fff6e0');
           $('.header1').css('background-color', '#01785b');
           $('.header2').css('box-shadow', 'inset -30px 50px 50px 0 #fff6e0');
        }else{
           $('.header1').css('color', '#01785b');
           $('.header1').css('background-color', '#fcbf10');
           $('.header2').css('color', '#fcbf10');
           $('.header2 a').css('color', '#fcbf10');
           $('#avec a').css('color', '#fcbf10');
           $('.header2').css('box-shadow', 'inset -30px 80px 30px 10px #01785b'); 
        }

        if(height >= 1960){
           $('.drink').css('display', 'none');
           $('#green img').css('display', 'block');
           $('#green .description').css('padding-top', '55px');
         }else{
           $('.drink').css('display', 'block');
           $('#green img').css('display', 'none');
           $('#green .description').css('padding-top', '420px');
         }

        if(height > 4300){
            $("#rightleft").animate(
                { left: '70px',
                opacity: '1'
                }, 1000); 
            $("#rightleft").animate(
                { left: '-70px',
                  opacity: '0.3'
                }, 1000); 
            $('.horizontal').scroll(function(){
                $("#rightleft").hide(); 
            })     
        }
    });

    if($( window ).width() > 1720){
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
    } 
    
});

