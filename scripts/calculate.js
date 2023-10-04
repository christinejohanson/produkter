//leta efter tabellen
var tableElement = document.getElementById("pricetable");

//funktion lägg till Summa i header
function addSum() {
    //skapa ny header cell
    var headerRow = tableElement.querySelector("thead tr");
    var headerCell = document.createElement("th");
    headerCell.textContent = "Summa";
    headerRow.appendChild(headerCell);

    //hitta tabell body
    var tableBodies = tableElement.getElementsByTagName("tbody");
    //loopa genom
    for (let i = 0; i < tableBodies.length; i++) {
        var tableRows = tableBodies[i].getElementsByTagName("tr");
        //loopa igenom alla tr
        for (let j = 0; j < tableRows.length; j++) {
            //lägg till td cell 
            let tableCell = document.createElement("td");
            let tableText = document.createTextNode("");
            tableCell.appendChild(tableText);
            //lägg till td
            tableRows[j].appendChild(tableCell);
        }
    }
}

//lägger till blå bar längst ner i tabell
function addBlueBar() {
    //hitta tbody
    var tableBody = document.querySelector("tbody");
    //hitta antalet kolumner
    var numColumns = tableBody.querySelector("tr").querySelectorAll("td").length;
    //skapa ny rad
    var newRow = document.createElement("tr");
    //forloop som skapar nytt element td
    for (var i = 0; i < numColumns; i++) {
        var newTd = document.createElement("td");
        var newTdText = document.createTextNode("");
        newTd.appendChild(newTdText);
        newRow.appendChild(newTd);
    }
    //sätt rätt id på raden
    newRow.setAttribute("id", "sumrow");
    //lätt till raden i slutet av table
    tableBody.appendChild(newRow);
}

//lägga till knapp och funktion på den
function addButton() {
    //skapa ny knapp
    var buttonElement = document.createElement("button");
    var buttonText = document.createTextNode("Beräkna Pris");
    buttonElement.appendChild(buttonText);
    buttonElement.className = "btn btn-primary";
    //händelse på knappen
    buttonElement.addEventListener("click", countPriceAndSum, false);
    //vart knappen ska placeras
    var position = document.getElementById("content");
    position.appendChild(buttonElement);

}

//för att summera pris o antal
function countPriceAndSum() {
    //hitta varje rad i tabellen
    var tableRows = tableElement.getElementsByTagName("tr");
    var amountCount = 0;
    var sumSumCount = 0;

    //loopa igenom. börja på 1 för att hoppa över header
    for (var i = 1; i < tableRows.length - 1; i++) {
        //variabel för td cellerna
        var priceCells = tableRows[i].getElementsByTagName("td");

        // kolla om det är mer än 6 celler
        if (priceCells.length >= 6) {
            //hitta värdet i cell 3 och 4 för att summera. 
            var priceContent = priceCells[3].textContent.trim();
            var inputElement = priceCells[4].querySelector("input[type='text']");
            var amountContent = inputElement.value.trim();
            var priceNumber = parseInt(priceContent);
            //avrundar neråt till heltal om input är med decimal
            var amountNumber = Math.ceil(parseFloat(amountContent));          
            //räkna ut summan
            var calculateSum = priceNumber * amountNumber;
            //placera summan i rätt cell
            priceCells[5].textContent = calculateSum;
            //räkna ihop antalet för varje varv i forloop
            amountCount += amountNumber;
            var sumSum = priceCells[5].textContent.trim();
            var testEtt = parseInt(sumSum);
            sumSumCount += testEtt;
        }
    }
    //hitta den blå raden placera in i rätt fält.
    var totalRow = document.getElementById("sumrow");
    //och cell
    var totalCell = totalRow.querySelectorAll("td")[4];
    totalCell.textContent = amountCount;
    var totalCellSum = totalRow.querySelectorAll("td")[5];
    totalCellSum.textContent = sumSumCount;

}


//function for add column sum, blue bar and button
addSum();
addBlueBar();
addButton();