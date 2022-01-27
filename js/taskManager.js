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
