const successMessage = document.querySelector('p#success');
const newsletterForm = document.querySelector('form#newsletter');

function onSubscribe(timeout) {
	newsletterForm.style['display'] = 'none';
	successMessage.style['display'] = 'unset';
	setTimeout(function() {location = '/';}, timeout);
}
