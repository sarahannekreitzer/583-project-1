// client-side js
// run by the browser each time your view template is loaded
/* global Chart, ScrollMagic */

document.addEventListener("DOMContentLoaded", () => {
  // client-side js
  // run by the browser each time your view template is loaded
  
  // Header sticky
  console.log('testing to make sure headers.js is linked up');
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          document.getElementById("header").style.top = "0";
      } else {
          document.getElementById("header").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
  }

  console.log('hello world, my DOM is loaded :o');
  
  
  
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
