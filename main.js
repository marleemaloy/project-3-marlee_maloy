$(function() {
    // this will get the full URL at the address bar

    var $pageURL = window.location.href;

    // passes on every anchor tag

    $(".menu-list a").each(function() {
        // checks if its the same on the address bar

        if ($pageURL == (this.href)) {
            $(this).closest("a").addClass("active");
        }
    });

    // fades in content in hero headers
    $(".hero-content").hide();
    $(".hero-content").fadeIn();

});
