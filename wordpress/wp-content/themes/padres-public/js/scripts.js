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

    // pull quotes
    pullquotes = $('span.pullquote'); // Get all pullquotes
    if (pullquotes.length != 0) { // There are pullquotes
      pullquotes.each(function(){
        pullquote = $(this);
        pullquotecontent = pullquote.text();
        pullquotecontent = pullquotecontent.replace(/\((.*)\)/gi, ''); // Remove unwanted characters
        ellipsis = '&#8230;'; // Ellipsis
        firstchar = pullquotecontent.slice(0,1); // Get first character
        if (firstchar.toUpperCase() != firstchar) { // First character is not uppercase
          pullquotecontent = ellipsis + pullquotecontent; // Prepend ellipsis
        }
        lastchar = pullquotecontent.slice(-1); // Get last character
        if ((lastchar != '.') && (lastchar != '?') && (lastchar != '!')) { // Last character is not sentence ending
          pullquotecontent += ellipsis; // Append ellipsis
        }
        classcontent = 'pullquote';
        if (pullquote.is('.right')) {
          classcontent += ' right';
        }
        pullquote.parent().before('<blockquote class="' + classcontent + '"><p><q>' + pullquotecontent + '</q></p></blockquote>');
      });
    }

    // wow entrance animation 

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'fadeInRight', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true        // trigger animations on mobile devices (true is default)
      }
    );
    wow.init();

});


