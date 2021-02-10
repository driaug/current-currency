# current-currency
Making it easy to work with currencies!

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


