const getRecipesList = async () => {
    try {
      const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
      const main = document.querySelector('main');

      if (response.ok == false) {
        throw new Error(response.statusText);
      }

      const recipes = await response.json();
      main.querySelector('p').remove();

      Object.values(recipes)
        .map(createPreview)
        .forEach(r => main.appendChild(r));
    } catch (err) {
      alert(err.message);
    }
  };
  
  const getRecipeDetails = async (id, preview) => {
  
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const recipe = await response.json();
  
    const result = `
    <h2>${recipe.name}</h2>
      <div class="band">
        <div class="thumb">
          <img src="${recipe.img}">
                  </div>
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="description">
          <h3>Preparation:</h3>
          ${recipe.steps.map(s => `<p>${s}</p>`).join('')}
        </div>
    `;
  
    const articleElement = document.createElement('article');
    articleElement.insertAdjacentHTML('beforeend', result);
    articleElement.querySelector('h2').onclick = () => toggleR();
  
    preview.replaceWith(articleElement);
  
    function toggleR() {
      articleElement.replaceWith(preview);
    }
  }
  const createPreview = (recipe) => {
  
    const result = `
      <div class="title">
        <h2>${recipe.name}</h2>
      </div>
      <div class="small">
        <img src="${recipe.img}">
      </div>`;
  
    const articleElement = document.createElement('article');
    articleElement.classList.add('preview');
    articleElement.insertAdjacentHTML('beforeend', result);
  
    articleElement.onclick = () => getRecipeDetails(recipe._id, articleElement);
  
    return articleElement;
  }
  
  window.onload = () => {
    getRecipesList();
  };