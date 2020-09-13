function showImage(image, imageDescription, targetWidth, targetHeight) {
  var imageView = document.querySelector('.image-view');
  var imageWrapper = imageView.querySelector('.image');
  var imageDescription = imageWrapper.querySelector('.image-description');
  var imageClose = imageWrapper.querySelector('.close');

  imageView.classList.remove('active');
  imageView.classList.add('active');

  var el = document.createElement('img');
  el.src = image.src;
  el.width = targetWidth;
  el.height = targetHeight;
  el.classList.add('image-view-img');

  imageWrapper.appendChild(el);
  imageDescription.innerHTML = imageDescription.innerHTML;
  imageClose.addEventListener('click', () => hideImage(el));

  onClickOutsideElement(el);
}

function hideImage(image) {
  var imageView = document.querySelector('.image-view');
  var imageWrapper = imageView.querySelector('.image');
  var imageClose = imageWrapper.querySelector('.close');

  image.remove();
  imageView.classList.remove('active');
  imageClose.removeEventListener('click', hideImage);
}

function onClickOutsideElement(el) {
  document.querySelector('.image-view').addEventListener('click', (e) => {
    hideImage(el);
  });
}

function onLoad() {
  // Initialize hero image.
  var heroImage = document.querySelector('section.hero .hero-image > img');
  var heroImageDescription = document.querySelector('section.hero .hero-image > p').innerHTML || '';

  heroImage.addEventListener('click', () => showImage(heroImage, heroImageDescription, 1200, 600));
}

onLoad();