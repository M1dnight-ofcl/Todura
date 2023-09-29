import './index.css';
window.$ = window.jQuery = require('jquery')
const ipc = require('electron').ipcRenderer

let currentstatus=true;

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
function getText(filePath) {
  return $.ajax({
        type: "GET",
        url: filePath,
        async: false,
        error: () => {currentstatus=false}
    }).responseText;
}
document.getElementById("NewTaskClose").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("NewTaskWindow").style.display = "none";
});
document.getElementById("EditTaskClose").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("EditTaskWindow").style.display = "none";
});
document.getElementById("themes").addEventListener("change", (e) => {
  let txt = e.currentTarget.options[e.currentTarget.selectedIndex].value;
  if (txt === "custom") {
    return;
  }
  let root = document.querySelector(':root');
  // console.log(txt);
  let isValid = true;
  let response = getText(`https://raw.githubusercontent.com/M1dnight-ofcl/Todura-Themes/main/${txt}`);
  // try { 
  //   isValid= Boolean(new URL(urlString)); 
  // }
  // catch(e){ 
  //   isValid= false; 
  // }
  if (!isValid) return;
  let parsedResponse = JSON.parse(response);
  let keys = Object.keys(parsedResponse);
  console.log(parsedResponse);
  for (let i = 0; i < keys.length; i++) {
    // console.log(`setting --${keys[i]} to ${parsedResponse[keys[i]]}`)
    root.style.setProperty(`--${keys[i]}`, parsedResponse[keys[i]]);
  }
})
document.getElementById('Uiscale').addEventListener('input', (e) => {
  e.preventDefault();
  let root = document.querySelector(':root');
  let value = e.currentTarget.value / 10;
  console.log(value);
  root.style.setProperty(`--ui-scale`, value);
})
document.getElementById('submitCustomUrl').addEventListener('click', (e) => {
  e.preventDefault();
  let root = document.querySelector(':root');
  let customUrl = document.getElementById('customUrl');
  let response = getText(customUrl.value);
  // isValid = true;
  console.log(customUrl.value);
  try {
    let parsedResponse = JSON.parse(response);
    let keys = Object.keys(parsedResponse);
    console.log(parsedResponse);
    for (let i = 0; i < keys.length; i++) {
      // console.log(`setting --${keys[i]} to ${parsedResponse[keys[i]]}`)
      root.style.setProperty(`--${keys[i]}`, parsedResponse[keys[i]]);
    }
    document.getElementById('themes').value = "custom";
    document.getElementById('successfulUrl').style.display = 'block';
    setTimeout(() => { document.getElementById('successfulUrl').style.display = 'none'; }, 2000);
  } catch {
    console.error('bad url');
    document.getElementById('invalidUrl').style.display = 'block';
    setTimeout(() => { document.getElementById('invalidUrl').style.display = 'none'; }, 2000);
  }
})


import './app.jsx';