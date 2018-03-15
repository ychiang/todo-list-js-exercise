
// Create a new task using OOP
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title, 
    description: description, 
    complete: false, 

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "Gonna smell clean!");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(task1.title);
console.log(task1.description);

