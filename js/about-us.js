$(document).ready(function() {
    var container = $('.about-description--wrapper');
    var btn = $('.toggle--btn');
    var fullHeight = container.outerHeight(true);

    if (fullHeight <= 160) {
        btn.hide();
    } else {
        container.css('height', '160px');
        btn.on('click', function() {
            container.parent().toggleClass('fullcontent');

            if (container.parent().hasClass('fullcontent')) {
                btn.html(
                    'Read less <span class="icon-wrapper"><iconify-icon icon="uil:angle-up"></iconify-icon></span>'
                );
                container.css('height', fullHeight + 'px');
            } else {
                btn.html(
                    'Read more <span class="icon-wrapper"><iconify-icon icon="uil:angle-down"></iconify-icon></span>'
                );
                container.css('height', '160px');
            }
        });
    }
});
