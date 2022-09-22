import React from "react";
import { Container } from "../../globalStyles";
import { Text, Button, Card, Input } from "../../components";

export const Login = () => {
  return (
    <Container>
      <Card>
        <Text>Input Field:</Text>
        <Input />
        <Button>Click Me</Button>
      </Card>
    </Container>
  );
};
