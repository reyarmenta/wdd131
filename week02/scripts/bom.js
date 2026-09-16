const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim != "") {
        // create li element that hold each entry's chapter title
        const li = document.createElement('li');

        li.textContent = input.value; 

        // create a delete button
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);

        list.append(li);

        input.value = '';
    }

    input.focus();
})

