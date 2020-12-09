window.addEventListener('load', function(){

      function runGlider(callback) {

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
        console.log(1);
        callback();
      }

    function showCards() {
        console.log(2);
        var cards = document.getElementsByClassName("post-card");
        [].forEach.call(cards, function(el) {
            el.classList.add("show");
            el.classList.remove("hide");
        });
    }

    runGlider(showCards);

  })