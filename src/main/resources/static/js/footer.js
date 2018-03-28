function getFooterTime() {
	var datetime = new Date();
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	var today = new Array('\u661f\u671f\u65e5', '\u661f\u671f\u4e00',
			'\u661f\u671f\u4e8c', '\u661f\u671f\u4e09', '\u661f\u671f\u56db',
			'\u661f\u671f\u4e94', '\u661f\u671f\u516d');
	var week = today[datetime.getDay()];
	$("#date").html(year + "\u5e74" + month + "\u6708" + date + "\u65e5");
	$("#time").html(hour + ":" + minute);
	$("#week").html(week);
}
function getFooter() {
	var datetime = new Date();
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	var today = new Array('\u661f\u671f\u65e5', '\u661f\u671f\u4e00',
			'\u661f\u671f\u4e8c', '\u661f\u671f\u4e09', '\u661f\u671f\u56db',
			'\u661f\u671f\u4e94', '\u661f\u671f\u516d');
	var week = today[datetime.getDay()];
	$("#date").html(year + "\u5e74" + month + "\u6708" + date + "\u65e5");
	$("#time").html(hour + ":" + minute);
	$("#week").html(week);
	$("#endDate").html(year + "-" + month + "-" + (date));
}
// 格式化数值（12122）为12,122的字符串
function forInt(num) {
	var result = [], counter = 0;
	num = (num || 0).toString().split('');
	for (var i = num.length - 1; i >= 0; i--) {
		counter++;
		result.unshift(num[i]);
		if (!(counter % 3) && i != 0) {
			result.unshift(',');
		}
	}
	return result.join('');
}

