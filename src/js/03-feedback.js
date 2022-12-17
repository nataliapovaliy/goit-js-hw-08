import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const formEmail = document.querySelector('[name="email"]');
const formMess = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

localStrgInput();

function localStrgInput() {
    const localStrgInputGet = localStorage.getItem('feedback-form-state');
    if (localStrgInputGet) {
        const dataFromStorage = JSON.parse(localStrgInputGet);
        for (const el of form.children) {
            formEmail.value = dataFromStorage.email
            formMess.value = dataFromStorage.mess
        }
    }
}

function onInput(event) {
    const obj = {
        email: formEmail.value,
        mess: formMess.value,
    }
    
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onSubmit(event) {
    event.currentTarget.reset();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.removeItem('feedback-form-state');    
}


// Відстежуй на формі подію input, і щоразу записуй у локальне сховище 
// об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені
// дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, 
// а також виводь у консоль об'єкт з полями
// email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.