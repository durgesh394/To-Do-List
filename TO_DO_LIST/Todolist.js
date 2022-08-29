import React, { useState } from 'react'
import "./Todolist.css";

const Todolist = () => {
    const [Input, setInput] = useState('');
    const [Task, setTask] = useState([]);
    const [Show, setShow] = useState(false);
    const [EditIndex, setEditIndex] = useState('')

    //Add Task
    const AddHandler = () => {
        console.log(Task)
        setTask(Task => [...Task, Input]);
        setInput("")
    }

    //Delete Task
    const TodolistDelete = (ind) => {

        const deltr = Task.splice(ind, 1);
        console.log(deltr)
        setTask(Task => [...Task]);
        //console.log(ind)
    }

    //Edit Task

    const TodolistEdit = (ind) => {

        setInput(Task[ind]);
        setShow(true)
        setEditIndex(ind)

    }
    const TodoEditHandler = () => {
        console.log(EditIndex)
        Task.splice(EditIndex, 1, Input);
        setTask([...Task]);
        setInput("")
        setShow(false);
    }



    return (
        <>
            <div className="allitem">
                <div>
                    <div className="todoHeaderCon">
                        <div> <h1 className='HeaderTodolist'>TODO-List</h1>
                            <input type="text" placeholder='Enter Todo..' value={Input} onChange={(e) => { setInput(e.target.value) }} className="TOdolistInput" />
                            {
                                !Show ? <button className='todolistBtn' onClick={() => { AddHandler() }}>Add</button> :
                                    <button className='todolistBtn' onClick={() => TodoEditHandler()}>Edit</button>
                            }
                        </div>
                    </div>
                    <ul>
                        {
                            Task.map((item, index) => {
                                return (
                                    <>
                                        <div className="ItemContainer">
                                            <div>
                                                <span>{item}</span>
                                            </div>

                                            <div>
                                                <span id='delete' onClick={() => TodolistDelete(index)}><i className="fa-solid fa-trash dlt"></i></span>
                                                <span id='edit' onClick={() => TodolistEdit(index)}><i className="fa-solid fa-pen-to-square edt"></i></span>
                                            </div>
                                        </div>

                                        <br />
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Todolist
