  let currentIndex = 0;

  function scrollCarousel(direction) {
    const carousel = document.getElementById('toolCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const itemWidth = carousel.offsetWidth;

    currentIndex += direction;

    // 🔁 Loop circular
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
      currentIndex = 0;
    }

    carousel.scrollTo({
      left: currentIndex * itemWidth,
      behavior: 'smooth'
    });
  }



