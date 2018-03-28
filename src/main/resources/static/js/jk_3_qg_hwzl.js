
function get3qghwzl(){
	/** 全国-话务总量 **/
   // $("#qg_hwzl").html("34,669,266");
   // $("#qg_rgfw").html("22,410,641");
	 $.ajax({
		type: "get",
		url: "http://"+window.location.host+"/nfpt/three/getQgHwzlRgfwlJtl",
		async:false,
		data: {},
		dataType: "json",
		success: function(data){
			$("#qg_hwzl").html(forInt(data.LDZL));
			$("#qg_rgfw").html(forInt(data.RGFWL));
		},error: function(XMLHttpRequest, textStatus, errorThrown){

		}
	});
}