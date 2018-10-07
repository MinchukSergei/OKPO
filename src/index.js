import Plotly from 'plotly.js-dist';

let fileButton = $('#choose-file-button');
fileButton.bind('change', handleFile);

async function handleFile(evt) {
    let file = evt.target.files[0];

    if (!isJsonType(file)) {
        alert('Type mismatch. Supports only *.json.');
        return;
    }

    let chartData = await getChartData(file);
    chartData = buildChartData(chartData);
    drawChart(chartData);
    evt.target.value = null;
}

function isJsonType(file) {
    return file && file.type === 'application/json';
}

function getChartData(file) {
    return new Promise((resolve) => {
        let fr = new FileReader();

        fr.onload = (e) => {
            let fileData = e.target.result,
                jsonData;

            if (fileData) {
                jsonData = JSON.parse(fileData);
            }

            resolve(jsonData);
        };

        fr.readAsBinaryString(file);        
    });
}

function buildChartData(fileData) {
    let traces = [], 
        type = 'scatter', 
        mode;
    
    if (fileData.type && fileData.type === 'markers') {
        mode = 'markers';
    } else if (fileData.type) {
        type = fileData.type;
    }

    for (let tr of fileData.data) {
        let trace = {
            name: tr.name,
            mode: mode,
            type: type
        };

        let isPieChart = fileData.type && fileData.type === 'pie';

        trace[isPieChart ? 'values' : 'x'] = tr.x;
        trace[isPieChart ? 'labels' : 'y'] = tr.y;

        traces.push(trace);
    }

    let layout = {
        title: fileData.title,
        showlegend: fileData.legend !== undefined ? fileData.legend : true,
        font: {
            size: fileData.fontSize || 18
        },
        xaxis: {
            title: fileData.xAxis
        },
        yaxis: {
            title: fileData.yAxis
        }
    };

    return {
        traces: traces,
        layout: layout
    };
}

function drawChart(data) {
    Plotly.newPlot('chart', data.traces, data.layout, { responsive: true });
}