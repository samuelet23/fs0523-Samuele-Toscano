"use strict";
// da spostare in Module
function selectTemplate(selector) {
    let temp = document.querySelector(selector);
    let clon = temp === null || temp === void 0 ? void 0 : temp.content.cloneNode(true);
    return clon;
}
function selectPage(targetSelector, clonSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
        let clon = selectTemplate(clonSelector);
        if (clon) {
            target.appendChild(clon);
        }
    }
}
//funzioni welcome page to button Page
function selectButton(targetSelector, clonSelector, buttonSelectors) {
    const target = document.querySelector(targetSelector);
    if (target) {
        let clon = selectTemplate(clonSelector);
        buttonSelectors.forEach(buttonInfo => {
            const btn = clon === null || clon === void 0 ? void 0 : clon.querySelector(buttonInfo.id);
            btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
                target === null || target === void 0 ? void 0 : target.classList.add("d-none");
                selectPage(buttonInfo.target, buttonInfo.clon);
            });
        });
        if (clon) {
            target.appendChild(clon);
        }
    }
}
// Esempio di utilizzo
function appaerButton() {
    const logo = document.getElementById("logo-phone");
    const welcomePage = document.querySelector(".container");
    logo === null || logo === void 0 ? void 0 : logo.addEventListener("click", () => {
        if (welcomePage) {
            welcomePage.style.display = "none";
        }
        const targetSelector = "#targetButton";
        const clonSelector = "#templateIniziale";
        const buttonSelectors = [
            { id: "#chiama1", target: "#targetChiama", clon: "#chiama" },
            { id: "#eliminaChiamate1", target: "#targetEliminaChiamate", clon: "#eliminaChiamate" },
            { id: "#effettuaRicarica1", target: "#targetRicarica", clon: "#ricarica" },
            { id: "#creditoResiduo1", target: "#targetCreditoResiduo", clon: "#creditoResiduo" },
            { id: "#chiamateEffetuate1", target: "#targetChiamateEffetuata", clon: "#chiamateEffettuate" },
        ];
        selectButton(targetSelector, clonSelector, buttonSelectors);
    });
}
// Esempio di utilizzo in un altro contesto
function anotherFunction() {
    const targetSelector = "#anotherTarget";
    const clonSelector = "#anotherTemplate";
    const buttonSelectors = [
        { id: "#anotherButton", target: "#anotherTargetSection", clon: "#anotherSection" },
        // Aggiungi altri selettori se necessario
    ];
    selectButton(targetSelector, clonSelector, buttonSelectors);
}
appaerButton();
anotherFunction();
//# sourceMappingURL=template.js.map