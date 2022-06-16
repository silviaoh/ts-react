const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

/**
 * mode: 개발, 프로덕션 모드 확인
 * devtool: 모드에 따라 sourceMap 확인 여부
 * entry: 컴파일을 시작할 파일, 해당 파일부터 필요한 모듈 로딩 및 하나의 파일로 묶기
 * output: webpack이 생성한 결과물의 위치 및 이름
 * resolve: 번들링 될 파일 확장자 등록
 * module: loader설정  ex) babel-loader, ts-loader
 * loader란? webpack이 JS, TS 파일이 아닌 html, css, img, font 등을 변환할 수 있도록 도와주는 속성
 * plugins: 부가 기능을 할 플러그인 설정
 */

module.exports = (env, argv) => {
	const prod = argv.mode === 'production';

	return {
		mode: prod ? 'production' : 'development',
		devtool: prod ? 'hidden-source-map' : 'eval',
		entry: './src/index.tsx',
		// 빌드 설정
		output: {
			path: path.join(__dirname, '/dist'), // 빌드되는 파일들이 만들어지는 위치 , __dirname: 현재 디렉토리
			filename: 'bundle.js', // 번들파일 이름
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ['babel-loader', 'ts-loader'],
				},
			],
		},
		// webpack 서버 설정
		devServer: {
			static: path.join(__dirname, 'build'), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
			port: 3000,
			hot: true,
		},
		plugins: [
			new webpack.ProvidePlugin({
				React: 'react',
			}),
			new HtmlWebpackPlugin({
				// index.html에 output에서 만들어진 bundle.js를 적용하여, build에 새로운 html 파일 생성
				template: './public/index.html',
			}),
			new webpack.HotModuleReplacementPlugin(),
		],
	};
};
