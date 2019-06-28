
# Specifikation, datakällor och arkitektur

#### Specifikation

PolisInfo är en app som behandlar den svenska polisen verksamhet i form av händelsenotiser som beskriver 500 aktuella händelser från polisen som ger kortfattad information om ett urval av de utryckningar som polisen gör. Användaren kan i appen se de senaste händelserna, filtrera notiserna genom att söka på specifika orter och händelser. Till varje filtrerad notis finns en rubrik, en kort sammanfattning av händelsen, länk till polisens hemsida och en karta där platsen för händelsen finns markerad. För att få tillgång till händelsenotiser måste användaren skapa en inloggning och logga in på appen. Dessutom kan användaren söka på polisstationer och få reda på vilka tjänster som respektive station erbjuder och se stationens placering på en karta i förhållande till den egna positionen.

#### Datakällor

Följande API:er med JSON-data används i appen:

[https://polisen.se/api/events](https://polisen.se/api/events)

API:et innehåller 500 aktuella händelsenotiser från polisen som ger kortfattad information om ett urval av de utryckningar som polisen gör. Appen använder sig av följande nycklar och värden från API:et; id: Händelsens id,  datetime: Tidpunkt, name: Rubrik till händelsen, summary: Kort beskrivning av händelsen, url: Länk till beskrivningen på polisens hemsida. Type: Kategorisering av händelsen. location: GPS koordinater tillkommunen/länet där händelsen inträffat(för lokalisering på karta).

[https://polisen.se/api/policestations](https://polisen.se/api/policestations)

API:et innehåller alla polisstationer i Sverige listade i bokstavsordning och Appen använder sig av följande nycklar och värden därifrån; id: polisstationens id, name: polisstationens namn, location: platsbeskrivning med gatuadress, ort och geografisk position (för lokalisering på karta), Url: länk till informationssida om polisstationen på polisen.se, services: tjänster som finns hos polisstationen.

#### Arkitektur

Appen är byggd i JavaScript ramverket mithril i form av en hybrid webbapp som är skapad med hjälp av  teknologierna HTML5, SASS och vanilla JavaScript. Mithril valdes för att på ett tydligt sätt separera vyer(rendera utskrift) och modeller(hämtning av data) och på så sätt skapa en bra struktur och stabil bas för applikationen. För att skapa själva _hybrid appen har_  Apache Cordova med plugins och emulatorn Android studios använts.  Varje API har en egen modell där all data hämtas från respektive datakälla. Varje funktionalitet i modellerna är kommenterade, som beskriver vad den har för syfte. Vyerna är skapade utifrån de olika API:erna med en huvud- och undervyer, som är kopplad till de val som görs från huvudvyn. Applikationen stödjer plattformen Android och har en stramt designad ikon och splashscreen.
