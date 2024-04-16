// Get references to the input element and the button element
const input = document.getElementById('input');
const button = document.getElementById('btn');

// Add an event listener to the button element
button.addEventListener('click', (e) => {
  // Get the value of the input element
  const todo = input.value;

  // Create a new list item element
  const li = document.createElement('li');

  // Create a new checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create a new label element
  const label = document.createElement('label');

  // Create a new remove button element
  const removeButton = document.createElement('button');
  removeButton.className = 'remove';
  removeButton.textContent = 'X';

  // Set the text content of the label element to the value of the input element
  label.textContent = todo;

  // Add the checkbox, label, and remove button elements to the list item element
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);

  // Add the list item element to the unordered list element
  document.querySelector('ul').appendChild(li);

  // Clear the value of the input element
  input.value = '';

  // Add an event listener to the remove button element
  removeButton.addEventListener('click', () => {
    // Remove the list item element from the unordered list element
    li.parentNode.removeChild(li);
  });

  // Add CSS styles to the list item element
  li.style.backgroundColor = '#f9f9f9';
  li.style.marginBottom = '20px';
  li.style.height = '70px';
  li.style.borderRadius = '5px';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';
  li.style.fontSize = '40px'

  checkbox.style.width = '30px';
  checkbox.style.height = '30px';
  checkbox.style.marginLeft = '20px';

  removeButton.style.backgroundColor = 'red';
  removeButton.style.border = 'none';
  removeButton.style.borderRadius = '5px';
  removeButton.style.width = '70px';
  removeButton.style.height = '70px';
});