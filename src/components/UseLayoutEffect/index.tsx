import { useEffect, useLayoutEffect, useState } from "react";
import { Container } from "./styles";

export default function UseLayoutEffect() {
  const [useLayoutEffectValue, setUseLayoutEffectValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(0);

  useLayoutEffect(() => {
    if (useLayoutEffectValue === 0) {
      setUseLayoutEffectValue(10 + Math.random() * 200);
    }
  }, [useLayoutEffectValue]);

  useEffect(() => {
    if (useEffectValue === 0) {
      setUseEffectValue(10 + Math.random() * 200);
    }
  }, [useEffectValue]);

  return (
    <Container>
      <h1>useLayoutEffect</h1>
      <button onClick={() => setUseLayoutEffectValue(0)}>
        useLayoutEffect value: {useLayoutEffectValue}
      </button>
      <button onClick={() => setUseEffectValue(0)}>
        useEffect value: {useEffectValue}
      </button>
    </Container>
  );
}
