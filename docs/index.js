import toComicSans from '../index.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toComicSans();
    });
  });
});
