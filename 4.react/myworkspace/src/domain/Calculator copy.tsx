// input박스로 하게끔 하자 input 박스 3개만들어야함

import { useRef, useState } from "react";

const Calcula = () => {
  const [resultt, setResultt] = useState(0);
  const inputAARef = useRef<HTMLInputElement>(null);
  const inputBBRef = useRef<HTMLInputElement>(null);
  const inputCCRef = useRef<HTMLInputElement>(null);

  const calcu = () => {
    const a = inputAARef.current?.value;
    const b = inputBBRef.current?.value;
    const c = inputCCRef.current?.value;

    setResultt(eval(`${a}${c}${b}`));
  };

  return (
    <div>
      <h2>Calcula</h2>
      <input placeholder="첫번째 숫자" ref={inputAARef} />
      <input placeholder="두번째 숫자" ref={inputBBRef} />
      <input placeholder="세번째 숫자" ref={inputCCRef} />
      <button
        onClick={() => {
          calcu();
        }}
      >
        Start
      </button>
      <div>{resultt}</div>
    </div>
  );
};

export default Calcula;
