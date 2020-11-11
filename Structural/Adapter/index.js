const localStorage = require('./localStorage');

console.log('localStorage length: ' + localStorage.length);

const uid = localStorage.getItem('user_id');

if (!uid) {
  console.log('User ID not found. Setting the user id and token...');
  localStorage.setItem('token', 'kwejiqhhdjdhqwjdnqkwdhjhqwdkjnqwjhfgqjdhqkwjdhwejfhdqnjkwhdwd');
  localStorage.setItem('user_id', '129878268');
} else {
  console.log('User ID found.', uid);
  console.log('Cleaning localStorage...');
  localStorage.clear();
}