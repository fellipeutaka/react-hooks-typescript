import { useReducer } from "react";
import { Container } from "./styles";

const initialState = { count: 0 };

enum CountActionKind {
  INCREASE = "increment",
  DECREASE = "decrement",
}

interface State {
  count: number;
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

function reducer({ count }: State, { type, payload }: CountAction) {
  switch (type) {
    case CountActionKind.INCREASE:
      return { count: count + payload };
    case CountActionKind.DECREASE:
      return { count: count - payload };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <h1>useReducer</h1>
      <div className="count">
        <span>Count: {count}</span>
        <div>
          <button
            onClick={() =>
              dispatch({ type: CountActionKind.DECREASE, payload: 2 })
            }
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch({ type: CountActionKind.INCREASE, payload: 5 })
            }
          >
            +
          </button>
        </div>
      </div>
    </Container>
  );
}
