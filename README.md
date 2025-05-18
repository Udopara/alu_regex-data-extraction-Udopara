# alu_regex-data-extraction-Udopara
---

# Validators.js

A lightweight utility object for validating common patterns in JavaScript using regular expressions.

## Features

This utility helps you validate:

* Email addresses
* URLs
* Phone numbers
* Credit card numbers
* Time (12-hour and 24-hour formats)
* HTML tags
* Hashtags
* Currency amounts

## Installation

Just copy the `Validators` object into your project and import it where needed.

## Usage

```js
import { Validators } from './validators.js'; // or copy directly into your code

const email = "test@example.com";
console.log(Validators.validateEmail(email)); // true or false
```

## Methods

| Method                  | Description                                 |
| ----------------------- | ------------------------------------------- |
| `validateEmail()`       | Validates email format                      |
| `validateURL()`         | Validates HTTP/HTTPS URLs                   |
| `validatePhoneNumber()` | Validates international/local phone numbers |
| `validateCreditCard()`  | Validates credit card numbers               |
| `validateTime12h()`     | Validates 12-hour time (e.g., 09:30 AM)     |
| `validateTime24h()`     | Validates 24-hour time (e.g., 21:45)        |
| `validateHTMLTag()`     | Detects HTML tags                           |
| `validateHashtag()`     | Validates hashtags (e.g., #coding)          |
| `validateCurrency()`    | Validates currency format (\$1,234.56)      |

## Example

```js
Validators.validateEmail("user@example.com");         // true
Validators.validateURL("https://example.com");        // true
Validators.validatePhoneNumber("+234-801-234-5678");  // true
Validators.validateCurrency("$2,000.00");             // true
```

## License

MIT — use it freely in your projects.

---
