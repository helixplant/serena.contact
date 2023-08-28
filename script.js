$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        $('section').each(function () {
            var offset = $(this).offset().top;
            var sectionHeight = $(this).height();
            if (scrollPos >= offset && scrollPos < offset + sectionHeight) {
                var id = $(this).attr('id');
                $('nav a').removeClass('active');
                $('nav a[href="#' + id + '"]').addClass('active');
            }
        });
    });
});