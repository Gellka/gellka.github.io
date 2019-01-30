function t504_unifyHeights(recid) {
    $('#rec' + recid + ' .t504 .t-container').each(function() {
        var t504__highestBox = 0;
        $('.t504__col', this).each(function() {
            var t504__curcol = $(this);
            var t504__curcolchild = t504__curcol.find('.t504__col-wrapper');
            if (t504__curcol.height() < t504__curcolchild.height()) t504__curcol.height(t504__curcolchild.height());
            if (t504__curcol.height() > t504__highestBox) t504__highestBox = t504__curcol.height()
        });
        if ($(window).width() >= 960) {
            $('.t504__col', this).css('height', t504__highestBox)
        } else {
            $('.t504__col', this).css('height', "auto")
        }
    })
}