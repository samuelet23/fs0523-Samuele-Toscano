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
                target === null || target === void 0 ? void 0 : target.classList.toggle("d-none");
                selectPage(buttonInfo.target, buttonInfo.clon);
                let chiama = document.querySelector('#targetChiama');
                let eliminaChiamate = document.querySelector('#eliminaChiamate');
                let ricarica = document.querySelector('#ricarica');
                let creditoResiduo = document.querySelector('#creditoResiduo');
                let chiamateEffettuate = document.querySelector('#chiamateEffettuate');
                let arrowChiama = document.querySelector('.arrowChiama');
                let arrowEliminaChiamate = document.querySelector('.arrowEliminaChiamate');
                let arrowRicarica = document.querySelector('.arrowRicarica');
                let arrowCreditoResiduo = document.querySelector('.arrowCreditoResiduo');
                let arrowChiamateEffetuate = document.querySelector('.arrowChiamateEffetuate');
                console.log(arrowChiama, arrowChiamateEffetuate, arrowCreditoResiduo, arrowEliminaChiamate, arrowRicarica);
                arrowChiama === null || arrowChiama === void 0 ? void 0 : arrowChiama.addEventListener('click', () => {
                    chiama === null || chiama === void 0 ? void 0 : chiama.classList.add('d-none');
                    target === null || target === void 0 ? void 0 : target.classList.remove("d-none");
                    console.log(arrowChiama);
                });
                arrowEliminaChiamate === null || arrowEliminaChiamate === void 0 ? void 0 : arrowEliminaChiamate.addEventListener('click', () => {
                    eliminaChiamate === null || eliminaChiamate === void 0 ? void 0 : eliminaChiamate.classList.add('d-none');
                    target === null || target === void 0 ? void 0 : target.classList.remove("d-none");
                    console.log(arrowChiama);
                });
                arrowRicarica === null || arrowRicarica === void 0 ? void 0 : arrowRicarica.addEventListener('click', () => {
                    ricarica === null || ricarica === void 0 ? void 0 : ricarica.classList.add('d-none');
                    target === null || target === void 0 ? void 0 : target.classList.remove("d-none");
                    console.log(arrowChiama);
                });
                arrowCreditoResiduo === null || arrowCreditoResiduo === void 0 ? void 0 : arrowCreditoResiduo.addEventListener('click', () => {
                    creditoResiduo === null || creditoResiduo === void 0 ? void 0 : creditoResiduo.classList.add('d-none');
                    target === null || target === void 0 ? void 0 : target.classList.remove("d-none");
                    console.log(arrowChiama);
                });
                arrowChiamateEffetuate === null || arrowChiamateEffetuate === void 0 ? void 0 : arrowChiamateEffetuate.addEventListener('click', () => {
                    chiamateEffettuate === null || chiamateEffettuate === void 0 ? void 0 : chiamateEffettuate.classList.add('d-none');
                    target === null || target === void 0 ? void 0 : target.classList.remove("d-none");
                    console.log(arrowChiama);
                });
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
    const welcomePage = document.querySelector(".container-welcomePage");
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
appaerButton();
// Esempio di utilizzo in un altro contesto
function anotherFunction() {
    const targetSelector = "#anotherTarget";
    const clonSelector = "#anotherTemplate";
    const buttonSelectors = [
        { id: "#anotherButton", target: "#anotherTargetSection", clon: "#anotherSection" },
    ];
    selectButton(targetSelector, clonSelector, buttonSelectors);
}
anotherFunction();
//# sourceMappingURL=template.js.map