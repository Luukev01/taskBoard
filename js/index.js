const myTask = new TaskManager();
const submitBtn = document.querySelector("#submit-edit");

// console.log(myTask.task);
submitBtn.addEventListener("click", () => {
  myTask.addTask("yujin", "description", " assignedTo", "dueDate", "in review");
  console.log(myTask.task);
});