function get1Yldl(){
    /** 左—中—日来电总量 **/
    $.ajax({
        type: "get",
        url: "http://"+window.location.host+"/nfpt/one/getYldzl",
        async:false,
        data: {},
        dataType: "json",
        success: function(data){
            try{
                $("#l_rgfwl").html(data.YRGYYFWL);
                $("#l_ldzl").html(data.YLDZL);
                $("#l_jtl").html(data.YJTL);
            }catch(e){

            }
            try{
                $("span[name='l_rgfwl']").each(function(){
                    $(this).text(data.YRGYYFWL);
                });
                $("span[name='l_ldzl']").each(function(){
                    $(this).text(data.YLDZL);
                });
                $("span[name='l_jtl']").each(function(){
                    $(this).text(data.YJTL);
                });
            }catch(e){

            }


        },error: function(XMLHttpRequest, textStatus, errorThrown){
            console.log("error: one getYldzl");
        }
    });
}
/*上海当年累计总量*/
function getShNldzl(){
    $.ajax({
        type: "get",
        url: "http://"+window.location.host+"/nfpt/two/getShNldzl",
        async:false,
        data: {},
        dataType: "json",
        success: function(data){
            try{
                $("#l_rgfwl").html(forInt(data.YRGYYFWL));
                $("#l_ldzl").html(forInt(data.YLDZL));
                $("#l_jtl").html(data.YJTL+"%");
            }catch(e){

            }
            try{
                $("span[name='l_rgfwl']").each(function(){
                    $(this).text(forInt(data.YRGYYFWL));
                });
                $("span[name='l_ldzl']").each(function(){
                    $(this).text(forInt(data.YLDZL));
                });
                $("span[name='l_jtl']").each(function(){
                    $(this).text(data.YJTL+"%");
                });
            }catch(e){

            }


        },error: function(XMLHttpRequest, textStatus, errorThrown){
            console.log("error: one getShNldzl");
        }
    });
}
/**全国服务总量 **/
function getChinaServiceCount(){
    
    $.ajax({
        type: "get",
        url: "http://"+window.location.host+"/nfpt/one/getChina",//TODO 全国总量接口
        async:false,
        data: {},
        dataType: "json",
        success: function(data){
            try{
            	
                $("#l_rgfwl_a").html(forInt(data.RGYYFWLCHINA));
                $("#l_ldzl_a").html(forInt(data.LDZLCHINA));
                $("#l_jtl_a").html(data.JTLCHINA+"%");
            }catch(e){

            }
            try{
                $("span[name='l_rgfwl_a']").each(function(){
                    $(this).text(forInt(data.RGYYFWLCHINA));
                });
                $("span[name='l_ldzl_a']").each(function(){
                    $(this).text(forInt(data.LDZLCHINA));
                });
                $("span[name='l_jtl_a']").each(function(){
                    $(this).text(data.JTLCHINA+"%");
                });
            }catch(e){

            }


        },error: function(XMLHttpRequest, textStatus, errorThrown){
            console.log("error: one getChinaServiceCount");
        }
    });
}