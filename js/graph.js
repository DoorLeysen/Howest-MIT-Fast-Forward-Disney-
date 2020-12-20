
var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(255, 0,0, 0.7)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.5)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0.3)');


var data  = {
	labels: ['juli 2020','aug 2020','sept 2020','okt 2020','nov 2020','dec 2020'],
    datasets: [{
			label: 'Users',
			backgroundColor: gradient,
			pointBackgroundColor: 'white',
			borderWidth: 1,
			borderColor: '#911215',
			data: [605000000, 737000000, 758000000, 773000000, 785000000, 800000000] 
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
				lineWidth: 1,
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},

	legend: {
		display: true
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