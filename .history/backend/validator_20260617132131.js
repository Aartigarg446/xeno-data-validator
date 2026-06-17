function validatePhone(phone, country) {

  const rules = {
    India: /^\d{10}$/,
    Singapore: /^\d{8}$/
  };

  return rules[country]?.test(phone);
}

function validateDate(date) {

  const regex = /^\d{4}-\d{2}-\d{2}$/;

  return regex.test(date);
}

function validatePayment(paymentMode) {

  const validModes = [
    "UPI",
    "Cash",
    "Card",
    "Wallet",
    "Net Banking"
  ];

  return validModes.includes(paymentMode);
}

module.exports = {
  validatePhone,
  validateDate,
  validatePayment
};