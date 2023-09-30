import * as React from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { ipcMain } from 'electron'


const List = () => {
    let items = [];
    // example item:
    // {
    //     "index": 0,
    //     "name": "Hello, World #1",
    //     "desc": "1: code, 2: code",
    // },
    const [Tasks, setTasks] = useState(
        items
    );
    document.getElementById("createTask").addEventListener("click", (e) => {
        e.preventDefault();
        let nameElement = document.getElementById("newTaskName");
        let descElement = document.getElementById("newTaskDesc");
        let name = nameElement.value;
        let desc = descElement.value;
        console.log(`creating item with name: ${name} and desc: ${desc}`)
        setTasks(Tasks.concat([{"index":(Tasks.length+1) ,"name":name, "desc":desc}]));
        // localStorage.setItem('TaskSave', Tasks); 
        // nameElement.value = "";
        // descElement.value = "";
        document.getElementById("NewTaskWindow").style.display = "none";
        // window.location.reload();
    });
    const Item = (prop) => {
        const onLoadAction = () => {
            // console.log('checkmark loaded')
            document.getElementById(`item${prop.index}checkbox`).classList.remove('SelectedItemCheckbox');
            document.getElementById(`item${prop.index}checkbox`).classList.add("UnselectedItemCheckbox");
        }
        const onClickAction = () => {
            console.log("checkbox click");
            let cb = document.getElementById(`item${prop.index}cb`);
            let checkbox = document.getElementById(`item${prop.index}checkbox`);
            console.log(cb.checked)
            checkbox.classList.remove('SelectedItemCheckbox')
            checkbox.classList.remove('UnselectedItemCheckbox')
            if (cb.checked) {
                checkbox.classList.add('SelectedItemCheckbox')
            } else if (!cb.checked) {
                checkbox.classList.add('UnselectedItemCheckbox')
            } else {
                console.error('"cb.checked" must be bool');
            }
        }
        useEffect(() => {
            onLoadAction();
        });
        /*
        const openEditMenu = (index) => {
            console.log('pressed "edittask" button');
            let visible = document.getElementById("EditTaskWindow").style.display === "block";
            if (visible) {
                document.getElementById("EditTaskWindow").style.display = "none";
                console.log('closed edittask window');
            } else if (!visible) {
                document.getElementById("EditTaskWindow").style.display = "block";
                console.log('opened edittask window');
            }
        }
        document.getElementById("editTask").addEventListener("click", (e) => {
            e.preventDefault();
            let nameElement = document.getElementById("EditTaskName");
            let descElement = document.getElementById("EditTaskDesc");
            let name = nameElement.value;
            let desc = descElement.value;
            // console.log(`editing item${prop.index} with name: ${name} and desc: ${desc}`)
            setTasks(
                Tasks.filter(t => t.index < prop.index).concat(
                [{"index":(prop.index) ,"name":name, "desc":desc}],
                Tasks.filter(t => t.index > prop.index))
            );
            // localStorage.setItem('TaskSave', Tasks); 
            // nameElement.value = "";
            // descElement.value = "";
            document.getElementById("EditTaskWindow").style.display = "none";
            // window.location.reload();
        });
        */
        const deleteTask = (index) => {
            console.log(`deleting item${prop.index}`);
            // document.getElementById(`item${prop.index}`).remove()
            setTasks(Tasks.filter(t => t.index !== index))
            // localStorage.setItem('TaskSave', Tasks); 
        }
        return (
            <div className='Item' id={`item${prop.index}`}>
                <div className='ItemCheckbox' id={`item${prop.index}checkbox`} onClick={() => onClickAction()}>
                    <input type="checkbox" id={`item${prop.index}cb`}></input>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className='ItemTextWrapper'>
                    <h1>{prop.taskName}</h1>
                    <p>{prop.taskObjective}</p>
                </div>
                <div className="ItemActionContainer">
                    {/* <span onClick={() => openEditMenu(prop.index)} id={`item${prop.index}edit`} className="ItemAction"><FontAwesomeIcon icon={faPenToSquare} /></span> */}
                    <span onClick={() => deleteTask(prop.index)} id={`item${prop.index}del`} className="ItemAction"><FontAwesomeIcon icon={faTrash} /></span>
                </div>
            </div>
        )
    }
    return (
        <>
            {/* EXAMPLE: <Item index="0" taskName="Hello, World! #1" taskObjective="1: code, 2: code"/> */}
            {Tasks.map((item) => (
                <Item key={item.index} index={item.index} taskName={item.name} taskObjective={item.desc} />
            ))}
        </>
    )
}

export default List;

const root = createRoot(document.getElementById("todo-list"));
root.render(<List />);