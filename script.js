const passwordBox = document.getElementById("password"); // Select password input
const length = 20; // Length of the password

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_";

const allChars = uppercase + lowercase + number + symbols;

// Function to generate random password
function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Create password of length 12
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display generated password
    passwordBox.value = password;
}

// Function to copy password
function copyPassword() {
    passwordBox.select(); // Selects the text
    navigator.clipboard.writeText(passwordBox.value).then(() => {
        alert("Password copied to clipboard!");
    });
}
