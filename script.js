const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = input => {
  const originalInput = input; 

  if (input === '') {
    alert('Please input a value');
    return;
  }
  result.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
 let palindromeResult = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pResult = document.createElement('p');
  pResult.className = 'text-input';
  pResult.innerHTML = palindromeResult;
  result.appendChild(pResult);

  result.classList.remove('hidden');
};

button.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});