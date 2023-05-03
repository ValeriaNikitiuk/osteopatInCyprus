const galleryButton = document.querySelector('.gallery-open');
const galleryContainer = document.querySelector('#gallery');
const modalClose = document.querySelector('.modal-close');



galleryButton.addEventListener('click', function() {
  galleryContainer.style.display = 'block';
});

galleryContainer.addEventListener('click', function (event) {
    if (event.target === galleryContainer) {
      galleryContainer.style.display = 'none';
       if (event.target === galleryContainer) {
    return;
  }
}
});

modalClose.addEventListener('click', function() {
  galleryContainer.style.display = 'none';
   
});



// скрол кнопка в галерее


window.onload = () => {
  window.onscroll = function (e) {
    let winY = window.scrollY;
    if (winY > 200) {
      ProgressBar();
      scrollbarAnimation();
      winY = null;
    }
  };
  const scrollBtn = document.querySelector('.isShowBtn')
  window.onscroll = () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.remove('isHiden');
    } else {
      scrollBtn.classList.add('isHiden');
    }
  }

  scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

};


