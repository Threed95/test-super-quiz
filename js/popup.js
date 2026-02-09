const popup = () => {
    const popupBtn = document.querySelector('.second-step__closeBtn');
    const popup = document.querySelector('.second-step');
    const mainContent = document.querySelector('.main-content');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        location.reload();
    })

    document.querySelector('.second-step__button').addEventListener('click', function() {
        location.reload();
    });
}

popup();