function getDmsDic(dicTypeCode, isAll) {
	var dicData = [];
	$.ajax({
				type : "post",
				url : ctx + "/dmsDictionary/getDicByType",
				dataType : "json",
				async : false,
				data : {
					dicTypeCode : dicTypeCode,
					isAll : isAll
				},
				cache : false,
				success : function(result) {
					dicData = result;
				}
			});
	return dicData;
}

// 根据登陆人获取不同的内容
function getBusyTypeAll(dicTypeCode) {
	var dicData;
	$.ajax({
				type : "post",
				url : ctx + "/dmsDictionary/getBusyTypeAll",
				dataType : "json",
				async : false,
				data : {
					dicTypeCode : dicTypeCode
				},
				cache : false,
				success : function(result) {
					dicData = result;
				}
			});
	return dicData;
}

function getBusyType(dicTypeCode) {
	var dicData;
	$.ajax({
				type : "post",
				url : ctx + "/dmsDictionary/getBusyType",
				dataType : "json",
				async : false,
				data : {
					dicTypeCode : dicTypeCode
				},
				cache : false,
				success : function(result) {
					dicData = result;
				}
			});
	return dicData;
}

function dicFormat(vals, dicData) {

	if (isEmpty(vals) || dicData.length == 0) {
		return "";
	}
	if (!isNaN(vals)) {
		vals = vals.toString();
	}

	var valArr = vals.split(",");
	var text = [];
	for (var i = 0; i < valArr.length; i++) {
		for (var j = 0; j < dicData.length; j++) {
			if (valArr[i] == dicData[j][1]) {
				text.push(dicData[j][0]);
				break;
			}
		}
	}

	return text.join(",");
}

function getDicVal(v, dicData) {
	if (!dicData) {
		return "";
	}
	var showValue = v;
	for (var i = 0; i < dicData.length; i++) {
		if (v == dicData[i][0]) {
			showValue = dicData[i][1];
		}
	}
	return showValue;
}

// easyUI获取数据字典

/**
 * easyui 获取数据字典
 * 
 * @param {数据字典类型代码}
 * 
 * @return {List<字典表>}
 */
function getDicKeyValueEasyui(dicTypeCode) {
	var dicData;
	$.ajax({
				type : "post",
				url : ctx + "/dmsDictionary/getDicKeyValueEasyui",
				dataType : "json",
				async : false,
				data : {
					dicTypeCode : dicTypeCode
				},
				cache : false,
				success : function(result) {
					dicData = result;
				}
			});
	return dicData;
}

function getDicValueByKey(dicTypeCode, value) {
	var dicData = getDicKeyValueEasyui(dicTypeCode);
	for (var i = 0; i < dicData.length; i++) {
		if (dicData[i].dicValue == value) {
			return dicData[i].dicKey;
			break;
		}
	}
}
