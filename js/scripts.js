// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");


// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `
        <div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        //DOMParser converte p/ HTML
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

        multiplicationTitle.innerText = number;
    }
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //colocou o '+' na frente para retornar um núm inteiro
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    //caso não exista um dos valores, o código ñ prossegue
    if (!multiplicationNumber || !multiplicatorNumber) return;

    //caso tenha, chama a função
    createTable(multiplicationNumber, multiplicatorNumber);
});