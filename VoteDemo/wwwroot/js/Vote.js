var requestUrl = "https://localhost:5001/api/Vote";
var teamId = [];
var vote = function(id){
    var url = requestUrl + "/" + id;
    console.log(url);
    $.getJSON(url, function (result) {
        console.log("result:" + result);
        getData();
    });
}
var getData = function () {
    $.getJSON(requestUrl, function (result) {
        var votes = [];
        var teams = [];
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
                text: "NBA各队伍得票数情况"
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
                    animation: false,
                    events: {
                        click: function (e) {
                            var index = teams.indexOf(e.point.category);
                            if (index != -1) {
                                vote(teamId[index]);
                            }
                            else {
                                console.log(e.point.category);
                            }
                            
                        }
                    }
                }
            }
        }
        // 图表初始化函数
        var chart = Highcharts.chart('container', options);
    });
}

$(document).ready(function () {
    getData();
});
