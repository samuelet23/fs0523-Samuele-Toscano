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
  function goBack():void  {
    window.history.back();
}
function goAhead():void {
    window.history.forward();  
}
let arrowRight = document.querySelector('bi-arrow-right-circle-fill')
arrowRight?.addEventListener('click', goAhead)

let arrrowLeft = document.querySelector('.bi-arrow-left-circle-fill')
arrrowLeft?.addEventListener('click', goBack)

//funzioni welcome page to button Page

function selectButton(targetSelector: string, clonSelector: string, buttonSelectors: { id: string, target: string, clon: string }[]): void {
    const target: HTMLDivElement | null = document.querySelector(targetSelector);
    if (target) {
        let clon = selectTemplate(clonSelector);

        buttonSelectors.forEach(buttonInfo => {
            const btn = clon?.querySelector<HTMLButtonElement>(buttonInfo.id);
            btn?.addEventListener("click", () => {
                target?.classList.add("d-none");
                selectPage(buttonInfo.target, buttonInfo.clon);
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

    if (!logo) {
        console.error("Logo non trovato.");
        return;
    }

    if (!welcomePage) {
        console.error("Pagina di benvenuto non trovata.");
        return;
    }

    console.log(welcomePage);
    console.log(logo);

    logo.addEventListener("click", () => {
        console.log("Logo cliccato");

        if (welcomePage) {
            welcomePage.style.display = "none";
            console.log("Pagina di benvenuto nascosta.");
        } else {
            alert('non è selezionato');
        }

        console.log(welcomePage);

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


