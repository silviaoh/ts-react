import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global-styles';

// 만든 스타일을 적용
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router />
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
