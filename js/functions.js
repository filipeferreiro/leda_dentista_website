$('nav.desktop a').hover(function(){
    $('nav.desktop li').removeClass('selected');
    $(this).parent().addClass('selected');
    })

    $('nav.desktop a').click(function(){
        $(this).parent().css('color','#509d87');
        })

    $('nav.mobile h3').click(function(){
    $('ul.nav-desktop').slideToggle();
    })
