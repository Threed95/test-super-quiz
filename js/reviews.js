 export const reviews = () => {
     const track = document.querySelector('.reviews__track');
     const nextBtn = document.querySelector('.js-reviews-next');
     const prevBtn = document.querySelector('.js-reviews-prev');

     let currentIndex = 0;

     function updateSlider() {
         const card = document.querySelector('.review-card');
         const cardWidth = card.offsetWidth;
         const gap = 20;

         const baseOffset = (track.offsetWidth * 0.125) - (gap / 2);

         const totalOffset = baseOffset + currentIndex * (cardWidth + gap);

         track.style.transform = `translateX(-${totalOffset}px)`;
     }

     nextBtn.addEventListener('click', () => {
         const maxIndex = track.children.length - 3;
         if (currentIndex < maxIndex) {
             currentIndex++;
             updateSlider();
         }
     });

     prevBtn.addEventListener('click', () => {
         if (currentIndex > 0) {
             currentIndex--;
             updateSlider();
         }
     });

     window.addEventListener('load', updateSlider);

     window.addEventListener('resize', updateSlider);

 }