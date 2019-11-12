const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');
const outTask = document.querySelector('.out-task');



addToList.addEventListener('click', () => {

    //const formData = new FormData(document.forms.myForm);

    const dataFromInput = textBox.value;
        const dataToSend = {
        "item": dataFromInput
    };

    let json = JSON.stringify(dataToSend)

    console.log(json);

	const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

	xhr.open('POST', 'api/todo.js', true);

	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.send(json);

    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            xhr.onload = () => {
                obj = JSON.parse(json);
                out.innerHTML = obj.item;
                // const xhr2 = new XMLHttpRequest();
                // xhr2.open('GET', 'api/todo.js', true);
                // xhr2.send();
                // xhr2.onload = () => {
                //     console.log('2<-',xhr2.response)
                //     out.innerHTML = xhr2.response;
                // }
            }
        }
    };
})

