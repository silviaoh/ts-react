import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Greetings from './Greetings';
import Counter from './pages/Counter';
import MyForm from './pages/MyForm';
import BasicTable from './components/Table/BasicTable';
import SortingTable from './components/Table/SortingTable';
import PieChart from './pages/PieChart';
import LineChart from './pages/LineChart';
import BarChart from './pages/BarChart';
import GlobalFilteringTable from './components/Table/GlobalFilteringTable';
import PaginationTable from './components/Table/PaginationTable';
import SelectingRowsTable from './components/Table/SelectingRows/SelectingRowsTable';
import NoticeCreateDialog from './components/Editor/NoticeCreateDialog';
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
		<AppFrame className="App">
			<NoticeCreateDialog />
		</AppFrame>
	);
}

export default App;

const AppFrame = styled.div`
	background-color: white;
`;
