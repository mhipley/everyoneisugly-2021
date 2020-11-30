window.addEventListener('load', function(){


        new Glider(document.querySelector('.project-glider'), {
            slidesToShow: 1.2,
            draggable: true,
            scrollLock: true,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            }
          });
      });
