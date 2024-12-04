// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);

// Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('All fields are required!');
    return false;
  }
  alert('Thank you for your message!');
  return true;
}

// Initialize Slider
showSlide();