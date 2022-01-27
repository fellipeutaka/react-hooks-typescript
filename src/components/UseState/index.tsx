import React, { useState } from "react";
import { Container } from "./styles";

import ArrowDown from "../Icons/ArrowDown";

export default function UseState() {
  // useState with a number
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter((previousValue) => previousValue + 1);
  const decrement = () => setCounter((previousValue) => previousValue - 1);

  // useState with a string
  const [inputValue, setInputValue] = useState<string>("");

  // useState with a boolean
  const [toggle, setToggle] = useState<boolean>(false);

  // useState with an object
  type Form = {
    username: string;
    password: string;
  };
  const [form, setState] = useState<Form>({
    username: "",
    password: "",
  });

  const printValues = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.username === "" || form.password === "") {
      alert("Please, type your username and your password!");
    } else {
      alert(`Name: ${form.username} | Password: ${form.password}`);
    }
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // useState with an array
  type Item = {
    id: number;
    name: string;
  };

  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (itemName === "") {
      alert("Please, type what do you have to do!");
    } else {
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName,
        },
      ]);
      setItemName("");
    }
  };

  return (
    <>
      <Container>
        <h1>useState with a number</h1>
        <span>Counter: {counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <ArrowDown />
      </Container>
      <Container>
        <h1>useState with a string</h1>
        <input
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span>Input value: {inputValue}</span>
        <span>lowercase: {inputValue.toLowerCase()}</span>
        <span>UPPERCASE: {inputValue.toUpperCase()}</span>
        <ArrowDown />
      </Container>
      <Container>
        <h1>useState with a boolean</h1>
        <input
          type="checkbox"
          id="switch-blue"
          className="switch"
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
        />
        <span>{toggle ? "Checked" : "It's not checked"}</span>
        <ArrowDown />
      </Container>
      <Container>
        <h1>useState with an object</h1>
        <form onSubmit={printValues}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              value={form.username}
              name="username"
              id="username"
              onChange={updateField}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              value={form.password}
              name="password"
              id="password"
              type="password"
              onChange={updateField}
            />
          </div>
          <button>Submit</button>
        </form>
        <ArrowDown />
      </Container>
      <Container>
        <h1>useState with an array</h1>
        <form onSubmit={addItem}>
          <label>
            <input
              name="item"
              type="text"
              placeholder="What do you have to do?"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </label>
        </form>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
