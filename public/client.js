// client-side js
// run by the browser each time your view template is loaded
/* global Chart, ScrollMagic */

document.addEventListener("DOMContentLoaded", () => {

  console.log('The DOM is loaded');
  
  // Scroll Magic
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
    triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .addTo(controller);
  }
});



