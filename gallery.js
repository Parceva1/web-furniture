// Получаем необходимые элементы
const gallery = document.querySelector('.gallery');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Количество изображений в галерее
const totalImages = gallery.querySelectorAll('img').length;

// Изначальный индекс текущего изображения
let currentImageIndex = 0;

// Функция для обновления отображения текущего изображения
const showImage = (index) => {
  // Скрываем все изображения
  gallery.querySelectorAll('img').forEach(img => {
    img.style.display = 'none';
  });

  // Показываем текущее изображение
  gallery.querySelectorAll('img')[index].style.display = 'block';
};

// Показываем первое изображение при загрузке страницы
showImage(currentImageIndex);

// Обработчик для кнопки "Предыдущее изображение"
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
});

// Обработчик для кнопки "Следующее изображение"
nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
});
