import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
	// 날짜와 함께
	const jsondata = [
		['FireFox', 100000],
		['Chrome', 20000],
	];

	const options: Highcharts.Options = {
		chart: {},
		title: {
			text: 'My chart',
		},
		// plotOptions: {
		// 	pie: {
		// 		dataLabels: {},
		// 	},
		// },

		tooltip: {
			// 툴팁의 x축 포맷
			xDateFormat: '%Y-%m-%d',
			// 그래프가 여러 개일 경우 같은 날짜에 여러 개의 값이 찍혀 있을 때 툴팁에 전부 보여줌
			shared: true,
		},

		series: [
			{
				type: 'pie',
				innerSize: '67%',
				data: jsondata,
				// data: [
				// 	{
				// 		// name: 'Listed',
				// 		x: 'FireFox',
				// 		y: 10000,
				// 	},
				// 	{
				// 		// name: 'Not Listed',
				// 		x: 'FireChrome',
				// 		y: 300,
				// 	},
				// ],
			},
		],
	};

	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} oneToOne={true} />
		</>
	);
};

export default PieChart;
