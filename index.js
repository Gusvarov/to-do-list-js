const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');
const outTask = document.querySelector('.out-task');



addToList.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    const dataFromInput = textBox.value;
    const dataToSend = {
        "item": dataFromInput,
    };

   // let formData = new FormData([document.forms]); // создаём объект, по желанию берём данные формы <form>




    xhr.open('POST', 'api/todo.json', true);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.responseType = 'json';

    xhr.send(dataToSend);

    xhr.onload = () => alert(xhr.response);
})

