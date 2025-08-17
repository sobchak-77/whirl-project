// -------------------
// --- BURGER MENU ---
// -------------------

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const body = document.querySelector('.page');
const menuItems = document.querySelectorAll('.h-menu__link');
const headerBtns = document.querySelectorAll('.mobile-menu__btn');

function clickOnEl(el) {
  el.addEventListener('click', () => {
    if (header.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function closeMenu() {
  header.classList.remove('is-open');
  body.classList.remove('stop-scroll');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
}

burger.addEventListener('click', () => {
  header.classList.toggle('is-open');
  body.classList.toggle('stop-scroll');

  if (header.classList.contains('is-open')) {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
  } else {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  }
});

menuItems.forEach((item) => clickOnEl(item));
headerBtns.forEach((btn) => clickOnEl(btn));

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    closeMenu();
  }
});

// -----------------
// --- ACCORDION ---
// -----------------

const activeClass = 'is-active';
const accBtns = document.querySelectorAll('.accordion__btn');
accBtns.forEach((btnEl) => {
  btnEl.addEventListener('click', (ev) => {
    btnEl.classList.toggle(activeClass);

    for (const btnEl of accBtns) {
      if (btnEl.matches(`.${activeClass}`) && btnEl !== ev.target) {
        btnEl.classList.remove(activeClass);
      }
    }
  });
});

// ----------------------
// --- SUBSCRIBE FORM ---
// ----------------------

const input = document.querySelector('.sub-form__input');
const inputIcon = document.querySelector('.sub-form__btn-icon');
const formBtn = document.querySelector('.sub-form__btn');

// --- focus ---

input.addEventListener('focus', () => {
  inputIcon.classList.add('is-active-icon');
});

input.addEventListener('blur', () => {
  inputIcon.classList.remove('is-active-icon');
});

// --- hover ---

input.addEventListener('mouseenter', () => {
  inputIcon.classList.add('is-active-icon');
});

input.addEventListener('mouseleave', () => {
  inputIcon.classList.remove('is-active-icon');
});

// ------------------
// --- ANIMATIONS ---
// ------------------

new WOW().init();