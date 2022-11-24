import { Button, Checkbox, List, TextInput } from "@mantine/core";
import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";

export default function TaskList() {
    const tasks = useTasks();
    return(
        <List>
            {tasks.map(task => (
                <List.Item key={task.id} >
                    <Task task={task}/>
                </List.Item>
            ))}
        </List>
    )
}

function Task({task}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <TextInput
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        })
                    }}
                />
                <Button onClick={() =>setIsEditing(false)}>
                    Save
                </Button>
            </>
        )
    } else {
        taskContent = (
            <>
                <Button size="sm" onClick={() => setIsEditing(true)}>
                    Edit
                </Button>
            </>
        );
    }
    return(
        <>
            <Checkbox
                label={task.text}
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task, 
                            done: e.target.checked
                        }
                    })
                }}
            />
            <div style={{display: "inline-block"}}>
                {taskContent}
                <Button variant="default" onClick={()=>{
                    dispatch({
                        type: 'deleted',
                        id: task.id
                    });
                }}>
                    Delete
                </Button>
            </div>
        </>
    )
}