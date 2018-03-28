
function get1ywlb(){
	/** 右-业务类别 **/
	 $.ajax({				 
		type: "get",
         url: "http://"+window.location.host+"/nfpt/one/getYwlb",
		async:false,
		data: {},
		dataType: "json",
		success: function(data){
			try{
				$("#r_con").html(data.ZXBFB+"%");
				$("#r_dis").html(data.WJJBBFB+"%");
				$("#r_inq").html(data.CXBFB+"%");
				$("#r_tax").html(data.SSJBBFB+"%");
				$("#r_com").html(data.TSBFB+"%");
				$("#r_sug").html(data.YJJYBFB+"%");
			}catch(e){}
			try{
				$("span[name='r_con']").each(function(){
                    $(this).text(data.ZXBFB+"%");
				});	
				$("span[name='r_dis']").each(function(){
                    $(this).text(data.WJJBBFB+"%");
				});	
				$("span[name='r_inq']").each(function(){
                    $(this).text(data.CXBFB+"%");
				});	
				$("span[name='r_tax']").each(function(){
                    $(this).text(data.SSJBBFB+"%");
				});	
				$("span[name='r_com']").each(function(){
                    $(this).text(data.TSBFB+"%");
				});	
				$("span[name='r_sug']").each(function(){
                    $(this).text(data.YJJYBFB+"%");
				});	
			}catch(e){}
		},error: function(XMLHttpRequest, textStatus, errorThrown){
			
		}
	});
}