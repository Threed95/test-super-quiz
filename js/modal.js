const modal = () => {

    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.getElementById('closeBtn');
    const modal = document.querySelector('.modal');
    const page = document.querySelector('.page');
    const screenOverlay = document.querySelector('.fullscreen-overlay');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        page.classList.add('page--open');
        screenOverlay.style.display = 'block';

    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        page.classList.remove('page--open');
        screenOverlay.style.display = 'none';
    })


}

modal();