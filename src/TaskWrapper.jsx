import { Title } from "@mantine/core";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TaskWrapper(){
    return(
        <TasksProvider>
            <Title order={1}/>
            <TaskList />
        </TasksProvider>
    )
}