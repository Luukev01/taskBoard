/* Part - 7 creating a task */

let createTaskHtml = (name, description, assignedTo, dueDate) => {
  templateHtml = `
    <div class="task-container" data-task-id="1">
          <div class="card-header">
            <h5>${name}</h5>
          </div>
          <div class="card-body">
            <p class="description">${description}</p>
            <p class="assigned-text">
              <small class>Assigned to: ${assignedTo}</small>
            </p>
            <p class="assigned-text">
              <small class> Due: ${dueDate}</small>
            </p>
          </div>
          <div class="card-footer">
            <button class="card-button edit-button" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Edit</button>
            <button class="card-button delete-button">Delete</button>
          </div>
        </div>
  `

  return templateHtml
}

/* Test */

/* var taskHtml = createTaskHtml('Washing', 'Doing Laundry', 'Kevin', 'Now')
console.log(taskHtml); */

/* Task Manager Class */
class TaskManager {
  constructor(currentId = 0) {
    this.task = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId++;
    const task1 = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.task.push(task1);
  }

}

/* creating the render method */


render = () => {
  let tasksHtmlList = [];

  for (let i=0; i<this.tasks.length; i++) {
    let task = this.tasks[i];
    const date = new Date(task.dueDate)
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${dateObject.getFullYear()}`
    const taskHtml = createTaskHtml(
      task.name,
      task.description,
      task.assignedTo,
      formattedDate);

      tasksHtmlList.push(taskHtml);
  }
  const tasksHtml = tasksHtmlList.join("\n");

  const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = tasksHtml;

};

