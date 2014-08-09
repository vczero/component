
var Calendar = function(div){
	this.div = document.getElementById(div) || {width:800, height:600};
};

Calendar.week = ['星期一', '星期二','星期三', '星期四','星期五', '星期六', '星期日'];
Calendar.month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

Calendar.prototype.showUI = function(date){
	var width = this.div.style.width || 800,
	    height = this.div.style.height || 600,
	    cell = {width: (parseInt(width) - 20)/7, height: (parseInt(height) - 20)/5},
	    monthArr = this.monthPanel(date);
	
	for(var i = 0; i < 35; i++){
		var cellDOM = document.createElement('div');
		cellDOM.style.width = cell.width + 'px';
		cellDOM.style.height = cell.height + 'px';
		cellDOM.style.display = 'inline-block';
		cellDOM.style.float = 'left';
		cellDOM.style.border = '1px solid blue';
		cellDOM.innerHTML = monthArr[i].getDate();
		this.div.appendChild(cellDOM);
	}
	
};

Calendar.prototype.monthPanel = function(date){
	//如果传递了Date对象，则按Date对象进行计算月份面板
	//否则，按照当前月份计算面板
	var date = date || new Date(),
	    year = date.getFullYear(),
	    month = date.getMonth(),
	    day = date.getDate(),
	    week = date.getDay(),
	    currentDays = new Date(year, month + 1, 0).getDate(),
	    preDays = new Date(year, month, 0).getDate(),
	    firstDay = new Date(year, month, 1),
	    firstCell = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1,
	    bottomCell =  35 - currentDays - firstCell;
	//前一个月该显示多少天
	var preMonth = [];
	for(var p = firstCell; p > 0; p--){
		preMonth.push(new Date(year, month - 1, preDays - p + 1));
	}
	//本月
	var currentMonth = [];
	for(var c = 0; c < currentDays; c++){
		currentMonth.push(new Date(year, month, c + 1));
	}
	//下一个月
    var nextMonth = [];
    for(var n = 0; n < bottomCell; n++){
    	nextMonth.push(new Date(year, month + 1, n + 1));
    }

    preMonth = preMonth.concat(currentMonth, nextMonth);
    return preMonth;
};












