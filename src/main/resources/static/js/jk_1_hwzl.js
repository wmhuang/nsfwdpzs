

function get1hwzl(){
	/** 中-话务总量 **/
	 $.ajax({				 
		type: "get",
         url: "http://"+window.location.host+"/nfpt/one/getShYHwzl",
		async:false,
		data: {},
		dataType: "json",
		success: function(data){
			$("#c_hwzl").html(forInt(data.DPYHWL));
		},error: function(XMLHttpRequest, textStatus, errorThrown){
			
		}
	});
}
