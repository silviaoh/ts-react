import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';

function App() {
	const onClick = (name: string) => {
		console.log(`say hello ${name}`);
		return true;
	};
	return (
		<div className="App">
			<Greetings name="jisu" mark="yellow" optional onClick={onClick} />
			<Counter />
		</div>
	);
}

export default App;
