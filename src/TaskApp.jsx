import { Title } from "@mantine/core";
import AddTask from "./TaskAdd";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TaskApp(){
    return(
        <TasksProvider>
            <Title order={1}> A day in Japan</Title>
            <AddTask />
            <TaskList />
        </TasksProvider>
    )
}