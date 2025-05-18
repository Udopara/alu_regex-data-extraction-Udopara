const Validators = {
  // Validates standard email format
  validateEmail: (email) => {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  },

  // Validates HTTP/HTTPS URLs (basic format)
  validateURL: (url) => {
    const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    return regex.test(url);
  },

  // Validates international and local phone numbers
  validatePhoneNumber: (phone) => {
    const regex = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,5}?\)?[-.\s]?)?\d{1,5}[-.\s]?\d{1,9}$/;
    return regex.test(phone);
  },

  // Validates 16-digit credit card numbers with optional spaces or dashes
  validateCreditCard: (card) => {
    const regex = /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/;
    return regex.test(card);
  },

  // Validates 12-hour time format (e.g., 09:45 AM)
  validateTime12h: (time) => {
    const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9](\s)?(AM|PM)$/i;
    return regex.test(time);
  },

  // Validates 24-hour time format (e.g., 14:30)
  validateTime24h: (time) => {
    const regex = /^([01]\d|2[0-3]):[0-5]\d$/;
    return regex.test(time);
  },

  // Validates presence of any HTML tag (e.g., <div>, <img src="">)
  validateHTMLTag: (str) => {
    const regex = /<("[^"]*"|'[^']*'|[^'">])*>/;
    return regex.test(str);
  },

  // Validates hashtags (e.g., #coding)
  validateHashtag: (tag) => {
    const regex = /#[\w]+/;
    return regex.test(tag);
  },

  // Validates currency format (e.g., $1,234.56 or 1234.56)
  validateCurrency: (amount) => {
    const regex = /^\$?\d+(,\d{3})*(\.\d{2})?$/;
    return regex.test(amount);
  }
};
