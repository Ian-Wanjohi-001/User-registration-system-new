// get the form element
const userForm = document.getElementById('userForm');

// get the table body element
const tableBody = document.getElementsByTagName('table')[0];

// create an empty array to store the users
let users = [];

// add an event listener to the form submit button
userForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submit behavior
 
  // get the user data from the form
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const country = document.getElementById('country').value;
  const languages = document.getElementById('languages').value;

  // create a new user object
  const user = { name, id, country, languages };

  // add the user object to the users array
  users.push(user);

  // add the user data to the table
  const row = tableBody.insertRow();
  const nameCell = row.insertCell();
  const idCell = row.insertCell();
  const countryCell = row.insertCell();
  const languagesCell = row.insertCell();
  const deleteCell = row.insertCell();
  nameCell.innerHTML = name;
  idCell.innerHTML = id;
  countryCell.innerHTML = country;
  languagesCell.innerHTML = languages;
  deleteCell.innerHTML = '<button class="deleteBtn">Delete user</button>';

alert("User added successfully")
  // add an event listener to the delete button
  const deleteBtn = deleteCell.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', function() {
    // find the index of the user in the array
    const index = users.findIndex(u => u.id === id);

    // remove the user from the array
    users.splice(index, 1);

    // remove the row from the table
    row.remove();
    alert("User deleted successfully")
  });

  // reset the form
  userForm.reset();
});

// Define an array to hold the user data
let users2 = [];

// Get the table element from the HTML document
const table = document.getElementById("userTable");

// Function to add a new user to the table
function addUser(name, id, country, language) {
  // Add the new user to the users array
  users.push({ name, id, country, language });

  // Clear the existing table rows (except the header row)
  const rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // Add a new row for each user in the array
  users.forEach(user => {
    const row = table.insertRow();
    row.insertCell().textContent = user.name;
    row.insertCell().textContent = user.id;
    row.insertCell().textContent = user.country;
    row.insertCell().textContent = user.language;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete user";
    deleteButton.addEventListener("click", () => deleteUser(row));
    row.insertCell().appendChild(deleteButton);
  });
}

// Function to delete a user from the table
function deleteUser(row) {
  // Get the index of the row to delete
  const index = row.rowIndex - 1;

  // Remove the user from the users array
  users.splice(index, 1);
  alert("User deleted successfully")

  // Remove the row from the table
  table.deleteRow(row.rowIndex);
}

// Example usage: add a new user to the table
addUser("John Chege", 234567, "Kenya", "English");
