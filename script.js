// Get the text area element
const typeBox = document.getElementById('typeBox');

// Load saved text from localStorage (if any)
typeBox.value = localStorage.getItem('savedText') || '';

// Save text to localStorage whenever the user types
typeBox.addEventListener('input', () => {
  localStorage.setItem('savedText', typeBox.value);
});