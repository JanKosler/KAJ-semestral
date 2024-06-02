# KAJ-semestral

Klientské aplikace v Javascriptu - semestrální práce 2023/2024

Cílem bylo vytvořit aplikaci na správu akciového portfolia, použil jsem firebase pro autentifikaci, firestore pro ukládání a aplikace je nasazena také na firebase

Hlavní funkčnost je přidávní titulů a obchodů nad tituly, aplikace potom vytváří grafy podle sektorizace nebo overview samostatných titulů.

Jako další rozšíření bych chtěl udělat semi-realtime cenové info a grafy/info nad tím, ted v aplikaci není kvůli potřebě samostatného backendu který jsem nestihl vytvořit.

## body tabulky

## HTML
https://validator.w3.org/nu/?doc=https%3A%2F%2Fportfolio-manager-b9c63.web.app%2F

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
