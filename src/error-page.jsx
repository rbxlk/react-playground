import { Center, Container, Text, Title } from "@mantine/core";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Center>
        <Container >
            <Title>Oops!</Title>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <Text italic>{error.statusText || error.message}</Text>
        </Container>
    </Center>
  );
}