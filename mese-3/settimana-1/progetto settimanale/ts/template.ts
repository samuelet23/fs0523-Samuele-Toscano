// da spostare in Module
function selectTemplate(selector: string): DocumentFragment | null {
  let temp = <HTMLTemplateElement | null>document.querySelector(selector);
  let clon = <DocumentFragment | null>temp?.content.cloneNode(true);
  return clon;
}
function selectPage(targetSelector: string, clonSelector: string): void {
    const target: HTMLDivElement | null = document.querySelector(targetSelector);
    if (target) {
      let clon = selectTemplate(clonSelector);
      if (clon) {
        target.appendChild(clon);
      }
    }
  }



//funzioni welcome page to button Page

function selectButton(targetSelector: string, clonSelector: string, buttonSelectors: { id: string, target: string, clon: string }[]): void {
    const target: HTMLDivElement | null = document.querySelector(targetSelector);

    if (target) {
        let clon = selectTemplate(clonSelector);

        buttonSelectors.forEach(buttonInfo => {
            const btn = clon?.querySelector<HTMLButtonElement>(buttonInfo.id);
            btn?.addEventListener("click", () => {
                target?.classList.toggle("d-none");
                selectPage(buttonInfo.target, buttonInfo.clon);
                let chiama= document.querySelector('#targetChiama');
                let eliminaChiamate= document.querySelector('#eliminaChiamate');
                let ricarica= document.querySelector('#ricarica');
                let creditoResiduo= document.querySelector('#creditoResiduo');
                let chiamateEffettuate= document.querySelector('#chiamateEffettuate');

                let arrowChiama =document.querySelector('.arrowChiama')
                let arrowEliminaChiamate =document.querySelector('.arrowEliminaChiamate')
                let arrowRicarica =document.querySelector('.arrowRicarica')
                let arrowCreditoResiduo =document.querySelector('.arrowCreditoResiduo')
                let arrowChiamateEffetuate =document.querySelector('.arrowChiamateEffetuate')
                console.log(arrowChiama, arrowChiamateEffetuate, arrowCreditoResiduo, arrowEliminaChiamate, arrowRicarica);
                
                arrowChiama?.addEventListener('click', () => {
        
                    chiama?.classList.add('d-none');
                    target?.classList.remove("d-none");

                    console.log(arrowChiama);
                });
                arrowEliminaChiamate?.addEventListener('click', () => {
        
                    eliminaChiamate?.classList.add('d-none');
                    target?.classList.remove("d-none");

                    console.log(arrowChiama);
                });
                arrowRicarica?.addEventListener('click', () => {
        
                    ricarica?.classList.add('d-none');
                    target?.classList.remove("d-none");

                    console.log(arrowChiama);
                });
                arrowCreditoResiduo?.addEventListener('click', () => {
        
                    creditoResiduo?.classList.add('d-none');
                    target?.classList.remove("d-none");

                    console.log(arrowChiama);
                });
                arrowChiamateEffetuate?.addEventListener('click', () => {
        
                    chiamateEffettuate?.classList.add('d-none');
                    target?.classList.remove("d-none");

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
function appaerButton(): void {
    const logo = document.getElementById("logo-phone");
    const welcomePage: HTMLDivElement | null = document.querySelector(".container-welcomePage");

    logo?.addEventListener("click", () => {

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
function anotherFunction(): void {
    const targetSelector = "#anotherTarget";
    const clonSelector = "#anotherTemplate";
    const buttonSelectors = [
        { id: "#anotherButton", target: "#anotherTargetSection", clon: "#anotherSection" },
    ];

    selectButton(targetSelector, clonSelector, buttonSelectors);
}

anotherFunction();


