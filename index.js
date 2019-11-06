const addToList = document.querySelector('.add-to-list');
const textBox = document.querySelector('.text-box');
const out = document.querySelector('.out');

addToList.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            out.innerHTML = clientData.name;
        }
    }
    xhr.open('POST', 'api/todo.json', true);
    xhr.send();
})