function getLaiyuan(id) {
	var list = [];
	$.ajax({
		type : "get",
		url : "http://" + window.location.host + "/nfpt/one/getLyqd",
		async : false,
		data : {},
		dataType : "json",
		success : function(data) {
			if (data == null) {
				list[0] = [ '\u7535\u8bdd', parseFloat(33) ];
				list[1] = [ '\u8bed\u97f3\u7559\u8a00', parseFloat(33) ];
				list[2] = [ '\u5176\u4ed6', parseFloat(33) ];
			} else {
				list[0] = [ '\u7535\u8bdd', parseFloat(data.DH) ];
				list[1] = [ '\u8bed\u97f3\u7559\u8a00', parseFloat(data.LY) ];
				list[2] = [ '\u5176\u4ed6', parseFloat(data.QT) ];
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			console.log("error: one getLyqd");
		}
	});

	$("#" + id).highcharts({
		chart : {
			type : 'pie',
			backgroundColor : '',
			margin : [ 0, 0, 0, 0 ],
			options3d : {
				enabled : true,
				alpha : 60,
				beta : 0
			},
		},
		title : '',
		colors : [ '#899eda', '#f29f7d', '#e5be7a' ],
		exporting : {
			enabled : false
		},
		credits : {
			text : ''
		},
		tooltip : {
			pointFormat : '<b>{point.percentage:.1f}%</b>',
			backgroundColor : '#FCFFC5', // 背景颜色
			borderColor : 'black', // 边框颜色
			borderRadius : 0, // 边框圆角
			borderWidth : 0, // 边框宽度
			shadow : true, // 是否显示阴影
			animation : true,
			style : { // 文字内容相关样式
				fontSize : "20px",
				fontWeight : "blod",
				fontFamily : "Courir new"
			}
		},
		plotOptions : {
			pie : {
				allowPointSelect : true,
				cursor : 'pointer',
				depth : 35,
				dataLabels : {
					enabled : true,
					format : '{point.name}:{point.percentage:.1f}%',
					style : { // 文字内容相关样式
						fontSize : "20px",
						fill : '#fff',
						color : '#fff'
					}
				}
			}
		},
		series : [ {
			type : 'pie',
			name : '',
			data : list
		} ]
	});
}
