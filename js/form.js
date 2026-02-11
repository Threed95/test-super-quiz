 export const form = () => {
     const formElement = document.querySelector('.form');
     const textArea = document.querySelector('.form__textarea');
     const parentItemTextArea = document.querySelector('.form__add-file');
     const errorIconTextArea = document.querySelector('.form__error');
     const popup = document.querySelector('.second-step');
     const mainContent = document.querySelector('.main-content');
     const modal = document.querySelector('.modal');

     const firstNameInput = document.querySelector('input[name="firstName"]');
     const lastNameInput = document.querySelector('input[name="lastName"]');


     const checkAllFields = () => {
         let allValid = true;

         if (!textArea.checkValidity()) {
             parentItemTextArea.classList.add('form__add-file--error');
             errorIconTextArea.style.display = 'block';
             textArea.classList.add('form__textarea--error-red');
             allValid = false;
         } else {
             parentItemTextArea.classList.remove('form__add-file--error');
             errorIconTextArea.style.display = 'none';
             textArea.classList.remove('form__textarea--error-red');
         }

         if (!firstNameInput || !firstNameInput.checkValidity()) {
             allValid = false;
         }

         if (!lastNameInput || !lastNameInput.checkValidity()) {
             allValid = false;
         }

         return allValid;
     };

     textArea.addEventListener('input', function() {
         if (this.checkValidity()) {
             parentItemTextArea.classList.remove('form__add-file--error');
             errorIconTextArea.style.display = 'none';
             textArea.classList.remove('form__textarea--error-red');
         } else {
             parentItemTextArea.classList.add('form__add-file--error');
             errorIconTextArea.style.display = 'block';
             textArea.classList.add('form__textarea--error-red');
         }
     });

     formElement.addEventListener('submit', function(event) {
         event.preventDefault();
         if (checkAllFields()) {
             popup.style.display = 'flex';
             mainContent.style.display = 'none';
             modal.style.display = 'none';
         } else {
             console.log('Форма содержит ошибки');
         }
     });
 };