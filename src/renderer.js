import './index.css';
const ipc = require('electron').ipcRenderer

const closeApp = (e) => {
  e.preventDefault();
  ipc.send('close');
}

const newTask = (e) => {
  e.preventDefault();
  console.log('pressed "newtask" button');
  let visible = document.getElementById("NewTaskWindow").style.display === "block";
  if (visible) {
    document.getElementById("NewTaskWindow").style.display = "none";
    console.log('closed newtask window');
  } else if (!visible) {
    document.getElementById("NewTaskWindow").style.display = "block";
    console.log('opened newtask window');
  }
}

document.getElementById("close").addEventListener("click", closeApp);
document.getElementById("newTodoItem").addEventListener("click", newTask);
document.getElementById("NewTaskClose").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("NewTaskWindow").style.display = "none";
});

import './app.jsx';