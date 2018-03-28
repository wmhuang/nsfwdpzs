function get1rldl(){
	/** 左—中—日来电总量 **/
	$.ajax({				 
	type: "get",
	url: "http://"+window.location.host+"/nfpt/one/getRldzl",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
		try{
            $("#c_zdyyfwl").html(forInt(data.ZDYYFWL));
            $("#c_rgfwl").html(forInt(data.RGYYFWL));
            $("#c_fqs").html(forInt(data.FQL));
            $('#d_hwzl').html(forInt(data.ZDYYFWL+data.RGYYFWL+data.FQL))
        }catch(e){

        }

	},error: function(XMLHttpRequest, textStatus, errorThrown){
		console.log("error: one getRldzl");
	}
	});
}