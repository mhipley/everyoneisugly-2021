window.addEventListener('load', function(){
    $("img").addClass('hasloaded');
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    duration: 2,
                    scrollLock: false
                }
            }
        ]
      });

    //   new Glider(document.querySelector('.project-glider'), {
    //     new Glider(document.querySelector('.glider'), {
    //         slidesToShow: 1,
    //         draggable: true,
    //         arrows: {
    //           prev: '.glider-prev',
    //           next: '.glider-next'
    //         }
    //       });
    //   });
  })