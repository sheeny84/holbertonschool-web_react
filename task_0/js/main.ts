interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  location: "Melbourne",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "Sydney",
};

let studentsList: Array<Student> = [student1, student2];

// Create the table element
const table = document.createElement("table");

// Create the table body (tbody)
const tbody = table.createTBody();
studentsList.forEach(student => {
    const row = tbody.insertRow(); // Insert a new row
    const nameCell = row.insertCell();
    nameCell.textContent = student.firstName;
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
});

// Append the constructed table to the body of the HTML document
document.body.appendChild(table);
