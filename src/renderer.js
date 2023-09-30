import './index.css';
window.$ = window.jQuery = require('jquery')
const ipc = require('electron').ipcRenderer

let currentstatus=true;

const ThemeParser = (JSONstring) => {
  let root = document.querySelector(':root');
  let status = {"status": true};
  let parsedResponse;
  let ValidKeys = [
    "bg-color-primary", 
    "ui-color-primary", "ui-color-secondary", "ui-color-tertiary", "ui-color-quaternary",
    "navbar-color",
    "active", "inactive","successful","unsuccessful",
    "banner-ui-color",
    "heading-color-1", "paragraph-color-1",
    "active-outline-thickness",
    "global-border-radius", "global-transition-time",
    "background-image", "background-image-blur",
    "font"
  ]
  try {
    console.log('parse begun');
    parsedResponse = JSON.parse(JSONstring);
  } catch {
    console.log('parse failed')
    status = {"status": false, "reason": "Parse Error: JSON file invalid"};
  }
  let keys = Object.keys(parsedResponse);
  // console.log(parsedResponse);
  for (let i = 0; i < keys.length; i++) {
    if (status.status) {
      if (!ValidKeys.includes(keys[i])) {
        status = {"status": false, "reason": `Parse Error: "${keys[i]}" is not a valid key`};
        break;
      } else {
        root.style.setProperty(`--${keys[i]}`, parsedResponse[keys[i]]);
        status = {"status": true};
      }
    } 
  }
  if (!status.status) {
    let response = getText(`https://raw.githubusercontent.com/M1dnight-ofcl/Todura-Themes/main/default/theme-d.json`);
    ThemeParser(response);
    console.error(status.reason);
  } else {
    console.log('Theme Successfully Loaded');
  }
}

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
  // console.log(txt);
  let response = getText(`https://raw.githubusercontent.com/M1dnight-ofcl/Todura-Themes/main/${txt}`);
  ThemeParser(response);
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
  let customUrl = document.getElementById('customUrl');
  let response = getText(customUrl.value);
  // isValid = true;
  console.log(customUrl.value);
  try {
    ThemeParser(response);
  } catch {
    console.error('bad url');
    document.getElementById('invalidUrl').style.display = 'block';
    setTimeout(() => { document.getElementById('invalidUrl').style.display = 'none'; }, 2000);
  }
})

import './banners.jsx'
import './app.jsx';