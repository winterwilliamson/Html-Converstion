google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Run', 11],
    ['Idle', 5],
    ['Stop', 3],
                
              ]);
      
              var options = {
                title: 'My Daily Activities',
                pieHole: 0.4,
                'backgroundColor': '#8d9494',
                'color': 'white',
                'width': '332'
                
              };
      
              var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
              chart.draw(data, options);
            }