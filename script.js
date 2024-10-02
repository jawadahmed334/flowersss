// Select all flowers
const flowers = document.querySelectorAll('.flower');

// Add click event to each flower
flowers.forEach(flower => {
  flower.addEventListener('click', () => {
    flower.classList.toggle('blooming');
  });
});
