// Task 4: Task Form Inputs Validation

const newTaskForm = document.querySelector("#new-task-form");

newTaskForm.addEventListener("submit", (event) => {
  const newTaskName = document.querySelector("#taskTitle");
  const newDescription = document.querySelector("#textDes");
  const assignedTo = document.querySelector("#assignTo");
  const dueDate = document.querySelector("#dueDate");
  const status = document.querySelector("#taskStatus");
  let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();
  console.log("Task Name :" + newTaskName.value.length);
  console.log("Task Description :" + newDescription.value.length);
  console.log("Task Assigned To :" + assignedTo.value.length);
  console.log("Task Due Date :" + dueDate.value);
  console.log("Task Status:" + status.value);

  // Form validation for Task Name Field min length 5
  if (newTaskName.value.length > 5) {
    newTaskName.classList.add("is-valid");
    newTaskName.classList.remove("is-invalid");
  } else {
    newTaskName.classList.add("is-invalid");
    newTaskName.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  if (newDescription.value.length > 5) {
    newDescription.classList.add("is-valid");
    newDescription.classList.remove("is-invalid");
  } else {
    newDescription.classList.add("is-invalid");
    newDescription.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Assigned Field min length 5
  if (assignedTo.value.length > 5) {
    assignedTo.classList.add("is-valid");
    assignedTo.classList.remove("is-invalid");
  } else {
    assignedTo.classList.add("is-invalid");
    assignedTo.classList.remove("is-valid");
    validationFail++;
  }  
  // Form validation for Due Date Field not empty
 
  if (dueDate.value) {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
  } else {
    dueDate.classList.add("is-invalid");
    dueDate.classList.remove("is-valid");
    validationFail++;
  }
  // Form validation for Task Status Field not empty
  if (status.value) {
    status.classList.add("is-valid");
    status.classList.remove("is-invalid");
  } else {
    status.classList.add("is-invalid");
    status.classList.remove("is-valid");
    validationFail++;
  }

  if (validationFail > 0) {
    validationFail = 0;
    return;
  }
});


// The date input only allows present and future dates
let dateTime = new Date();
let day = dateTime.getDate();
let month = dateTime.getMonth() + 1;
let year = dateTime.getUTCFullYear();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

minDate = year + "-" + month + "-" + day;

document.querySelector("#dueDate").setAttribute("min", minDate);
console.log(minDate);

