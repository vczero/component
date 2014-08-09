
var week = ['星期一', '星期二','星期三', '星期四','星期五', '星期六', '星期日'];
var month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

var Calendar = function(div){
	this.div = document.getElementById(div);
};

Calendar.prototype.show = function(){
	var date = new Date(),
	    year = date.getFullYear(),
	    month = date.getMonth(),
	    day = date.getDate(),
	    week = date.getDay(),//星期几

	    width = this.div.width || 800,
	    height = this.div.height || 600;
	    cell = {width: width/7, height: height/5},
	    currentDays = new Date(year, month + 1, 0).getDate(), //本月天数
	    preDays = new Date(year, month, 0).getDate(); //前月的天数
	//创建单元格
	var cellDOM = document.createElement('div');
	cellDOM.style.width = cell.width + 'px';
	cellDOM.style.height = cell.height + 'px';
	cellDOM.style.display = 'inline-block';
	cellDOM.style.float = 'left';

	var firstDay = new Date(year, month, 1),
	    firstCell = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;//计算本月1号出现的地方
	    bottomCell =  35 - currentDays - firstCell; //剩余的下个月显示 

	//两个约束：星期一在第一列，一个月在一个面上
	//显示前一个月
	var preMonth = [];
	for(var i = 0; i < firstCell; i++){
		preMonth.push(new Date(year, month, preDays - i));
	}
	//显示本月
	var currentMonth = [];
	for(var c = 0; c < currentDays; c++){
		currentMonth.push(new Date(year, month, c + 1));
	}
	//显示后一个月
    var nextMonth = [];
    for(var n = 0; n < bottomCell; n++){
    	nextMonth.push(new Date(year, month, n + 1));
    }

    var showArr = [];
    showArr = showArr.concat(preMonth, currentMonth, nextMonth);

    console.log(showArr);

};













