// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};


let savedFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

refs.form.addEventListener('input', throttle(onFormInput, 500));
populateFormData();
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  if (!savedFormData) {
    const formData = {};
    formData[e.target.name] = e.target.value;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  } else {
    const formData = { ...savedFormData };
    formData[e.target.name] = e.target.value;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  try {
    console.log(savedFormData);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  savedFormData = '';

  e.target.reset();
}

function populateFormData() {
  if (savedFormData) {
    refs.input.value = savedFormData.email || '';
    refs.textarea.value = savedFormData.message || '';
  }
}
