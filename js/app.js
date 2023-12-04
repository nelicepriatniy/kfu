const programSwiper = new Swiper('.program-slider', {
    speed: 400,
    navigation: {
        prevEl: '.program-arr-prev',
        nextEl: '.program-arr-next',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
      }
    }
});
const speacSwiper = new Swiper('.speac-slider', {
    speed: 400,
    navigation: {
        prevEl: '.speac-arr-prev',
        nextEl: '.speac-arr-next',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
      }
    }
});



//закрытие всех попапов

const closePopups = document.querySelector('.closePopups'),
      popups = document.querySelectorAll('.popup');

if(closePopups) {
    closePopups.onclick = ()=>{
        closePopups.classList.remove('active')
        if(popups.length > 0) {
            for(let i = 0; popups.length > i; i++) {
                popups[i].classList.remove('active')
            }
        }
    }
}


//открытие попапа с формой

let popupBtns = document.querySelectorAll('.formPopupBtm')
let popupBlock = document.querySelector('.formPopup')

if (popupBtns.length > 0) {
    for(let i = 0; popupBtns.length > i; i++) {
        popupBtns[i].onclick = ()=>{
            if(popupBtns[i].getAttribute('data-tema')) {
                document.getElementById('meropr-select').value = (popupBtns[i].getAttribute('data-tema'));
            }
            popupBlock.classList.toggle('active');
            closePopups.classList.add('active')
        }
    }
}