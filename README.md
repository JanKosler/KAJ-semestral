# KAJ-semestral

Klientské aplikace v Javascriptu - semestrální práce 2023/2024

Cílem bylo vytvořit aplikaci na správu akciového portfolia, použil jsem firebase pro autentifikaci, firestore pro ukládání a aplikace je nasazena také na firebase

Hlavní funkčnost je přidávní titulů a obchodů nad tituly, aplikace potom vytváří grafy podle sektorizace nebo overview samostatných titulů.

Jako další rozšíření bych chtěl udělat semi-realtime cenové info a grafy/info nad tím, ted v aplikaci není kvůli potřebě samostatného backendu který jsem nestihl vytvořit.

## body tabulky

## HTML 

1) validita
testoval jsem přes w3 validator
    * https://validator.w3.org/nu/?doc=https%3A%2F%2Fportfolio-manager-b9c63.web.app%2F

2) prohlížeče
    * testováno v chrome a firefox, věci kde by mohl být problém jsou vendor prefixy

3) semantické značky
    * layout rozdělen na `<header>` a `<main>`
    * Menu je `<nav>`
    * cards, které určují content jsou `<section>`

4) Grafika - SVG / Canvas
    * ano v rámci donut graph

5) Média - Audio/Video - Ne

5) Formulářové prvky
    * ano u registrace a login a přidávání trades

6) Offline aplikace - Ne

## CSS

1) Pokročilé selektory
    * U table, kontrétně výběr věcí co nechci nechat být vidět, dříve jsem používal atribut abbr, který to dělal mnohem lepší, ale ten mi validátor zakázal
    ```css
      @media (max-width: 768px) {
        &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(5)) {
          display: none;
        }
      }
    ```

2) Vendor prefixy
    * Ano, hlavně u AnimatedCube a potom ještě na pár místech
3) CSS3 transformace 2D/3D
    * Ano, v rámci AnimatedCube, která se vytvoří v kodu a poté je animována
4) CSS3 transitions/animations
    * Ano, v rámci AnimatedCube, točí se na LoadingPage a poté jde vidět u AddDeposit, který jsem nakonec neimplementoval
5) Media queries
    * většinou řeší tailwind, já přidával u obou tables kvůli změně věcí co se zobrazují na malých displejích

## JS 
1) OOP přístup
    * Ano
2) Použití JS frameworku či knihovny
    * React
3) Použití pokročilých JS API
    * používám na uložení userId které dostanu z firebase, pod kterým se potom hledají docs, které patří mému uživateli
4) Funkční historie
    * používám vrácení na hlavní stránku z TickerDetailPage, jeden krok v historii vzad

5) Ovládání medií - Ne
6) Offline aplikace - Ne
7) JS práce se SVG 
    * Ano, donut graph je SVG, které se tvoří z dat co mu předám 

## JSON formats

### portfolio format example

```json
{
  "userId": "fasfadsg2342gafgygarkga",
  "holdings": [
    {
      "ticker": "AAPL",
      "name": "",
      "currency": "USD",
      "sector": "information-technology",
      "transactions": [
        {
          "date": "2022-06-05",
          "quantity": 46,
          "pricePerUnit": 140,
          "tradeValue": 6440,
          "operationType": "BUY"
        },
        {
          "date": "2022-09-29",
          "quantity": 40,
          "pricePerUnit": 170,
          "tradeValue": 6800,
          "operationType": "BUY"
        }
      ]
    },
    {
      "ticker": "NVDA",
      "name": "",
      "currency": "USD",
      "sector": "information-technology",
      "transactions": [
        {
          "date": "2022-04-16",
          "quantity": 5,
          "pricePerUnit": 600,
          "tradeValue": 3000,
          "operationType": "BUY"
        },
        {
          "date": "2022-06-09",
          "quantity": 5,
          "pricePerUnit": 700,
          "tradeValue": 3500,
          "operationType": "BUY"
        },
        {
          "date": "2023-01-28",
          "quantity": 15,
          "pricePerUnit": 800,
          "tradeValue": 12000,
          "operationType": "SELL"
        }
      ]
    }
  ]
}
```
