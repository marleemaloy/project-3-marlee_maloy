$(function() {

  //FUNCTION TO MAKE ACTIVE LINKS RETAIN A BLUE BORDER BOTTOM


    // this will get the full URL at the address bar
    var $pageURL = window.location.href;
    // passes on every anchor tag
    $('.menu-list a').each(function() {
        // checks if the active link is the same as the url in the address bar
        if ($pageURL == (this.href)) {
          // adds the active class to the active a tag
            $(this).closest('a').addClass('active');
        }
    });




    // FUNCTION TO HIDE HEADER ON SCROLL DOWN AND SHOW ON SCROLL UP



      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.home-menu').outerHeight();
      var $window = $(window);
      var $homeMenu = $('.home-menu');
      var $document = $(document);

    //When the user scrolls, set didScroll to true
      $window.scroll(function(event){
          didScroll = true;
      });
      // Checks every 250ms to see if didScroll
      //is true and if it is, runs hasScrolled and resets didScroll to false
      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);


      function hasScrolled() {
          var currentPosition = $(this).scrollTop();

          // Makes sure they scroll more than delta
          if(Math.abs(lastScrollTop - currentPosition) <= delta)
              return;

          // This is necessary so you never see what is "behind" the navbar
          // If user scrolls down and scrolls past the navbar, hide menu
          if (currentPosition > lastScrollTop && currentPosition > navbarHeight){
              $homeMenu.removeClass('nav-down').addClass('nav-up');
          } else {
              // On scroll up, show menu
              // This condition accounts for a bug on macs where you can scroll past the document.height
              if(currentPosition + $window.height() < $document.height()) {
                  $homeMenu.removeClass('nav-up').addClass('nav-down');
              }
          }

          lastScrollTop = currentPosition;
      }







      // FUNCTION USING EVENT DELEGATION TO CHECK IF A FORM HAS BEEN SUBMITTED AND
      // INSTEAD OF SUBMITTING, DISPLAYING AN ALERT

        $('#contact').on('click', 'button', function(event) {
          // Stop the default behavior on the button click
          event.preventDefault();
          // alert user that we will be in touch shortly
        alert('Thanks! We will be in touch shortly.');
      });
  });
