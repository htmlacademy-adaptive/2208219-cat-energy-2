/* в этот файл добавляет скрипты*/
const button = document.querySelector('.header__toogle');
const nav = document.querySelector('.navigation');
const header = document.querySelector('.header');
const promo = document.querySelector('.promo');
const OPEN = 'header__toogle--open';
const CLOSE = 'header__toogle--close';
const HIDDEN = 'hidden';
const ABSOLUTE = 'absolute';
const NOJS = 'no-js';
const viewportWidth = window.innerWidth;

button.addEventListener('click', () => {
  if (button.classList.contains(OPEN)) {
    button.classList.remove(OPEN);
    button.classList.add(CLOSE);
    nav.classList.remove(HIDDEN);
  } else {
    button.classList.remove(CLOSE);
    button.classList.add(OPEN);
    nav.classList.add(HIDDEN);
  }
});

if (viewportWidth < 768) {
  nav.classList.add(HIDDEN);
  button.classList.remove(HIDDEN);
  header.classList.add(ABSOLUTE);
  if (promo) {
    promo.classList.add(NOJS);
  }
}

const listItems = document.querySelectorAll('.adventures__item');
const styleSheet = document.styleSheets[0];
listItems.forEach((item, index) => {
  const number = index + 1;
  styleSheet.insertRule(`
          .adventures__item:nth-child(${number})::before {
              content: '${number}';
          }
      `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
          @media screen and (max-width: 767px) {
              .adventures__item:nth-child(${number})::before {
                  content: none;
              }
          }
      `, styleSheet.cssRules.length);
});


const slider = document.querySelector('.example-cat__slider');
const buttonSlider = document.querySelector('.example-cat__button-slider');
const slideOne = document.querySelector('.example-cat__slide--one');
const slideTwo = document.querySelector('.example-cat__slide--two');


let isDragging = false;

function updateSlider(x) {
  const rect = slider.getBoundingClientRect();
  let offsetX = x - rect.left;
  offsetX = Math.max(0, Math.min(offsetX, rect.width));

  slideOne.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
  slideTwo.style.clipPath = `inset(0 0 0 ${offsetX}px)`;
  buttonSlider.style.left = `${offsetX}px`;
  // console.log(offsetX, 'ofsetX');
  // console.log(rect);
}

function startDrag(event) {
  isDragging = true;
  event.preventDefault();
  updateSlider(getX(event));
}

function drag(event) {
  if (isDragging) {
    updateSlider(getX(event));
  }
}

function endDrag() {
  isDragging = false;
}

function getX(event) {
  return event.touches ? event.touches[0].clientX : event.clientX;
}

if (buttonSlider) {
  buttonSlider.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);

  buttonSlider.addEventListener('touchstart', startDrag);
  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', endDrag);

}
