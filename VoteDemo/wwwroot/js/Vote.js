var requestUrl = "https://localhost:5001/api/Vote";

var votes = [];
var teams = [];
var teamId = [];
var chart;

var fetchData = function () {
    $.getJSON(requestUrl, function (result) {
        votes.length = 0;
        teams.length = 0;
        teamId.length = 0;
        $.each(result, function (i, field) {
            votes.push(field.votes);
            teams.push(field.teamName);
            teamId.push(field.id);
        });
        var options = {
            xAxis: [
                {
                    type: "category",
                    categories: teams,
                    title: {
                        text: ""
                    },
                    index: 0,
                    isX: true
                }
            ],
            series: [
                {
                    name: "得票数",
                    data: votes,
                    _colorIndex: 0
                }
            ],
            yAxis: [
                {
                    title: {
                        text: "票数",
                        align: "high"
                    },
                    labels: {
                        align: "center"
                    },
                    index: 0,
                    "allowDecimals": false
                }
            ],
            chart: {
                style: {
                    fontFamily: "\"微软雅黑\", Arial, Helvetica, sans-serif",
                    color: "#333",
                    fontSize: "12px",
                    fontWeight: "normal",
                    fontStyle: "normal"
                },
                type: "column",
                inverted: true
            },
            title: {
                text: "NBA " + teams.length+"支队伍得票数情况"
            },
            subtitle: {
                text: ""
            },
            tooltip: {
                valueSuffix: "票数"
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "top",
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true
                    },
                    animation: true,
                    events: {
                        click: function (e) {
                            console.log(e);
                            var index = teams.indexOf(e.point.category);
                            if (index !== -1) {
                                vote(teamId[index], e.point.index);
                            }

                        }
                    }
                }
            }
        }
        chart = Highcharts.chart('container', options);
    });
}
var vote = function (id,index) {
    var url = requestUrl + "/" + id;
    console.log(url);
    $.getJSON(url, function (result) {
        if (result === "success") {
            var vote = chart.series[0].data[index].y;
            chart.series[0].data[index].update({y:vote+1});
        }
        console.log("result:" + result);
    });
}


$(document).ready(function () {
    fetchData();
});
