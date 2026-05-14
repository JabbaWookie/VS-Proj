window.addEventListener('DOMContentLoaded', function () {
  const message = document.getElementById('test-message');
  if (message) {
    message.textContent = 'This is a basic test message from script.js.';
  }
  console.log('Test script loaded successfully.');
});
