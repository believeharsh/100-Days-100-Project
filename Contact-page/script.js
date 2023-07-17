const form_main = document.getElementById('form-main');
const main = document.querySelector('.main');

form_main.addEventListener('submit', (e) => {
	e.preventDefault();
	main.innerHTML = '<p>Thanks for your message. <br /> I\'ll get back to you soon. 😃</p>';
});