// Task 4: Task Form Inputs Validation

const form = document.querySelector("#new-task-form");


const taskName = document.querySelector("#textTitle");
const description = document.querySelector("#textDes");
const assignedTo = document.querySelector("#assignTo");
const dueDate = document.querySelector("#dueDate");
const taskStatus = document.querySelector("#taskStatus");
const submit = document.querySelector("#submit");

// Function to valid all input of the add Task form

function validFormFieldInput(event) {
  let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();
    console.log("Task Name :" + taskName.value.length);
    console.log("Task Description :" + description.value.length);
    console.log("Task Assigned To :" + assignedTo.value.length);
    console.log("Task Due Date :" + dueDate.value);
    console.log("Task Status:" + taskStatus.value);


// Checking if the Task Name input value is more than 5 characters.
  if (taskName.value.trim().length < 5) {
     taskName.classList.remove('is-valid');
     taskName.classList.add('is-invalid');
  } else {
     taskName.classList.add('is-valid');
     taskName.classList.remove('is-invalid');
     validationFail++;
  }

// Checking if the Task Description input value is more than 5 characters.
  if (description.value.length < 5 || description.value.length > 50) {
     description.classList.remove('is-valid');
     description.classList.add('is-invalid');
  } else {
     description.classList.add('is-valid');
     description.classList.remove('is-invalid');
     validationFail++;
  }

// Checking if the Assigned To value is more than 5 characters.
  if (assignedTo.value.length < 5) {
     assignedTo.classList.remove('is-valid');
     assignedTo.classList.add('is-invalid');
  } else {
     assignedTo.classList.add('is-valid');
     assignedTo.classList.remove('is-invalid');
     validationFail++;
  }

// Checking if the Task Due Date input value is not empty.
  if (dueDate.value === "") {
     dueDate.classList.remove('is-valid');
     dueDate.classList.add('is-invalid');
  } else {
     dueDate.classList.add('is-valid');
     dueDate.classList.remove('is-invalid');
     validationFail++;
  }

// Checking if the Task Status input value is not empty.
  if (taskStatus === ""){
     taskStatus.classList.remove('is-valid');
     taskStatus.classList.add('is-invalid');}
  else {
     taskStatus.classList.add('is-valid');
     taskStatus.classList.remove('is-invalid');
     validationFail++;
  }


  if (validationFail > 0) {
    validationFail = 0;
}

}; // End of validFormFieldInput function

// Checking the date input only allows present and future dates
let dateTime = new Date();
let day = dateTime.getDate();
let month = dateTime.getMonth() + 1;
let year = dateTime.getUTCFullYear();

if (day < 10){
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

minDate = year + "-" + month + "-" + day;

document.querySelector("#dueDate").setAttribute("min", minDate);
console.log(minDate);

