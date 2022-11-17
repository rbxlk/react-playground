import { AppShell, Header, MantineProvider, Navbar, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";

export default function App() {
    return(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 200 }} height={500} p="xs">
                        <Navbar.Section grow mt="xs" style={{display:"flex", flexDirection: "column"}}>
                            <SideBarLinks />
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