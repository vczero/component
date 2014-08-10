
var Calendar = function(div){
	this.div = document.getElementById(div);
	this.width = this.div.style.width || 800; //增加两变量
	this.height = this.div.style.height || (600 - 30);
};

Calendar.week = ['星期一', '星期二','星期三', '星期四','星期五', '星期六', '星期日'];
Calendar.month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

Calendar.prototype.showUI = function(date){
	var width = this.width,
	    height = this.height,
	    cell = {width: (parseInt(width) - 20)/7, height: (parseInt(height) -30 - 20)/5},
	    monthArr = this._monthPanel(date);
	this.div.style.paddingLeft = '8px'; 
	this.div.style.border = '2px solid #57ABFF';
	this.div.style.cursor = 'default';
	this.div.style.fontFamily = '微软雅黑';
	this._addHeader(date);
	this._addWeekday();
	for(var i = 0; i < 35; i++){
		var cellDOM = document.createElement('div');
		cellDOM.style.width = cell.width + 'px';
		cellDOM.style.height = cell.height + 'px';
		cellDOM.style.display = 'inline-block';
		cellDOM.style.float = 'left';
		cellDOM.style.cursor = 'pointer';
		cellDOM.style.textAlign = 'center';
		cellDOM.style.lineHeight = cell.height + 'px';
		cellDOM.class = 'dateCell';
		cellDOM.innerHTML = monthArr[i].getDate();
		//去掉最后一行横线
		if(i < 28){
			cellDOM.style.borderBottom = '1px solid #C8CACC';
		}

		this.div.appendChild(cellDOM);
	}
	
};

Calendar.prototype._addHeader = function(date){
	var header = document.createElement('div');
	header.style.height = '20px';
	header.style.width = this.div.style.width || '800px';
	header.style.textAlign = 'center';
	header.style.fontWeight = 'bold';
	header.innerHTML = date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
	console.log(header);
	this.div.appendChild(header);
}

//增加星期
Calendar.prototype._addWeekday = function(){
	for(var i = 0; i < 7; i++){
		var weekday = document.createElement('div');
		weekday.style.width = (parseInt(this.width) - 20)/7 + 'px';
		weekday.style.height = '20px';
		weekday.style.display = 'inline-block';
		weekday.style.float = 'left';
		weekday.style.color = '#BFBFBF';
		weekday.style.fontWeight = 'bold';
		weekday.innerHTML = Calendar.week[i];
		this.div.appendChild(weekday);
	}
}

Calendar.prototype._monthPanel = function(date){
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












