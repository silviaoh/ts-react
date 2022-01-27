import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './pages/Counter';
import MyForm from './pages/MyForm';
import BasicTable from './components/Table/BasicTable';
import PieChart from './pages/PieChart';
import LineChart from './pages/LineChart';
import BarChart from './pages/BarChart';
interface submitTypes {
	name: string;
	description: string;
}

function App() {
	// const onClick = (name: string) => {
	// 	console.log(`say hello ${name}`);
	// 	return true;
	// };

	const onSubmit = (form: submitTypes) => {
		console.log(`form`, form);
	};

	return (
		<div className="App">
			{/* <Greetings
				name="jisu"
				mark="yellow"
				optional
				// onClick={onClick}
			/>
			<Counter />
			<MyForm
			// onSubmit={onSubmit}
			/> */}
			{/* <BasicTable /> */}
			<PieChart />
			<LineChart />
			<BarChart />
		</div>
	);
}

export default App;
