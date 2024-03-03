const CONTACT_FORM_ID = 'contact-form';
const NAME_FIELD_ID = 'contact-name';
const EMAIL_FIELD_ID = 'contact-email';
const MESSAGE_FIELD_ID = 'contact-message';

const ERROR_FIELD_CLASS = 'contact-form__error_field';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(CONTACT_FORM_ID);
    form.addEventListener('submit', event => {
        event.preventDefault();
        const nameField = document.getElementById(NAME_FIELD_ID);
        const emailField = document.getElementById(EMAIL_FIELD_ID);
        const messageField = document.getElementById(MESSAGE_FIELD_ID);

        nameField.classList.remove(ERROR_FIELD_CLASS);
        emailField.classList.remove(ERROR_FIELD_CLASS);
        messageField.classList.remove(ERROR_FIELD_CLASS);

        let hasError = false;
        if (!form.name.value)
        {
            nameField.classList.add(ERROR_FIELD_CLASS);
            hasError = true;
        }
        if (!form.email.value)
        {
            emailField.classList.add(ERROR_FIELD_CLASS);
            hasError = true;
        }
        if (!form.message.value)
        {
            messageField.classList.add(ERROR_FIELD_CLASS);
            hasError = true;
        }

        if (!hasError)
        {
            alert('Спасибо за ваше сообщение!');
            window.location.replace('index.html');
        }
        else
        {
            alert('Пожалуйста, заполните все поля.');
        }
    })
});
