/*
  let splide = new Splide( '.splide', {
    
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 2,
        
        height : '6rem',
      },
      480: {
        perPage: 1,
        
        height : '6rem',
      },
    },
  } );
  
  splide.mount();

  let splide2 = new Splide( '.splide2', {
    
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 2,
        
        height : '6rem',
      },
      480: {
        perPage: 1,
        
        height : '6rem',
      },
    },
  } );
  
  splide2.mount();

*/

document.addEventListener('DOMContentLoaded', function () {
  
  new Splide('#first-carousel', {
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 2,
        
        height : '6rem',
      },
      480: {
        perPage: 1,
        
        height : '6rem',
      },
    },
  }).mount();

  
  new Splide('#second-carousel', {
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 2,
        
        height : '6rem',
      },
      480: {
        perPage: 1,
        
        height : '6rem',
      },
    },
  }).mount();

  new Splide('#third-carousel', {
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 2,
        height : '6rem',
      },
      480: {
        perPage: 1,
        height : '6rem',
      },
    },
  }).mount();
});