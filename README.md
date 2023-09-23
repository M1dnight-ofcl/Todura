as a note, this `README` takes advnatage of HTML, styling, and SVGs to make it look nice. The issue being github won't render the styling. Please download the file locally and then read using VSCode's built in markdown reader for the best experience <br>- M1dnightDev 

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

You can delete a task at anytime using the following buttons: <br><br>
<svg xmlns="http://www.w3.org/2000/svg" height="5vmin" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="5vmin" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
<br><br>
The delete button can be used to remove tasks when they are complete, and the edit button can be used to fix issues is there is a typo or the task has changed.

### Future Addition
As for the future of Todura, currently in the works as of version 0.3 are a couple of planned fatures. These include:
- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg> Theme system (with boilerplate)
- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg> Scalable GUI
- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> Task Edit Feature
- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Auto Task Saving