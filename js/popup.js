 export const popup = () => {
     const popupBtn = document.querySelector('.second-step__closeBtn');
     const popup = document.querySelector('.second-step');


     popupBtn.addEventListener('click', () => {
         popup.style.display = 'none';
         location.reload();
     })

     document.querySelector('.second-step__button').addEventListener('click', function() {
         location.reload();
     });
 }