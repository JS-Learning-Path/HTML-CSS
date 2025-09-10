const input = document.getElementById('inputText');
const result = document.getElementById('result');
const checkBtn = document.getElementById('checkBtn');
let filterInput;

checkBtn.addEventListener("click", () => {
    if (!filterInput) {
        result.textContent = "Please enter text to check.";
        return;
    }
    let reverseInput = filterInput.split('').reverse().join('');
    if (filterInput === reverseInput) {
        result.textContent = "It's a palindrome";
    } else {
        result.textContent = "It's not a palindrome";
    }
});

input.addEventListener("input", () => {
    filterInput = input.value.toLowerCase().replace(/[^a-z0-9]/gi, '');
});