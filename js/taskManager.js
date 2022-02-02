/* Part - 7 creating a task */

let createTaskHtml = (name, description, assignedTo, dueDate) => {
  templateHtml = `
  <div class="row">
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
            <button type="button" class="card-button edit-button" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Edit</button>
            <button type="button" class="card-button delete-button">Delete</button>
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
  render = () => {
    let tasksHtmlList = [];

    for (let i = 0; i < this.taskArr.length; i++) {
      let task = this.taskArr[i];
      const date = new Date(task.dueDate);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1
        }/${date.getFullYear()}`;
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate
      );

      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join("\n");

    const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = tasksHtml;
  };

  /* creating the render method */


  // Task 9: Persisting Tasks to LocalStorage 

  save() {

    const tasksJson = JSON.stringify(this.taskArr);
    localStorage.setItem('tasks', tasksJson);

    const currentId = String(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  load() {

    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.taskArr = JSON.parse(tasksJson);
    }
    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = Number(currentId);
    }
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
}
