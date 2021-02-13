function solve() {
    const taskInputElement = document.getElementById('task');
    const descriptionInputElement = document.getElementById('description');
    const dateInputElement = document.getElementById('date');

    const sectionElements = document.getElementsByTagName('section');

    const addButton = document.getElementById('add');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (taskInputElement.value == '' || descriptionInputElement.value == '' || dateInputElement == '') {
            return;
        }

        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = taskInputElement.value;

        const pDescriptionElement = document.createElement('p');
        pDescriptionElement.textContent = `Description: ${descriptionInputElement.value}`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Due Date: ${dateInputElement.value}`;

        const divElement = document.createElement('div');
        divElement.className = 'flex';

        const startBtnElement = document.createElement('button');
        startBtnElement.className = 'green';
        startBtnElement.textContent = 'Start';

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.className = 'red';
        deleteBtnElement.textContent = 'Delete';

        deleteBtnElement.addEventListener('click', toBeDeleted);
        startBtnElement.addEventListener('click', () => {
            articleElement.lastChild.firstChild.remove();

            const finishBtnElement = document.createElement('button');
            finishBtnElement.className = 'orange';
            finishBtnElement.textContent = 'Finish';

            finishBtnElement.addEventListener('click', () => {
                articleElement.lastChild.remove();
                sectionElements[3].lastElementChild.appendChild(articleElement);
            });

            articleElement.lastChild.appendChild(finishBtnElement);

            sectionElements[2].lastElementChild.appendChild(articleElement);
        });

        divElement.appendChild(startBtnElement);
        divElement.appendChild(deleteBtnElement);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDescriptionElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);

        sectionElements[1].lastElementChild.appendChild(articleElement);
    });

    function toBeDeleted(e) {
        e.target.parentElement.parentElement.remove();
    }
}