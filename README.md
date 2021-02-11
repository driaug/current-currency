# current-currency
Making it easy to work with currencies!

## Available functions
### convert
#### Example
```ts
import { convert } from "current-currency";

convert("EUR", 10.2, "USD").then(res => console.log(res));
// {currency: "USD", amount: 12.35}
```
In the background we make use of https://exchangeratesapi.io/ to always have the current rates.

### addSymbol
#### Example
```ts
import { addSymbol } from "current-currency";

const symbolized = addSymbol("USD", 10.2);
console.log(symbolized);
// $10.2
```

#### Example with force position
```ts
import { addSymbol } from "current-currency";

const symbolized = addSymbol("USD", 10.2, "post");
console.log(symbolized);
// 10.2$
```
## Supported currencies
| Code | Name                 |
|------|----------------------|
| EUR  | Euro                 |
| USD  | United States Dollar |
| CAD  | Canadian Dollar      |
| HKD  | Hong Kong Dollar     |
| ISK  | Icelandic Króna      |
| PHP  | Philippine Peso      |
| DDK  | Danish Krone         |
| HUF  | Hungarian Forint     |
| CZK  | Czech Koruna         |
| AUD  | Australian Dollar    |
| RON  | Romanian Leu         |
| SEK  | Swedish Krona        |
| IDR  | Indonesian Rupiah    |
| INR  | Indian Rupee         |
| BRL  | Brazilian Real       |
| RUB  | Russian Ruble        |
| HRK  | Croatian Kuna        |
| JPY  | Japanse Yen          |
| TBH  | Thai Baht            |
| CHF  | Swiss Franc          |
| SGD  | Singapore Dollar     |
| PLN  | Polish złoty         |
| BGN  | Bulgarian Lev        |
| TRY  | Turkish Lira         |
| CNY  | Chinese Renminbi     |
| NOK  | Norwegian Krone      |
| NZD  | New Zealand Dollar   |
| ZAR  | South African Rand   |
| MXN  | Mexican Peso         |
| ILS  | Israeli Shekel       |
| GBP  | Pound Sterling       |
| KRW  | South Korean Won     |
| MYR  | Malaysian Ringgit    | 

