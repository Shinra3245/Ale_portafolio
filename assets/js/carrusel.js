
  let currentIndex = 0;

  function scrollCarousel(direction) {
    const carousel = document.getElementById('toolCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    // Restringe el índice dentro del rango
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalItems) currentIndex = totalItems - 1;

    const itemWidth = carousel.offsetWidth;
    carousel.scrollTo({
      left: currentIndex * itemWidth,
      behavior: 'smooth'
    });
  }



