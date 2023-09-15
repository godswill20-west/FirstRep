import { useState } from "react";
import classes from './todo.module.css'

export default function Todo(props) {
    // declear a state is completed to false
    const [isCompleted,setIsCompleted]=useState(false)
    // const [isCompleted,setIsCompleted]=useState(true)

    // set create a function to change the value of our state
    function completedHandle(){
        console.log(props.todo);
        // set isCompleted state to true
        setIsCompleted(true)
    }

    // set create a function to change the value of our state
    function notCompletedHandle() {
        setIsCompleted(false)
    }
    return(
        <div className={isCompleted && classes.completed} >
            <li>{props.todo}</li>
            <button onClick={completedHandle}>completed</button>
            <button onClick={notCompletedHandle}>Not Completed</button>
        </div>
    )
}

// assignment
// 