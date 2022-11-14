import { MantineProvider } from "@mantine/core";
import { AddRemoveInsertArray, CounterList, ShapeEditor } from "./ArrayStates";
import Form from "./Form";
import Gallery from "./Gallery";

export default function App() {
    return(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Gallery/>
            <Form/>
            <AddRemoveInsertArray/>
            <CounterList />
            {/* <ShapeEditor /> Currently issues with shapes appearing */} 
        </MantineProvider>
    )
}