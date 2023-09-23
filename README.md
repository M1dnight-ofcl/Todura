# Welcome to Todura
### What is Todura?
Todura is a open-source todo app built in Javascript using Electron, Vite, and React to create a responsive and clean ui that works on any screen. The todo app is still in very early stages of development, but it has enough functionality noting it's relativly new.
### How do I use Todura?
To get started with Todura, press the:<br>
<button style="
  height: 5.5vmin;
  width: 100%;
  background-color: #3b3b3b;
  border: 0vmin solid #7b04f9;
  box-sizing: border-box;
  border-radius: 1vmin;
  color: #fff;
  cursor: pointer;
  transition: 0.35s;
  font-family: 'JetBrains Mono', sans-serif;">New Task
</button>
button as shown in the sidebar
<br>
This button will load a gui that looks like this: <br>
<div style="
height: auto;
width: 100%;
background: #282828;
padding: 3.5vmin;
margin: 0;
border-radius: 1vmin;
z-index: 98;
border: 0.25vmin solid #3b3b3b;
box-sizing: border-box;
">
    <h3>New Task</h3>

Task Name:<br>
<input type="text" style="
width: 100%;
height: 4vmin;
border: 0.25vmin solid #3b3b3b;
outline: none;
margin-bottom: 1.5vmin;
border-radius: 1vmin;
background: #3b3b3b;
color: #fff;
box-sizing: border-box;
transition: 0.35s;
cursor: text;
padding: 3vmin;
" /><br>
Task Objective:<br>
<input type="text" style="
width: 100%;
height: 4vmin;
border: 0.25vmin solid #3b3b3b;
outline: none;
margin-bottom: 1.5vmin;
border-radius: 1vmin;
background: #3b3b3b;
color: #fff;
box-sizing: border-box;
transition: 0.35s;
cursor: text;
padding: 3vmin;
" /><br><br><br>
<button style="
height: 5.5vmin;
width: 100%;
background-color: #3b3b3b;
border: 0vmin solid #7b04f9;
box-sizing: border-box;
border-radius: 1vmin;
color: #fff;
cursor: pointer;
transition: 0.35s;
font-family: 'JetBrains Mono', sans-serif;">Create Task
</button>
</div>
<br>
It's as easy as filling in the details of your task and then saving!

You can delete a task at anytime using the following buttons: <br>
<svg xmlns="http://www.w3.org/2000/svg" height="5vmin" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="5vmin" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
<br>
The delete button can be used to remove tasks when they are complete, and the edit button can be used to fix issues is there is a typo or the task has changed.