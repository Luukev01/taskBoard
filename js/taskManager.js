/* Part - 7 creating a task */

let createTaskHtml = (name, description, assignedTo, dueDate, id, statusId) => {
  const buttonsDone = '<button class="card-button delete-button">Delete</button>';
  const buttonsNotDone = `
  <button class="card-button edit-button">Edit</button>
  <button class="card-button done-button">Done</button>
  `;
  templateHtml = `
  <div class="row" data-task-id=${id}>
    <div class="task-container" >
          <div class="card-header">
            <h5>${name}</h5>
          </div>
          <div class="card-body">
            <p class="description">
            <small class>${description}</small></p>
            <p class="assigned-text">
              <small class>Assigned to: ${assignedTo}</small>
            </p>
            <p class="assigned-text">
              <small class> Due: ${dueDate}</small>
            </p>
          </div>
          <div class="card-footer">
          ${statusId === "4" ?  buttonsDone : buttonsNotDone }
          </div>
        </div>
      </div>
    <br/>
  `;

  return templateHtml;
};

/* Test */

/* var taskHtml = createTaskHtml('Washing', 'Doing Laundry', 'Kevin', 'Now')
console.log(taskHtml); */

/* Task Manager Class */
class TaskManager {
  constructor(currentId = 0) {
    this.taskArr = [];
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
    this.taskArr.push(task1);
  }
  updateTask(name, description, assignedTo, dueDate, status, id) {
    console.log("updateTask", id);
    let task = this.getTaskById(id);
    console.log(task);
    task.name = name;
    task.description = description;
    task.assignedTo = assignedTo;
    task.dueDate = dueDate;
    task.status = status;
 
  }

  getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i < this.taskArr.length; i++) {
      let task = this.taskArr[i];
      if (this.taskArr[i].id == taskId) {
        foundTask = this.taskArr[i];
      }
    }
    return foundTask;
  }

  renderList = (statusId, listId) => {
    let tasksHtmlList = [];
    let filteredTasks = this.taskArr.filter((task) => task.status == statusId);
    console.log(filteredTasks);
    for (let i = 0; i < filteredTasks.length; i++) {
      let task = filteredTasks[i];
      const date = new Date(task.dueDate);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;

      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.id,
        task.status
      );

      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join("\n");

    const tasksList = document.querySelector(listId);
    tasksList.innerHTML = tasksHtml;
  };

  render = () => {
    //status: todo
    this.renderList("1", "#todo-list");

    //status: in progress
    this.renderList("2", "#progress-list");

    //status: review
    this.renderList("3", "#review-list");

    //status: review
    this.renderList("4", "#done-list");
  };

  /* creating the render method */

  // Task 9: Persisting Tasks to LocalStorage

  save() {
    const tasksJson = JSON.stringify(this.taskArr);
    localStorage.setItem("tasks", tasksJson);

    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
  }

  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJson = localStorage.getItem("tasks");
      this.taskArr = JSON.parse(tasksJson);
    }
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId");
      this.currentId = Number(currentId);
    }
  }

  /* task 10 */

  deleteTask = (taskId) => {
    let newTasks = [];

    for (let i = 0; i < this.taskArr.length; i++) {
      const task = this.taskArr[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this.taskArr = newTasks;
  };

  editTask = (taskId) => {
   let task = this.getTaskById(taskId);
    const taskTitle = document.querySelector("#taskTitle");
    const description = document.querySelector("#textDes");
    const assignedTo = document.querySelector("#assignTo");
    const dueDate = document.querySelector("#dueDate");
    const status = document.querySelector("#taskStatus");
    const hiddenId = document.querySelector("#hiddenId");
    taskTitle.value = task.name;
    description.value = task.description;
    assignedTo.value = task.assignedTo;
    dueDate.value = task.dueDate;
    status.value = task.status;
    hiddenId.value = task.id;
  };

}
