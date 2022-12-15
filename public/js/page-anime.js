
// logo animation
anime.timeline({loop: true})
  .add({
    targets: '.title .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.title .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.title .symbol',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.title .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.title .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
  // book animation

  const bookEl = document.querySelectorAll('.card-container')


  function animateBook(el, translateY, scale, duration, elasticity) {
     anime.remove(el)
    anime({
      targets: el,
      translateY: translateY,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    })
  }

  function enterButton(el) {
    animateBook(el, -20, 1.0, 800, 400)
  };
  
  function leaveButton(el) {
    animateBook(el, 0, 1.0, 600, 300)
  };

  for (var i = 0; i < bookEl.length; i++) {
    bookEl[i].addEventListener('mouseenter', function(e) {
      enterButton(e.target);
    }, false);

    bookEl[i].addEventListener('mouseleave', function(e) {
      leaveButton(e.target)
    }, false);  
  }


module.exports = userAnime