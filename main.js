$(function() {
    // this will get the full URL at the address bar
    var $pageURL = window.location.href;
    // passes on every anchor tag
    $(".menu-list a").each(function() {
        // checks if the active link is the same as on the address bar
        if ($pageURL == (this.href)) {
            $(this).closest("a").addClass("active");
        }
    // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.home-menu').outerHeight();
      var $window = $(window);
      var $homeMenu = $('.home-menu');
      var $document = $(document);

      $window.scroll(function(event){
          didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);

      function hasScrolled() {
          var currentPosition = $(this).scrollTop();

          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - currentPosition) <= delta)
              return;

          // If they scrolled down and are past the navbar, add class .nav-up.
          // This is necessary so you never see what is "behind" the navbar.
          if (currentPosition > lastScrollTop && currentPosition > navbarHeight){
              // Scroll Down
              $homeMenu.removeClass('nav-down').addClass('nav-up');
          } else {
              // Scroll Up
              if(currentPosition + $window.height() < $document.height()) {
                  $homeMenu.removeClass('nav-up').addClass('nav-down');
              }
          }

          lastScrollTop = currentPosition;
      }
    });
  });
