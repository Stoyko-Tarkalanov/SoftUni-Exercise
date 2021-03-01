async function lockedProfile() {
    try {
        const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
        const profiles = await response.json();

        Object
            .values(profiles)
            .forEach((p, i) => {
                const result = createEl("div", "", { class: "profile" },
                    createEl("img", "", { class: "userIcon", src: "./iconProfile2.png" }),
                    createEl("label", "Lock"),
                    createEl("input", "", { type: "radio", name: `user${i + 1}Locked`, value: "lock", checked: true }),
                    createEl("label", "Unlock"),
                    createEl("input", "", { type: "radio", name: `user${i + 1}Locked`, value: "unlock" }),
                    createEl("br"),
                    createEl("hr"),
                    createEl("label", "Username"),
                    createEl("input", "", { type: "text", name: `user${i + 1}Username`, value: p.username, disabled: true, readonly: true }),
                    createEl("div", "", { id: `user${i + 1}HiddenFields`, style: "display:none" },
                        createEl("hr"),
                        createEl("label", "Email:"),
                        createEl("input", "", { type: "email", name: `user${i + 1}Email`, value: p.email, disabled: true, readonly: true }),
                        createEl("label", "Age:"),
                        createEl("input", "", { type: "email", name: `user${i + 1}Age`, value: p.age, disabled: true, readonly: true })),
                    createEl("button", "Show more"));

                document.getElementById("main").appendChild(result);
            });
    } catch (error) {
        console.error(error);
    }
}

function createEl(type, text, attributes, ...elements) {
    const result = document.createElement(type);

    if (text) {
        result.textContent = text;
    }

    if (attributes) {
        Object.keys(attributes).forEach(a => {
            result.setAttribute(a, attributes[a]);
        });
    }

    if (type == "button") {
        result.addEventListener("click", toShow);
    }

    elements.forEach(e => result.appendChild(e));

    return result;
}

function toShow(e) {
    const profileDiv = e.target.parentElement;
    const locked = profileDiv.querySelector("input");

    if (locked.checked == true) {
        return;
    } else {
        const hiddenDiv = e.target.previousElementSibling;

        if (hiddenDiv.style.display == "none") {
            hiddenDiv.style.display = "block";
            e.target.textContent = "Hide it";
        } else {
            hiddenDiv.style.display = "none";
            e.target.textContent = "Show more";
        }
    }
}