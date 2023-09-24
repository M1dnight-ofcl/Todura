import './index.css';
const ipc = require('electron').ipcRenderer

document.getElementById("settingsButton").addEventListener('click', (e) => {
  e.preventDefault();
  console.log('pressed "settings" button');
  let visible = document.getElementById("settingsMenu").style.display === "block";
  if (visible) {
    document.getElementById("settingsMenu").style.display = "none";
    console.log('closed settings window');
  } else if (!visible) {
    document.getElementById("settingsMenu").style.display = "block";
    console.log('opened settings window');
  }
});
document.getElementById("closeSettings").addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("settingsMenu").style.display = "none";
  console.log('closed settings window');
});

document.getElementById("close").addEventListener("click", (e) => {
  e.preventDefault();
  ipc.send('close');
});

document.getElementById("newTodoItem").addEventListener("click", (e) => {
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
});

document.getElementById("NewTaskClose").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("NewTaskWindow").style.display = "none";
});

import './app.jsx';