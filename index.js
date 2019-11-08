const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');
const outTask = document.querySelector('.out-task');



addToList.addEventListener('click', (dataToSend) => {
    const xhr = new XMLHttpRequest();

    const dataFromInput = textBox.value;
    const dataToSend = {
        item: dataFromInput,
    };

    const json = JSON.stringify(dataToSend);

    xhr.open('POST', 'api/todo.json', true);

    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send();


})

