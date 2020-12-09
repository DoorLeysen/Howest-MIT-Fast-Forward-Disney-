
var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');


var data  = {
	labels: ['nov 2019','dec 2019','jan 2020','feb 2020','maart 2020','april 2020','mei 2020','juni 2020','juli 2020','aug 2020','sept 2020','okt 2020','nov 2020','dec 2020'],
    datasets: [{
			label: 'Custom Label Name',
			backgroundColor: gradient,
			pointBackgroundColor: 'white',
			borderWidth: 1,
			borderColor: '#911215',
			data: [10000000, 26500000, 27200000,28600000, 37965000, 50000000, 54500000, 57500000,60500000,73700000, 75800000, 77300000,78550000,80000000] 
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(0, 0, 0, 0)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'gadugi',
		backgroundColor: 'rgba(0,0,0,0.1)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});