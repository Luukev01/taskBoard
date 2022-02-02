const taskManager = new TaskManager();

taskManager.load(); 
taskManager.render(); 

const submitBtn = document.querySelector("#submit-edit");

// console.log(myTask.task);
// submitBtn.addEventListener("click", () => {
//   myTask.addTask("yujin", "description", " assignedTo", "dueDate", "in review");
//   console.log(myTask.task);
// });

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
    return;
  } else {
    taskManager.addTask(
      newTaskName.value,
      newDescription.value,
      assignedTo.value,
      dueDate.value,
      status.value
    );
    taskManager.load();
    taskManager.render();
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

const minDate = year + "-" + month + "-" + day;

document.querySelector("#dueDate").setAttribute("min", minDate);
console.log(minDate);

/*clicking event for edit/delete */
const taskList = document.querySelector("#task-list");

taskList.addEventListener("click", (event) => { 

  
  if (event.target.classList.contains("delete-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);

      taskManager.deleteTask(taskId);

      taskManager.save();

      taskManager.render();
    }
  });
