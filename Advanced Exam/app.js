function solve() {
  let inputAuthor = document.getElementById('creator');
  let inputTitle = document.getElementById('title');
  let inputCategory = document.getElementById('category');
  let textArea = document.getElementById('content');
  let btnCreate = document.getElementsByClassName('btn create')[0];
  let appendSectionElement = document.getElementsByTagName('section')[1];
  let archiveSection = document.getElementsByClassName('archive-section')[0];

  btnCreate.addEventListener('click', (e) => {
    e.preventDefault();

    let articleElement = document.createElement('article');
    let h1Element = document.createElement('h1');
    h1Element.textContent = inputTitle.value;

    let pCategoryElement = document.createElement('p');
    pCategoryElement.innerHTML = `Category: <strong>${inputCategory.value}</strong>`;

    let pCreatorElement = document.createElement('p');
    pCreatorElement.innerHTML = `Creator: <strong>${inputAuthor.value}</strong>`;

    let textInfo = document.createElement('p');
    textInfo.textContent = textArea.value;

    let divElement = document.createElement('div');
    divElement.className = 'buttons';

    let btnDel = document.createElement('button');
    btnDel.className = 'btn delete';
    btnDel.textContent = 'Delete';

    btnDel.addEventListener('click', (e) => {
      e.currentTarget.parentElement.parentElement.remove();
    });

    let btnArch = document.createElement('button');
    btnArch.className = 'btn archive';
    btnArch.textContent = 'Archive';

    btnArch.addEventListener('click', (e) => {
      // let neededElemH1 = appendSectionElement.getElementsByTagName('h1')[0];
      let liElem = document.createElement('li');
      // liElem.textContent = neededElemH1.textContent;
      liElem.textContent = h1Element.textContent;

      archiveSection.lastElementChild.appendChild(liElem);

      e.currentTarget.parentElement.parentElement.remove();

      let olElementsArr = Array
        .from(archiveSection.lastElementChild.getElementsByTagName('li'))
        .sort((a, b) => a.innerText.localeCompare(b.innerText));

      while (archiveSection.lastElementChild.firstChild) {
        archiveSection.lastElementChild.firstChild.remove();
      }

      for (let line of olElementsArr) {
        archiveSection.lastElementChild.appendChild(line);
      }

    });

    // inputAuthor.value = '';
    // inputTitle.value = '';
    // inputCategory.value = '';
    // textArea.value = '';

    divElement.appendChild(btnDel);
    divElement.appendChild(btnArch);

    articleElement.appendChild(h1Element);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pCreatorElement);
    articleElement.appendChild(textInfo);
    articleElement.appendChild(divElement);

    appendSectionElement.appendChild(articleElement);
  });
}
// Unexpected error: expected
// '<h2>Archive</h2><ol><li>Arrays</li><li>Arrays</li></ol>' to equal 


// '<h2>Archive</h2>
// <ol>
// <li>Arrays</li>
// <li>MyArticle</li>
// </ol>


