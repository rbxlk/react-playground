import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import { contacts } from "./data";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask(){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return(
        <>
            <TextInput
                placeholder="Your task..."
                label="Add a task"
                size="sm"
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <Button
                onClick={(e) => {
                    setText('');
                    dispatch({
                        type: 'added',
                        text: text,
                        id: contacts.length
                    })
                }}
            > Add </Button>
        </>
    )
}