const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');
const outTask = document.querySelector('.out-task');



addToList.addEventListener('click', () => {

    /*const xhr = new XMLHttpRequest();

            const dataFromInput = textBox.value;
            const dataToSend = {
                item: dataFromInput,
            };
            const clientData = JSON.parse(xhr.responseText);
            outTask.innerHTML = `<div>${cData.item}</div>`*/


    const xhr = new XMLHttpRequest();

    const dataFromInput = textBox.value;
    const dataToSend = {
        item: dataFromInput,
    };

    xhr.open('POST', 'api/todo.json', true);

    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send();

    // тело ответа {"сообщение": "Привет, мир!"}
    xhr.onload = function() {
    let responseObj = xhr.response;
    alert(responseObj.name); // Привет, мир!
    };

})

