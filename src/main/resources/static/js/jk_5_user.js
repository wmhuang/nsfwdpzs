var userList;
var us=0;
function get5user(){
	/** 用户信息及相关情况 **/
	 $.ajax({				 
		type: "get",
		url: "http://"+window.location.host+"/nfpt/five/getZxXx",
		async:false,
		data: {},
		dataType: "json",
		success: function(datas){
            userList = datas;
            updateUser();
            getUserinfo();
			updateUS();
            setInterval(function () {
                updateUser();
                getUserinfo();
                updateUS();
            },5000);
		},error: function(XMLHttpRequest, textStatus, errorThrown){
			
		}
	});
}
function updateUser() {
    $("#tx").attr("src","../userimg/"+userList[us].ZXGH+".JPG");
    //$("#tx")。attr("onerror","this.src='../img/c_1.png'");
    //$("#tx")。attr("onerror","src='../img/c_1.png'");
    $("#gh").html(userList[us].ZXGH+"号");
    $("#zb").html(userList[us].ZB);
    $("#zzmm").html(userList[us].ZZMM);
  
    $("#gznx").html(userList[us].GZNX);
    $("#xl").html(userList[us].XL);
    var intx = parseInt(userList[us].XJ);
    $(".wjx").each(function(index, element) {
        if(intx>index){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
    updateZZMMpic(userList[us].ZZMM);
}
function updateZZMMpic(zzmm){
	if(zzmm=="中共党员"){
		 $("#zzmmpic").attr("src","../img/danghui.png");
		 $("#zzmmpic").show();
	}else if(zzmm=="共青团员"){
		 $("#zzmmpic").attr("src","../img/tuanhui.png");
		 $("#zzmmpic").show();
	}else{
		$("#zzmmpic").hide();
	}
}
function updateUS() {
	++us;
	if(us>userList.length-1){
		us=0;
	}
}
function getUserinfo () {
    $.ajax({
        type: "get",
        url: "http://"+window.location.host+"/nfpt/five/getZxFwxx/"+userList[us].ZXGH,
        async:false,
        data: {},
        dataType: "json",
        success: function(datas){
            if(datas==null){
                datas={"RGFWL":"0","GDSL":"0","ZXGDL":"0","TSGDL":"0","WFWJGDL":"0","DLSC":"0","PJTHSC":"0","PJHHCLSC":"0"
                    ,"MYL":"0","MYSL":"0","YBSL":"0","BMYSL":"0","FCMYSL":"0"};
            }
			$("#c_rgfwl").html(datas.RGFWL);
			$("#c_gdsl").html(datas.GDSL);
			$("#c_zxgd").html(datas.ZXGDL);
			$("#c_tsjbgd").html(datas.TSGDL);
			$("#c_wfwjgd").html(datas.WFWJGDL);
			$("#c_dlsc").html(datas.DLSC);
			$("#c_pjthsc").html(datas.PJTHSC);
			$("#c_pjhhclsc").html(datas.PJHHCLSC);

			$("#r_myl").html(datas.MYL+"%");
			$("#r_clmy").html(datas.FCMYSL);
			$("#r_my").html(datas.MYSL);
			$("#r_yb").html(datas.YBSL);
			$("#r_bmy").html(datas.BMYSL);
        },error: function(XMLHttpRequest, textStatus, errorThrown){

        }
    });
}