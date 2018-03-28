
function get3shhwzl(){
	/** 上海-话务总量 **/
	 $.ajax({				 
		type: "get",
		url: "http://"+window.location.host+"/nfpt/three/getShHwzlRgfwlJtl",
		async:false,
		data: {},
		dataType: "json",
		success: function(data){
			$("#sh_hwzl").html(forInt(data.LDZL));
			$("#sh_rgfw").html(forInt(data.RGFWL));
		},error: function(XMLHttpRequest, textStatus, errorThrown){
			
		}
	});

//    $.ajax({
//        type: "get",
//        url: "http://"+window.location.host+"/nfpt/three/getShRgfwl",
//        async:false,
//        data: {},
//        dataType: "json",
//        success: function(data){
//            $("#sh_rgfw").html(forInt(data.RGFWL));
//        },error: function(XMLHttpRequest, textStatus, errorThrown){
//
//        }
//    });
}