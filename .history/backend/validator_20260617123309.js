function validatePhone(phone, country) {

  const rules = {
    India: /^\d{10}$/,
    Singapore: /^\d{8}$/
  };

  return rules[country]?.test(phone);
}

module.exports = {
  validatePhone
};