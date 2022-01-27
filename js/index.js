const myTask = new TaskManager();
const submitBtn = document.querySelector("#submit-edit");

const form = document.querySelector("#new-task-form");

const taskName = document.querySelector("#title");
const description = document.querySelector("#textDes");
const assignedTo = document.querySelector("#assignTo");
const dueDate = document.querySelector("#dueDate");
const taskStatus = document.querySelector("#taskStatus");

// console.log(myTask.task);
// submitBtn.addEventListener("click", () => {
//   myTask.addTask("yujin", "description", " assignedTo", "dueDate", "in review");
//   console.log(myTask.task);
// });

submitBtn.addEventListener("click", (event) => {
  if (validFormFieldInput(event)) {
    myTask.addTask(
      taskName.value,
      description.value,
      assignedTo.value,
      dueDate.value,
      taskStatus.value
    );
    console.log(myTask.task);
    taskName.value = "";
    description.value = "";
    assignedTo.value = "";
    dueDate.value = "";
    taskStatus.value = "";
  }
});

// Task 4: Task Form Inputs Validation

// Function to valid all input of the add Task form

function validFormFieldInput(event) {
  let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();
  // console.log("Task Name :" + taskName.value.length);
  // console.log("Task Description :" + description.value.length);
  // console.log("Task Assigned To :" + assignedTo.value.length);
  // console.log("Task Due Date :" + dueDate.value);
  // console.log("Task Status:" + taskStatus.value);

  // Checking if the Task Name input value is more than 5 characters.
  console.log(taskName.value);
  if (taskName.value.trim().length < 5) {
    taskName.classList.remove("is-valid");
    taskName.classList.add("is-invalid");
    validationFail++;
  } else {
    taskName.classList.add("is-valid");
    taskName.classList.remove("is-invalid");
  }

  // Checking if the Task Description input value is more than 5 characters.
  if (description.value.length < 5 || description.value.length > 50) {
    description.classList.remove("is-valid");
    description.classList.add("is-invalid");
    validationFail++;
  } else {
    description.classList.add("is-valid");
    description.classList.remove("is-invalid");
  }

  // Checking if the Assigned To value is more than 5 characters.
  if (assignedTo.value.length < 5) {
    assignedTo.classList.remove("is-valid");
    assignedTo.classList.add("is-invalid");
    validationFail++;
  } else {
    assignedTo.classList.add("is-valid");
    assignedTo.classList.remove("is-invalid");
  }

  // Checking if the Task Due Date input value is not empty.
  if (dueDate.value === "") {
    dueDate.classList.remove("is-valid");
    dueDate.classList.add("is-invalid");
    validationFail++;
  } else {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
  }

  // Checking if the Task Status input value is not empty.
  if (taskStatus === "") {
    taskStatus.classList.remove("is-valid");
    taskStatus.classList.add("is-invalid");
    validationFail++;
  } else {
    taskStatus.classList.add("is-valid");
    taskStatus.classList.remove("is-invalid");
  }

  if (validationFail > 0) {
    return false;
  }
  return true;
} // End of validFormFieldInput function

// Checking the date input only allows present and future dates
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

const minDate = year + "-" + month + "-" + day;
console.log(minDate);
