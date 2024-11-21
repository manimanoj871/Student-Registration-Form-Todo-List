function saveTodo() {
    var name = document.getElementById("fn").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("male").checked ? "Male" : "Female";
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Create new row for the todo list
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    // Append the new row to the todo list table
    document.getElementById("todoList").append(newRow);
}

function deleteRow(button) {
    // Traverse up to the <tr> element and remove it
    button.parentNode.parentNode.remove();
}