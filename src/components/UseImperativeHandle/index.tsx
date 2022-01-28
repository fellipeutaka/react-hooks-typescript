import { useRef } from "react";

import Form, { FormRef } from "./Form";
import { Container } from "./styles";

export default function UseImperativeHandle() {
  const formRef = useRef<FormRef>(null);

  return (
    <Container>
      <h1>useImperativeHandle</h1>
      <Form ref={formRef} />
      <button onClick={() => formRef.current?.showInputValues()}>
        Get form info
      </button>
    </Container>
  );
}
