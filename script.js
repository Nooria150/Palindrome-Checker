const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkForPalindrome = (e) => {
  if (input.value === "") {
    alert("Please input a value");
  } else {
    // remove any non alphabet characters from the input
    cleanInput = input.value
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, "");

    if (cleanInput === "a") {
      result.innerHTML = ${input.value} is a palindrome;
    } else if (cleanInput === cleanInput.split("").reverse().join("")) {
      result.innerHTML = ${input.value} is a palindrome;
    } else {
      result.innerHTML = ${input.value} is not palindrome;
    }
  }
};

button.addEventListener("click", checkForPalindrome);
