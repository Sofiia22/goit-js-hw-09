const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  form.email.value = parsedData.email || '';
  form.message.value = parsedData.message || '';

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
