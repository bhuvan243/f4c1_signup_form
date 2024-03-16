export function checkIfValid(nameAttribute, value, password) {
  switch (nameAttribute) {
    case "email":
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    case "password":
      return value.length >= 8;
    case "confirmPassword":
      return value.length >= 8 && value === password;
    default:
      return false;
  }
}