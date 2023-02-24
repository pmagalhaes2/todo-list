import { FaClipboardList } from "react-icons/fa";
import { Container, Text, Title } from "./styles";
export const EmptyList = () => {
  return (
    <Container>
      <FaClipboardList />
      <Title>You don't have any tasks registered yet.</Title>
      <Text>Create tasks for your day!</Text>
    </Container>
  );
};
