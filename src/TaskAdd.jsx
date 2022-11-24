import { useState } from "react";
import { contacts } from "./data";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask(){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return(
        <>
            <input
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <button
                onClick={(e) => {
                    setText('');
                    dispatch({
                        type: 'added',
                        text: text,
                        id: contacts.length
                    })
                }}
            > Add </button>
        </>
    )
}