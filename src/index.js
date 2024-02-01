function displayCSSProperties(element) {
    const displayElement = document.getElementById('btn1');
    const computedStyles = window.getComputedStyle(element);

    // let propertiesHTML = '<strong>CSS Properties:</strong><br>';

    // for (let i = 0; i < computedStyles.length; i++) {
    //     const propertyName = computedStyles[i];
    //     const propertyValue = computedStyles.getPropertyValue(propertyName);

    //     propertiesHTML += `${propertyName}: ${propertyValue}<br>`;
    // }

    // displayElement.innerHTML = propertiesHTML;
    displayElement.style.display = 'flex';
}

function hideCSSProperties() {
    const displayElement = document.getElementById('btn1');
    displayElement.style.display = 'none';
}

function enableDistrictSelectors() {
    var firstSelector = document.getElementById("first-selector");
    var secondSelector = document.getElementById("second-selector");
    var thirdSelector = document.getElementById("third-selector");

    if (firstSelector.value !== '--State--') {
        secondSelector.disabled = false;
    } else {
        secondSelector.disabled = true;
        thirdSelector.disabled = true;
    }
}

function enableCitySelectors() {
    var firstSelector = document.getElementById("first-selector");
    var secondSelector = document.getElementById("second-selector");
    var thirdSelector = document.getElementById("third-selector");

    if (secondSelector.value !== '--State--') {
        thirdSelector.disabled = false;
    } else {
        secondSelector.disabled = true;
        thirdSelector.disabled = true;
    }
}