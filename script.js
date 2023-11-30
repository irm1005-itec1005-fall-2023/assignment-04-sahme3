/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */




// Constants
const appID = "app";
const headingText = "Task List ✏️";




// DOM Elements
let appContainer = document.getElementById(appID);


//description
const description = document.createElement("p");
  description.textContent = "This To-Do List application is a user-friendly tool for efficient task management. Mark tasks as complete and stay organized to enhance productivity and reduce stress, providing a clear pathway to achieving daily goals.";
  appContainer.appendChild(description);


// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }
  updateCount();
}

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.textContent = headingText;
  appContainer.appendChild(h1);

  //  input for new tasks
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.textContent = "Enter a new task";
  taskInput.placeholder = "Enter a new task";
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
  appContainer.appendChild(taskInput);




// Category select
const categorySelect = document.createElement("select");
categorySelect.innerHTML = `
  <option value="" disabled selected>Select a category</option>
  <option value="personal">Personal</option>
  <option value="home">Home</option>
  <option value="family">Family</option>
  <option value="friends">Friends</option>
  <option value="health">Health</option>
  <option value="fitness">Fitness</option>
  <option value="finance">Finance</option>
  <option value="shopping">Shopping</option>
  <option value="chores">Chores</option>
  <option value="appointments">Appointments</option>
  <option value="errands">Errands</option>
  <option value="vacation">Vacation</option>
  <option value="school">School</option>
  <option value="work">Work</option>
  <option value="study">Study</option>
  <option value="other">Other</option>
`;
appContainer.appendChild(categorySelect);

    
    // button to add task
    const addButton = document.createElement("button");
    addButton.textContent = "+ Add Task";
    addButton.addEventListener("click", addTask);
    appContainer.appendChild(addButton);

    
// Create a message for no tasks
const noTasksMessage = document.createElement("p");
noTasksMessage.id = "noTasksMessage";
appContainer.appendChild(noTasksMessage);

   //counter
   const countText = document.getElementById("count");
   appContainer.appendChild(countText);
   
  
// counter function
   function updateCount() {
    const taskList = document.querySelector("ul");
    countText.textContent = taskList.children.length;
    if (taskList.children.length > 0) {
      countText.textContent = "Total Tasks: " + taskList.children.length;
    }
    else {
      countText.innerHTML = "";
    }
     if (taskList.children.length === 0) {
      noTasksMessage.textContent = "No tasks yet, time to change that!";
    }
    else {
      noTasksMessage.textContent = "";
    }
  }



    // Create a ul for the task list
    const taskList = document.createElement("ul");
    appContainer.appendChild(taskList);


  // Init complete
  console.log("App successfully initialised");

  


// add a new task
function addTask() {
  const taskInput = appContainer.querySelector("input");
  const taskList = appContainer.querySelector("ul");
        if (taskInput.value === "") {
          alert("Please enter a task");
          return;

      }
      if (categorySelect.value === "") {
        alert("Please select a category");
        return;
      }

      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput.value;
      taskItem.classList.add("task-added");


      // Add category to task
  const selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
const categoryDiv = document.createElement("div");
categoryDiv.textContent = `(${selectedCategory})`;
categoryDiv.style.color = "gray";
categoryDiv.style.fontSize = "18px";
categoryDiv.style.display = "inline-block"; 
categoryDiv.style.marginLeft = "5px"; 
taskItem.appendChild(categoryDiv);
      


      // Mark as Complete button
      const completeButton = document.createElement("button");
      completeButton.textContent = "Mark as Complete";
      completeButton.addEventListener("click", markComplete);
      taskItem.appendChild(completeButton);
  
      //Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", deleteTask);
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
  
      // Clear 
      taskInput.value = "";
      categorySelect.value = "";

      
      updateCount();
  }

  

  // mark a task as complete
  function markComplete(event) {
      const taskItem = event.target.parentElement;
     
  
  // Move to the bottom of the list
  taskList.appendChild(taskItem);

  // Add the 'completed' class
  taskItem.classList.add("completed");

  //✅ 
  const completedMark = document.createElement("span");
  completedMark.textContent = " ✅";
  completedMark.style.color = "green";
  taskItem.appendChild(completedMark);


    taskItem.classList.add("completed"); 
    taskItem.removeChild(event.target);
    updateCount();
  }
  

  
  //delete a task
  function deleteTask(event) {
      const taskItem = event.target.parentElement;
      taskItem.remove();


      updateCount();
  }

  

// Delete All Tasks button
const deleteAllButton = document.createElement("button");
deleteAllButton.textContent = "Clear All Tasks";
deleteAllButton.addEventListener("click", deleteAllTasks);
appContainer.appendChild(deleteAllButton);

// Delete all tasks function
function deleteAllTasks() {
  const taskList = appContainer.querySelector("ul");
  taskList.innerHTML = ""; // Remove all tasks from the task list
 
  updateCount();
}



  
inititialise();


//*reference: https://www.w3schools.com */