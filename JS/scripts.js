var select_nav = $('.original-nav');
nsn = "n_select_nav";
hdr_height = $('header').height();

$(window).scroll(function() {
  if($(this).scrollTop() > hdr_height) {
    select_nav.addClass(nsn);
  } else {
    select_nav.removeClass(nsn);
  }
});