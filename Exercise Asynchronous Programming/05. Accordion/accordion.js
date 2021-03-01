(async function () {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const data = await response.json();

    const accordionEl = document.getElementById("main");
    accordionEl.innerHTML = "";

    data.forEach(title => {
        const article = createEl("div", "", { class: "accordion" },
            createEl("div", "", { class: "head" },
                createEl("span", title.title),
                createEl("button", "More", { class: "button", id: title._id })));

        accordionEl.appendChild(article);
    });
})();

function createEl(type, text, attributes = {}, ...elements) {
    const output = document.createElement(type);

    if (text) {
        output.textContent = text;
    }

    if (attributes) {
        Object.keys(attributes).forEach(a => {
            output.setAttribute(a, attributes[a]);
        });
    }

    if (attributes.class == "button") {
        output.addEventListener("click", showInfo);
    }

    elements.forEach(e => output.appendChild(e));

    return output;
}

async function showInfo(e) {
    const buttonEl = e.target;

    if (buttonEl.textContent == "More") {
        buttonEl.textContent = "Less";

        const articleRes = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${buttonEl.id}`);
        const articleInfo = await articleRes.json();

        const extra = createEl("div", "", { class: "extra" },
            createEl("p", articleInfo.content, {}));

        extra.style.display = "block";

        buttonEl.parentElement.parentElement.appendChild(extra);

    } else {
        buttonEl.textContent = "More";
        buttonEl.parentElement.nextElementSibling.remove();
    }
}