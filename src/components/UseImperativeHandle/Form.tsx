import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from "react";

interface FormProps {
  initialData?: string;
}

export interface FormRef {
  showInputValues(): void;
}

const Form: ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function showInputValues() {
    alert(`
        Name: ${nameInputRef.current?.value}
        Last name: ${lastNameInputRef.current?.value}
        E-mail: ${emailInputRef.current?.value}
        Password: ${passwordInputRef.current?.value}
    `);
  }

  useImperativeHandle(ref, () => ({
    showInputValues,
  }));

  return (
    <form>
      <input type="text" placeholder="Name" ref={nameInputRef} />
      <input type="text" placeholder="Last name" ref={lastNameInputRef} />
      <input type="email" placeholder="E-mail" ref={emailInputRef} />
      <input type="password" placeholder="Password" ref={passwordInputRef} />
    </form>
  );
};

export default forwardRef(Form);
