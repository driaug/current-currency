# current-currency
Making it super easy to convert one currency to another!
```ts
import { convert } from "current-currency";

convert("EUR", 10.2, "USD").then(res => console.log(res));
// {currency: "USD", amount: 12.35}
```
