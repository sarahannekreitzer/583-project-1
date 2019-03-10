// client-side js
// run by the browser each time your view template is loaded
/* global Chart, ScrollMagic */

document.addEventListener("DOMContentLoaded", () => {

  console.log('The DOM is loaded');
  

  // fetching data from the API 
  
  fetch('/series')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /series', 'color: #222222; font-size: large');
    console.log(data);
    console.groupEnd();
  })  
  
   fetch('/characters')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /characters', 'color: #222222; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })
  
  // building the chart
  
    
    var arrCharacter = [];
    var arrNumberComics = [];
    var data =   
  
   data.map((characters) => {
      var charactersname = character.data.fullName;
      var comicsData = character.data.comics.available;

      arrCharacter.push(characterslabel);
      arrNumberComics.push(comicsData);
    });
  
  
  // Scroll Magic code, copied from scrollmagic.io
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
  
  
   // Closing brackets for DOM loaded
});


