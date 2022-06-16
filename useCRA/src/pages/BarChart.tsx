import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
	const options: Highcharts.Options = {
		title: {
			text: 'My chart',
		},
		// xAxis: {
		// 	type: 'datetime',
		// 	labels: {
		// 		format: '{value:%Y월}',
		// 	},
		// },

		tooltip: {
			// 툴팁의 x축 포맷
			xDateFormat: '%Y월',
			// 그래프가 여러 개일 경우 같은 날짜에 여러 개의 값이 찍혀 있을 때 툴팁에 전부 보여줌
			shared: true,
		},

		plotOptions: {
			series: {
				pointStart: 1,
			},
		},

		series: [
			{
				type: 'bar',
				name: 'bar1',
				data: [
					['ocn', 20],
					['chrome', 70],
					['lank', 50],
				],
			},
			// {
			// 	type: 'bar',
			// 	name: 'bar2',
			// 	data: [
			// 		['ocn', 20],
			// 		['chrome', 70],
			// 		['lank', 50],
			// 	],
			// },
		],
	};

	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} oneToOne={true} />
		</>
	);
};

export default LineChart;
