// client-side js
// run by the browser each time your view template is loaded
/* global Chart, ScrollMagic */

document.addEventListener("DOMContentLoaded", () => {

  console.log('The DOM is loaded');
  
  
  // fetch
  
  fetch('/characters')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /characters', 'color: #222222; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })
  
  
  fetch('/series')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /series', 'color: #222222; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })  
  
  // Spider-Man
  fetch('/spider-man').then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /spider-man', 'color: #4B9CD3; font-size: large');
    console.log(data);
    console.groupEnd();  
    
    
    //ajax request 
  
  
   var series = '';
  
   $.ajax({
    type:'GET',
    url: './series.json',
    data: series,
    async: true,
    dataType:'json',
    error: function(series, white){ console.log('Your ajax call failed. Sorry fam.'); },
    success:function(series){
      console.log('series ajax call success');
      console.log(series[0].startYear);
  
  // This was taken from the chart.js sample library https://www.chartjs.org/samples/latest/
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Agent Brand", "Absorbing Man", "Agent Zero", "Aaron Stack", "Abomination", "Abyss", "Adam Warlock", "Agent X", "Agents of Atlas", "Witch Hunter Angela"],
        datasets: [{
            label: "Number of Stories Each Character is In",
            backgroundColor: '#C60404',
            borderColor: '#C60404',
            data: [16, 96, 25, 27, 26, 8, 205, 23, 44, 18],
                }]
            },
    
    // Configuration options go here
    options: {
    }
          });
  
      } //close success
  }); //close ajax
  
    
    
  
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
});



    
   // Closing brackets for DOM loaded
});