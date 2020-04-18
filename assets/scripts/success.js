let newsletterForm = document.querySelector('form#newsletter');
let successMessage = document.querySelector('p#success');

function onNewsletterSubmit() {
	newsletterForm.style['display'] = 'none';
	successMessage.style['display'] = 'unset';
	setTimeout(function() {location = '/';}, 3000);
}

