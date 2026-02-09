const modal = () => {

    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.getElementById('closeBtn');
    const modal = document.querySelector('.modal');
    const page = document.querySelector('.page');
    const postBtn = document.querySelector('.modal__button');
    const stepModal = document.getElementById('step-two');


    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        page.classList.add('page--open');

    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        page.classList.remove('page--open');
    })


}

modal();