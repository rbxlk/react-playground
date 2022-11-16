import { AppShell, Header, MantineProvider, Navbar, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 200 }} height={500} p="xs">
                        <Navbar.Section grow mt="xs" style={{display:"flex", flexDirection: "column"}}>
                            {/* THIS SHOULD BE MADE INTO A COMPONENT TO DRY IT UP */}
                            <Text component={Link} variant="link" to="/gallery">Gallery</Text>
                            <Text component={Link} variant="link" to="/form">Form</Text>
                            <Text component={Link} variant="link" to="/arrays">Arrays</Text>
                            <Text component={Link} variant="link" to="/counters">Counter List</Text>
                            <Text component={Link} variant="link" to="/shapes">Shape Editor</Text>
                            <Text component={Link} variant="link" to="/bucketlist">Bucket List</Text>
                            <Text component={Link} variant="link" to="/travelplan">Travel Plan</Text>
                        </Navbar.Section>
                        <Navbar.Section mt="xs">
                            <Text variant="text">by Rob Luck</Text>
                        </Navbar.Section>
                    </Navbar>}
                header={
                <Header height={60} p="xs">
                    <Text component={Link} to="/">React Playground </Text>
                </Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
                >
                <Outlet />
            </AppShell>
        </MantineProvider>
    )
}