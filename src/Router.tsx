import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Page404 from './pages/Page404';
import MyForm from './pages/MyForm';
import ReactHooks from './pages/ReactHooks';
import App from './App';
import Layout from './Layout';

const Router = (): JSX.Element => {
	return (
		<BRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<App />} />
					<Route path="/counter" element={<Counter />} />
				</Route>
				<Route path="/my-form" element={<MyForm />} />
				<Route path="/react-hooks" element={<ReactHooks />} />

				<Route path="*" element={<Page404 />} />
			</Routes>
		</BRouter>
	);
};

export default Router;
