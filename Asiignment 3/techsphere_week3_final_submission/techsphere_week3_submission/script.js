const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim() || 'there';
  formMessage.textContent = `Thanks, ${name}! Your demo request has been received.`;
  form.reset();
});
