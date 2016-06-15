/**
 * Created by R2RKA on 12.06.2016.
 */
jQuery(document).ready(function($){
    $('#instagramm').hover(
        function(){ $(this).addClass('fa-spin') },
        function(){ $(this).removeClass('fa-spin') }
    )
    $('#vk').hover(
        function(){ $(this).addClass('fa-spin') },
        function(){ $(this).removeClass('fa-spin') }
    )
    $('#fb').hover(
        function(){ $(this).addClass('fa-spin') },
        function(){ $(this).removeClass('fa-spin') }
    )
    $('#twt').hover(
        function(){ $(this).addClass('fa-spin') },
        function(){ $(this).removeClass('fa-spin') }
    )

    $(window).load(function() {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 767) {
            $('#navbar-top').removeClass("navbar-fixed-top");
        }
    });
});