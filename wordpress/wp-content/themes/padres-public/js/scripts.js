$(document).ready(function() {
    var effect = "tossing";

    function delayedEffect() {
      $('.box').addClass(effect);
    }
    function delayedRemoveBlock() {
      $('.box').removeClass("block");    
    }

    $('.click').click(function() {
      if (!$('.box').hasClass(effect)) {
         $('.box').fadeIn();
    		 $('.box').addClass("bigEntrance");
         $('.box').addClass("block");
        
         setTimeout(delayedEffect, 2200);
          
      } else {
        
      $('.box').fadeOut();   
      $('.box').removeClass("bigEntrance");
      $('.box').removeClass(effect);
      
      setTimeout(delayedRemoveBlock, 2200);
      
      }
    });

    $('div.blog-card:odd').addClass('odd');
    $('div.blog-card:even').addClass('even');

});


