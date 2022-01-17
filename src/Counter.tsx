import React, { useState } from "react";

interface Information {
  name: string | null;
  description: string | null;
}

const Counter = () => {
  // useState 사용할 때는 generics 사용해서 타입 설정해주기
  // useState 사용할 때는 사용하지 않아도 알아서 타입을 유추해주기 때문에 생략해도 상관무
  const [count, setCount] = useState<number>(0);

  // generics 사용하는 게 좋을 때
  // 상태가 null 일수도 아닐수도 있을 때
  // const [info, setInformation] = useState<Information | null>(null);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
