const menuOpenButton = document.querySelector('#menu_open');
const menuCloseButton = document.querySelector('#menu_close');
const menuContent = document.querySelector('#menu_content');
const overlay = document.querySelector('#overlay');

const handlerCloseMenu = () => {
    menuContent.classList.remove('show');
    overlay.classList.remove('show');
};

const handlerShowMenu = () => {
    menuContent.classList.add('show');
    overlay.classList.add('show');
};

menuOpenButton.addEventListener('click', handlerShowMenu);

menuCloseButton.addEventListener('click', handlerCloseMenu);

overlay.addEventListener('click', handlerCloseMenu);
