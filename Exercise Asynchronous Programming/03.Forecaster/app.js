//     const data = {
//         'Sunny': '&#x2600',
//         'Partly sunny': '&#x26C5',
//         'Overcast': '&#x2601',
//         'Rain': '&#x2614',
//     }

(async function attachEvents() {
    document.getElementById("submit").addEventListener("click", getWeather);
})();

async function getWeather() {
    const fDivEl = document.getElementById("forecast");
    const currentDivEl = document.getElementById("current");
    const locationElV = document.getElementById("location").value;
    const upcomingEl = document.getElementById("upcoming");

    try {
        const response = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
        const data = await response.json();

        const result = data.find(e => e.name == locationElV);

        const [curr, nerr] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${result.code}`),
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${result.code}`)
        ]);

        const [dataCurr, dataFor] = await Promise.all([curr.json(), nerr.json()]);

        const conditions = {
            "Sunny": "☀",
            "Partly sunny": "⛅",
            "Overcast": "☁",
            "Rain": "☂",
            "Degrees": "°"
        };

        let icon = conditions[dataCurr.forecast.condition];

        const currentConditions = createEl("div", "", ["forecasts"],
            createEl("span", icon, ["condition", "symbol"]),
            createEl("span", "", ["condition"],
                createEl("span", dataCurr.name, ["forecast-data"]),
                createEl("span", `${dataCurr.forecast.low}°/${dataCurr.forecast.high}°`, ["forecast-data"]),
                createEl("span", dataCurr.forecast.condition, ["forecast-data"])));

        clearF(currentDivEl);

        currentDivEl.appendChild(currentConditions);

        fDivEl.style.display = "";

        const mainDivEl = createEl("div", "", ["forecast-info"]);

        dataFor.forecast.forEach(f => {
            icon = conditions[f.condition];

            const forecastAhead = createEl("span", "", ["upcoming"],
                createEl("span", icon, ["symbol"]),
                createEl("span", `${f.low}°/${f.high}°`, ["forecast-data"]),
                createEl("span", f.condition, ["forecast-data"]));

            mainDivEl.appendChild(forecastAhead);
        });

        clearF(upcomingEl);

        upcomingEl.appendChild(mainDivEl);

    } catch (err) {
        clearF(currentDivEl);
        clearF(upcomingEl);

        fDivEl.style.display = "";
        const textNode = document.createTextNode("Error");
        currentDivEl.appendChild(textNode);
    }
}

function createEl(type, text, classNames, ...elements) {
    const result = document.createElement(type);

    if (text) {
        result.textContent = text;
    }

    if (classNames) {
        classNames.forEach(c => result.classList.add(c));
    }

    elements.forEach(e => result.appendChild(e));
    return result;
}

function clearF(currentDivEl) {
    const persistentEl = currentDivEl.removeChild(currentDivEl.firstElementChild);

    currentDivEl.innerHTML = "";

    currentDivEl.appendChild(persistentEl);
}