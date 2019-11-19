var requestUrl = "https://localhost:5001/api/Vote";

$(document).ready(function () {
    $.getJSON(requestUrl, function (result) {
        var votes = [];
        var teams = [];
        $.each(result, function (i, field) {
            votes.push(field.votes);
            teams.push(field.teamName);
        });
        var options = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'NBA各队图票数情况'
            },
            xAxis: {
                categories: teams
            },
            yAxis: {
                title: {
                    text: '投票数'
                }
            },
            series: [{
                name: '票数',
                data: votes
            }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('container', options);
    });


    
});
