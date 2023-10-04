### Umeå Universitet Webbdesign med JavaScript och Document Object Model 7,5hp HT-23.

#### Assignment Uppgift 2 Tabellhantering och beräkning

Syftet med denna uppgift är att lära sig använda JavaScript för att läsa av data från en HTML-tabell, göra beräkningar och presentera resultatet i nya DOM-element.

All kodning är utförd i JavaScript-filen calculate.js. Övriga filer lämnas orörda. 

**Kravlista:**
1. Skapa saknade element med hjälp av DOM-funktionalitet.
  
  Lägga till kolumnen med titeln ”Summa”.

  Lägga till en ny rad i slutet av tabellen. I denna rad skall sedan summor för antalet produkter samt slutsumma för priset läggas. Denna rad ska tilldelas id=”sumrow”. Detta är viktigt eftersom det finns en existerande CSS-stil för detta id som ger raden en ljusblå färg.
  
  Skapa en knapp: <button>. Denna ska läggas in efter tabellen. Knappen ska ha texten ”Beräkna pris”. Ge gärna knappen klasserna btn och btn-primary för att ge den rätt stil.

2. Summering

   När användaren klickar på knappen ”Beräkna pris” ska skriptet summera varje produkt för sig och sätta in dess summa i den sista cellen på respektive rad. Skriptet ska också summera det totala antalet produkter och placera det längst ned i kolumnen för antalet, på raden med id ”sumrow”. 
Slutligen skall den totala prissumman beräknas och skrivas ut på raden ”sumrow”, för kolumnen summa.

3. Ändring av antal och ny summering

  Användaren ska kunna ändra antalet produkter genom att skriva in nya siffervärden i inmatningsfälten. 
  När användaren klickar på ”Beräkna pris” ska en ny beräkning enligt ovan utföras.
  
4. Generell lösning

  Din lösning ska vara generell, vilket innebär att lösningen inte ska vara beroende av att sidan innehåller ett fast antal produkter. Du måste alltså se till att JavaScriptet calculate.js fungerar även om produkter läggs till eller tas bort från tabellen. För att kontrollera detta rekommenderas att du testar att helt enkelt 
  lägga till fler rader i tabellen i filen index.html och därefter kontrollerar så att din lösning fortfarande fungerar.
