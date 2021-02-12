function solve() {
    let buttonElement = document.getElementsByClassName('form-control')[3].firstElementChild;

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let nameElement = document.getElementsByTagName('input')[0];
        let dateElement = document.getElementsByTagName('input')[1];
        let moduleElement = document.getElementsByTagName('select')[0];

        if (!nameElement.value || !dateElement.value || moduleElement.value == 'Select module') {
            return;
        }

        let date = dateElement.value;
        date = date.replace('-', '/');
        date = date.replace('T', ' - ');
        date = date.replace('-', '/');

        let divModuleElement = document.createElement('div');
        divModuleElement.className = 'module';

        let h3Element = document.createElement('h3');
        h3Element.textContent = `${moduleElement.value.toUpperCase()}-MODULE`;

        let ulElement = document.createElement('ul');

        let liElement = document.createElement('li');
        liElement.className = 'flex';

        let h4Element = document.createElement('h4');
        h4Element.textContent = `${nameElement.value} - ${date}`;

        let btnInLiElement = document.createElement('button');
        btnInLiElement.className = 'red';
        btnInLiElement.textContent = 'Del';

        liElement.appendChild(h4Element);
        liElement.appendChild(btnInLiElement);

        // let data = Array.from(document.getElementsByClassName('module'));

        let x = Array.from(document.querySelectorAll('h3'));

        if (x.find(e => e.textContent == h3Element.textContent)) {
            let node = x.find(e => e.textContent == h3Element.textContent)
            let prnt = node.parentElement.querySelector('ul');
            prnt.appendChild(liElement);
            liElement.appendChild(h4Element);
            liElement.appendChild(btnInLiElement);


            sortList(ulElement)
        } else {
            ulElement.appendChild(liElement);

            divModuleElement.appendChild(h3Element);
            divModuleElement.appendChild(ulElement);

            let mainDivElement = document.getElementsByClassName('modules')[0];
            mainDivElement.appendChild(divModuleElement);
        }

        // for (let line of data) {
        //     let h3El = line.firstElementChild;

        //     if (h3El.textContent == h3Element.textContent) {
        //         let currentParent = h3El.parentElement;
        //         currentParent.lastElementChild.appendChild(liElement);

        //         sortList(ulElement)

        //     } else {
        //         ulElement.appendChild(liElement);

        //         divModuleElement.appendChild(h3Element);
        //         divModuleElement.appendChild(ulElement);

        //         let mainDivElement = document.getElementsByClassName('modules')[0];
        //         mainDivElement.appendChild(divModuleElement);
        //     }
        // }



        btnInLiElement.addEventListener('click', (e) => {
            let liElementToRemove = e.currentTarget.parentElement;

            if (!liElementToRemove.nextElementSibling && !liElementToRemove.previousElementSibling) {
                liElementToRemove.parentElement.parentElement.remove();
            } else {
                liElementToRemove.remove();
            }

        });
    });

    function sortList(ul) {
        let ux = document.getElementsByTagName('ul')[0];
        console.log(ux);

        Array.from(ux.getElementsByTagName('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ul.appendChild(li));
    }
};