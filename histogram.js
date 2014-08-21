/*
柱状图
*/
var Num = {};
//均值
Num.average = function(arr){
    var n = arr.length,
        sum = 0;
    for(var i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum / n;
}
//和
Num.sum = function(arr){
    var n = arr.length,
        sum = 0;
    for(var i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum;
}
//平方
Num.sqrt = function(arr){
    var n = arr.length,
        values = [];
    for(var i = 0; i < n; i++){
        values.push(Math.sqrt(arr[i]));
    }
    return values;
}

var Histogram = function(option, div){
    var option = option;
    /*定义初始化执行动作*/
    function draw(){
        //1、绘制UI
        Histogram.addBaseUI();
        //2、UI可缩放
        //3、根据具体参数添加组件
    }
    /*执行*/
    draw();
}

//添加基础UI
Histogram.addBaseUI = function(){
    
};

//添加tooltip
Histogram.addTooltip = function(){

}

//添加legend
Histogram.addLegend = function(){

}

//添加X轴
Histogram.addXAxis = function(){

}

//添加y轴
Histogram.addYAxis = function(){

}

//增加数据系列
Histogram.addSeries = function(){

}












var option = {
    title : {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
                    