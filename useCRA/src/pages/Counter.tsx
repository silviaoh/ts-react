import React, { useState } from 'react';

interface Information {
	name: string | null;
	description: string | null;
}

type Score = 'A' | 'B' | 'C';

interface Add {
	// 함수 타입 선언
	(num1: number, num2: number): void;
}

interface Mobile<T> {
	name: string;
	price: number;
	option: T;
	[grade: number]: Score; // 여러 개
}

const Counter = () => {
	// useState 사용할 때는 generics 사용해서 타입 설정해주기
	// useState 사용할 때는 사용하지 않아도 알아서 타입을 유추해주기 때문에 생략해도 상관무
	const [count, setCount] = useState<number>(0);

	const add: Add = (x, y) => {
		console.log(`x, y`, x, y);
	};

	function getSize<T>(arr: T[]) {
		return arr.length;
	}

	const arr1 = [1, 2, 3];

	const arr2 = ['1', '2', '3'];

	getSize<number>(arr1);
	getSize<string>(arr2);

	const m1: Mobile<Object> = {
		name: 's1',
		price: 1000,
		option: {
			color: 'red',
			coupon: false,
		},
		1: 'A',
	};

	const m2 = {
		name: 's1',
		price: 1000,
		option: 'good',
	};

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
