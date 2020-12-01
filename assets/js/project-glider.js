window.addEventListener('load', function(){

    $("img").addClass('hasloaded');
        new Glider(document.querySelector('.project-glider'), {
            slidesToShow: 1.1,
            draggable: true,
            scrollLock: true,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            }
          });
      });
