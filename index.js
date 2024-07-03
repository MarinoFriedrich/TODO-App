let polje = document.getElementById('polje');
let bitnoButton = document.getElementById('bitno-button');
let srednjeButton = document.getElementById('srednje-button');
let nebitnoButton = document.getElementById('nebitno-button');
let lista = document.getElementById('lista');

bitnoButton.addEventListener('click', () => {
    addListItem('bitno');
});

srednjeButton.addEventListener('click', () => {
    addListItem('srednje');
});

nebitnoButton.addEventListener('click', () => {
    addListItem('nebitno');
});

function addListItem(importance) {
    let inputValue = polje.value;
    if (inputValue !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listItem.dataset.importance = importance;

        switch (importance) {
            case 'bitno':
                listItem.style.color = 'red';
                break;
            case 'srednje':
                listItem.style.color = '#FFA500';
                break;
            case 'nebitno':
                listItem.style.color = 'green';
                break;
        }

        listItem.addEventListener('click', () => {
            listItem.remove(); 
        });

        lista.appendChild(listItem);
        polje.value = '';
        sortList();
    }
}

function sortList() {
    let listItems = lista.children;
    let sortedItems = Array.prototype.slice.call(listItems);
    sortedItems.sort((a, b) => {
        if (a.dataset.importance === 'bitno') return -1;
        if (b.dataset.importance === 'bitno') return 1;
        if (a.dataset.importance === 'srednje') return -1;
        if (b.dataset.importance === 'srednje') return 1;
        return 0;
    });

    lista.innerHTML = '';
    sortedItems.forEach(item => lista.appendChild(item));
}