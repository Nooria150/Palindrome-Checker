function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(textInput)) {
    resultElement.textContent = `${textInput} is a palindrome`;
  } else {
    resultElement.textContent = `${textInput} is not a palindrome`;
  }
});