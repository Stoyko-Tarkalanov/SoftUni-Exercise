function solve() {
    let openSectionElement = document.getElementsByTagName('section')[1];
    let progresSectionElement = document.getElementsByTagName('section')[2];
    let completeSectionElement = document.getElementsByTagName('section')[3];

    let addButnElement = document.getElementById('add');

    addButnElement.addEventListener('click', e => {
        e.preventDefault();

        let inputTaskElement = document.getElementById('task');
        let inputDescriptionElement = document.getElementById('description');
        let inputDateElement = document.getElementById('date');

        if (inputTaskElement.value == '' || inputDescriptionElement.value == '' || inputDateElement.value == '') {
            return;
        }

        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.innerText = inputTaskElement.value;
        let pDescElement = document.createElement('p');
        pDescElement.innerText = `Description: ${inputDescriptionElement.value}`;
        let pDateElement = document.createElement('p');
        pDateElement.innerText = `Due Date: ${inputDateElement.value}`;

        let divElement = document.createElement('div');
        divElement.className = 'flex';
        let btnStart = document.createElement('button');
        btnStart.className = 'green';
        btnStart.innerText = 'Start';
        let btnDelete = document.createElement('button');
        btnDelete.className = 'red';
        btnDelete.innerText = 'Delete';

        btnDelete.addEventListener('click', deleteArticle);
        btnStart.addEventListener('click', e => {
            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.innerText = 'Finish';

            btnFinish.addEventListener('click', e => {
                articleElement.lastElementChild.remove();
                completeSectionElement.lastElementChild.appendChild(articleElement);
            });

            articleElement.lastElementChild.children[0].remove();
            articleElement.lastElementChild.appendChild(btnFinish);
            progresSectionElement.lastElementChild.appendChild(articleElement);
        });

        divElement.appendChild(btnStart);
        divElement.appendChild(btnDelete);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDescElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);

        openSectionElement.lastElementChild.appendChild(articleElement);

        inputTaskElement.value = '';
        inputDescriptionElement.value = '';
        inputDateElement.value = '';
    });

    function deleteArticle(e) {
        e.target.parentElement.parentElement.remove();
    }
}