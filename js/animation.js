$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    delay: function(el, i) {
      return 300 * (i+1)
    }
  })


  anime.timeline()
  .add({
    targets: 'img#logo',
    opacity: [0,1],
    easing: "easeInOutQuad",
    delay: function(el, i) {
      return 500 * (i+1)
    }
  })