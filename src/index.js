import Plotly from 'plotly.js-dist';

let trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
};

let trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};

var layout = {
    title: "Responsive to window's size!",
    font: {size: 18}
  };

let data = [trace1, trace2];

Plotly.newPlot('root', data, layout, {responsive: true});