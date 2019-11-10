const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');
const outTask = document.querySelector('.out-task');



addToList.addEventListener('click', () => {

    const formData = new FormData(document.forms.myForm);

    const dataFromInput = textBox.value;
        const dataToSend = {
        "item": dataFromInput
    };

    let json = JSON.stringify(dataToSend)

    console.log(json);

	const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

	xhr.open('POST', 'api/todo.json', true);

	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.responseType = 'json';

	xhr.send(json);

	 xhr.onload = () => {
         out.innerHTML = xhr.response.item
    };
})

