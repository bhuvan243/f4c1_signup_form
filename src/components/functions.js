export function validateEmail(emailInput) {
    const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
    if (emailInput.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

// validateEmail("bhuvan243@gmail.com");

