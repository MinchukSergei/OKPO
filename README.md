# OKPO
OKPO lab Chart

Usage:
npm start
choose *.json file the following format:

{
    "title": "Chart example", // Tilte of the chart. Optional
    "xAxis": "X-axis",        // Tilte of the x-asix. Optional
    "yAxis": "Y-axis",        // Tilte of the y-asix. Optional
    "type": "markers",        // Type of chart. Possible options: 'markers', 'scatter', 'bar', 'histogram', 'pie'
    "fontSize": 18,           // Font size. Optional. Default: 18
    "legend": true,           // Legend is visible. Optional. Default: true
    "data": [{
        "x": [0, 1, 2, 3],
        "y": [0, 1, 2, 3],
        "name": "legend1"
    }, {
        "x": [4, 5, 6, 7],
        "y": [8, 9, 10, 11],
        "name": "legend2"
    }]                        // Data to view on chart. Name is the label of the appropriate trace in legend. 
}                             // 'markers','scatter', 'bar' types: x and y arrays are required (x/y-axis coordinates)
                              // 'histogram': x array is required (values for aggregation)
                              // Program displays only last trace. x and y arrays are required (x - values, y - labels)
