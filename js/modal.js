 export const modal = () => {

     const openBtn = document.getElementById('open-modal');
     const closeBtn = document.getElementById('closeBtn');
     const modalWindow = document.querySelector('.modal');
     const page = document.querySelector('.page');
     const screenOverlay = document.querySelector('.fullscreen-overlay');
     const mainContent = document.querySelector('.main-content');

     openBtn.addEventListener('click', () => {
         modalWindow.style.display = 'block';
         page.classList.add('page--open');
         screenOverlay.style.display = 'block';
         mainContent.style.display = 'none';
     });

     closeBtn.addEventListener('click', () => {
         modalWindow.style.display = 'none';
         page.classList.remove('page--open');
         screenOverlay.style.display = 'none';
         mainContent.style.display = 'block';
     });


 }