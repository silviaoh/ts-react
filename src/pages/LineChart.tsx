import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
	const options: Highcharts.Options = {
		chart: {
			type: 'spline',
		},
		title: {
			text: 'My chart',
		},
		xAxis: {
			type: 'datetime',
			labels: {
				format: '{value:%Y-%b-%e}',
			},
		},
		tooltip: {
			// 툴팁의 x축 포맷
			xDateFormat: '%Y-%m-%d %H:%M',
			// 그래프가 여러 개일 경우 같은 날짜에 여러 개의 값이 찍혀 있을 때 툴팁에 전부 보여줌
			shared: true,
		},
		series: [
			{
				type: 'spline',
				name: 'spline1',
				data: [
					[1388552400, 20],
					[1488638800, 70],
					[1588725200, 50],
				],
			},
			{
				type: 'spline',
				name: 'spline2',
				data: [
					[1388552400, 30],
					[1488638800, 80],
					[1588725200, 90],
				],
			},
		],
	};

	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} oneToOne={true} />
		</>
	);
};

export default LineChart;
