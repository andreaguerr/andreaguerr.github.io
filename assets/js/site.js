(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  if (!button || !navigation) return;

  document.documentElement.classList.add('js');
  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      button.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
  const desktop = window.matchMedia('(min-width: 1040px)');
  desktop.addEventListener('change', () => closeMenu());
})();
