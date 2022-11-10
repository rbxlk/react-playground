import { MantineProvider } from "@mantine/core";
import Form from "./Form";
import Gallery from "./Gallery";

export default function App() {
    return(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Gallery/>
            <Form/>
        </MantineProvider>
    )
}