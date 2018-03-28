/** 线形图-满意度 **/
function getMylYd(id){
	var key=[];
var val=[];
$.ajax({				 
	type: "get",
	url: "http://"+window.location.host+"/nfpt/two/getMylYd",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
		for(var i=0;i<data.length;i++){
			key.push(data[i].RQ);
			val.push(data[i].MYL);
		}
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});
var option = {
	backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : false,       
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,			
            data : key	,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 90,
            max : 100,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				formatter: '{value} %',
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    series : [
        {
            name:'满意率',
            type:'line',
            stack: '总量',
			symbolSize: 8,//拐点大小
			label: {
                normal: {
                    show: true,
                    position: 'top',
					formatter: '{c} %',
					textStyle:{color:"#fbff05",fontSize:'15'}
                }
            },
			itemStyle : {
				normal : {
					color:"#1094f6",
					lineStyle:{
						width:5,//折线宽度
						color:"#1094f6"//折线颜色
					}
				}
			},						
            data:val
        }
    ]
};
                    
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
/** 线形图-接通率 **/
function getJtlYd(id){
	var key=[];
var val=[];
$.ajax({				 
	type: "get",
	url: "http://"+window.location.host+"/nfpt/two/getJtlYd",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
		v = data.value;
		for(var i=0;i<data.length;i++){
			key.push(data[i].RQ);
			val.push(data[i].JTL);
		}
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});
var option = {
	backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },    
    toolbox: {
        show : false,       
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,			
            data : key,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 70,
            max : 100,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				formatter: '{value} %',
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    series : [        
        {
            name:'接通率',
            type:'line',
            stack: '总量',
			symbolSize: 8,//拐点大小
			label: {
                normal: {
                    show: true,
					formatter: '{c} %',
                    position: 'top',
					textStyle:{color:"#fbff05",fontSize:'15'}
                }
            },
			itemStyle : {
				normal : {
					color: "#1094f6",
					lineStyle:{
						width:5,//折线宽度
						color:"#1094f6"//折线颜色
					}
				}
			},			
            data:val
        }
    ]
};
                    
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
/** 线形图-来电总量 **/
function getYyRgFwl(id){
	var key=[];
    var ldzl=[];
$.ajax({
	type: "get",
	url: "http://"+window.location.host+"/nfpt/two/getYyRgFwlNew",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
		v = data.value;
		for(var i=0;i<data.length;i++){
            key.push(data[i].RQ);
            ldzl.push(data[i].LDZL);
		}
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});
var option = {
	backgroundColor: '',
	
    tooltip : {
        trigger: 'axis'
    },    
	legend: {
		right:'50',
		show:false,
        data:[{
			name:'来电总量',
			textStyle : {				
				fontSize:10,//折线宽度
				fontWeight:'bold',
				color:"#1094f6"//折线颜色	
			}}],
			
    },
    toolbox: {
        show : false,       
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,			
            data : key	,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    yAxis : [
        {
            type : 'value',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				formatter: '{value} ',
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'20',
					fontWidth:'bold'
				}
			}	
        }
    ],
    series : [
        {
            name:'来电总量',
            type:'line',
            stack: '总量',			
			symbolSize: 8,//拐点大小
			label: {
                normal: {
					formatter: '{c}',
                    show: true,
                    position: 'top',
					textStyle:{color:"#fbff05",fontSize:'15'}
                }
            },
			itemStyle : {
				normal : {
					color: "#1094f6",
					lineStyle:{
						width:5,//折线宽度
						color:"#1094f6",//折线颜色
						
					}
				}
			},			
            data:ldzl
        }
    ]
};
                    
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
/** 饼形图-上海接通率 **/
function getSHJtl(id){
	var percent = 98;
$.ajax({				 
	type: "get",
	url: "http://"+window.location.host+"/nfpt/three/getJtl",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
        percent = data.JTL;
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});

    function getData() {
        return [{
            value: percent,
            itemStyle: {
                normal: {
                    color: '#fb358a',
                    shadowBlur: 10,
                    shadowColor: '#fb358a'
                }
            }
        }, {
            value: 100 - percent,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }];
    }

option = {
    backgroundColor: '',

    title: {
        text: (percent) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#98a0c4',
            fontWeight: 'bolder',
            fontSize: 30,
        }
    },
    series: [{
        type: 'pie',
        radius: ['49%', '59%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },

        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: '#483D8B',
                    shadowBlur: 10,
                    shadowColor: '#483D8B',

                }
            }
        }],

        animation: false
    },

        {
            type: 'pie',
            radius: ['49%', '59%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#483D8B',
                        shadowBlur: 50,
                        shadowColor: '#483D8B'
                    }
                }
            }],

            animation: false
        },

        {
            name: 'main',
            type: 'pie',
            radius: ['65%', '61%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData(),

            animationEasingUpdate: 'cubicInOut',
            animationDurationUpdate: 500
        }
    ]
};
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);

}
/** 饼形图-全国接通率 **/
function getCHJtl(id){
	var percent = 88.79;
    function getData() {
        return [{
            value: percent,
            itemStyle: {
                normal: {
                    color: '#fb358a',
                    shadowBlur: 10,
                    shadowColor: '#fb358a'
                }
            }
        }, {
            value: 100 - percent,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }];
    }

    option = {
        backgroundColor: '',

        title: {
            text: (percent) + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#98a0c4',
                fontWeight: 'bolder',
                fontSize: 30,
            }
        },
        series: [{
            type: 'pie',
            radius: ['49%', '59%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#483D8B',
                        shadowBlur: 10,
                        shadowColor: '#483D8B',

                    }
                }
            }],

            animation: false
        },

            {
                type: 'pie',
                radius: ['49%', '59%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    }
                },

                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#483D8B',
                            shadowBlur: 50,
                            shadowColor: '#483D8B'
                        }
                    }
                }],

                animation: false
            },

            {
                name: 'main',
                type: 'pie',
                radius: ['65%', '61%'],
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: getData(),

                animationEasingUpdate: 'cubicInOut',
                animationDurationUpdate: 500
            }
        ]
    };

    var chart = echarts.init(document.getElementById(id));
    chart.setOption(option);
}

var jsons;
/** 关系图-问题类型 **/
function getWtlx(id){
	var datas= new Array();
    datas.push({"name": "问题类型","symbolSize": 100,"draggable": "true","value": 27,"label": {normal: {show: true,formatter: "{b}\n{c}",textStyle:{fontSize:'20',fontWeight:'bold'}}},"itemStyle":{normal:{color:"#009612"}}});
    var links=new Array();
    var cats=new Array();
    var json1=new Array();
    var colors=['#d48265','#9c27b0','#009688','#ca8622','#009612','#c71e93','#571ec7','#1ebfc7','#c4c71e','#c7641e'];
    var map_colo=[];
    var a=0;
    var bool = true;
    $.ajax({
        type: "get",
        url: "http://"+window.location.host+"/nfpt/four/getWtlx",
        async:false,
        data: {},
        dataType: "json",
        success: function(json){
            jsons=json;
            for(var i=0;i<json.length;i++){
                bool=true;
                for(var s=0;s<json1.length;s++){
                    if(json[i].YJMC==json1[s]){
                        bool=false;
                    }
                }
                if(bool){
                    json1.push(json[i].YJMC);
                    datas.push({"name":json[i].YJMC,"symbolSize": getInt(800),"category": json[i].YJMC,"draggable": "true","value": json[i].SL,"label": {normal: {show: true,formatter: "{b}\n{c}",textStyle:{fontSize:'20',fontWeight:'bold'}}},"itemStyle":{normal:{color:colors[a]}}});
                    links.push({"source": "问题类型","target": json[i].YJMC});
                    cats.push({"name": json[i].YJMC});
                    map_colo.push({"name":json[i].YJMC,"value":colors[a]});
                    ++a;
                }else{
                    for(var s =0;s<datas.length;s++){
                        if(json[i].YJMC==datas[s].name){
                            datas[s].value= parseInt(datas[s].value)+parseInt(json[i].SL);
                        }
                    }
                }
            }

            for(var i=0;i<json.length;i++){
                datas.push({"name":json[i].EJMC,"symbolSize": getInt(2),"category": json[i].YJMC,"draggable": "true","value": json[i].SL,"label": {normal: {show: true,formatter:"{b}_{c}",position: 'top',textStyle:{fontSize:'20',fontWeight:'bold'}}},"itemStyle":{normal:{color:getcolor(json[i].YJMC)}}});
                links.push({"source": json[i].YJMC,"target": json[i].EJMC});
                cats.push({"name": json[i].EJMC});
            }
        },error: function(XMLHttpRequest, textStatus, errorThrown){

        }
    });

    function getcolor(n){
        for(var i=0;i<map_colo.length;i++){
            if(n==map_colo[i].name){
                return map_colo[i].value;
            }
        }
    }
    function getInt(i){
        if(i>100){
            return fRandomBy(80,100);
        }else if(i<5){
            return fRandomBy(40,60);
        }else{
            return i;
        }

    }
    function fRandomBy(under, over){
        switch(arguments.length){
            case 1: return parseInt(Math.random()*under+1);
            case 2: return parseInt(Math.random()*(over-under+1) + under);
            default: return 0;
        }
    }



    option = {
    backgroundColor: '',
    tooltip: {},
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '问题类型',
        type: 'graph',
        layout: 'force',
		
        force: {
            repulsion: 1200
        },
        data: datas,
        links:links,
        categories: cats,
        focusNodeAdjacency: true,
        roam: false,        
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
/** 线形图-问题类型定时切换 **/
function getWtlxMx(id){
	var key=[];
    var val=[];
    var ai=0;
    try {
        $.ajax({
            type: "get",
            url: "http://" + window.location.host + "/nfpt/four/getWtlxMx/" + jsons[ai].LXDM,
            async: false,
            data: {},
            dataType: "json",
            success: function (data) {
                updateai();
                $("#ino_id").html(jsons[ai].EJMC);
                for (var i = 0; i < data.length; i++) {
                    key.push(data[i].RQ);
                    val.push(data[i].SL);
                }
            }, error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }catch (e){
        console.log("error: four getWtlxMx");
    }

var option = {
	backgroundColor: '',
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : false,       
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,			
            data:key,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'10',
					fontWidth:'bold'
				}
			}	
        }
    ],
    yAxis : [
        {
            type : 'value',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#fff',//左边线的颜色
					width:'2'//坐标线的宽度
				}
			},
			axisLabel: {
				formatter: '{value} ',
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
					fontSize:'15',
					fontWidth:'bold'
				}
			}	
        }
    ],
    series : [
        {
            name:'',
            type:'line',
            stack: '总量',
			symbolSize: 8,//拐点大小
			label: {
                normal: {
                    show: true,
                    position: 'top',
					textStyle:{color:"#fbff05",fontSize:'15'}
                }
            },
			itemStyle : {
				normal : {
				    color:"#1094f6",
					lineStyle:{
						width:5,//折线宽度
						color:"#1094f6"//折线颜色
					}
				}
			},						
            data:val
        }
    ]
};
                    
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
    var dv=[];
    setInterval(function () {
        try {
            $.ajax({
                type: "get",
                url: "http://"+window.location.host+"/nfpt/four/getWtlxMx/"+jsons[ai].LXDM,
                async:false,
                data: {},
                dataType: "json",
                success: function(data){

                    $("#ino_id").html(jsons[ai].EJMC);


                    for(var i=0;i<data.length;i++) {
                        dv[i]=data[i].SL;
                    }

                    chart.setOption({series:[{data:dv}]});
                    updateai();
                },error: function(XMLHttpRequest, textStatus, errorThrown){

                }
            });
        }catch (e){
            console.log("error: setInterval four getWtlxMx");
        }
    },6000);
}
function updateai(){
    ++ai;
    if(ai>=jsons.length-1){
        ai=0;
    }
}
/** 仪表盘-满意率 **/
function getMyl(id){
	var v = 10;
$.ajax({				 
	type: "get",
    url: "http://"+window.location.host+"/nfpt/one/getMyl",
	async:false,
	data: {},
	dataType: "json",
	success: function(data){
		v = data.MYL;
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});

var option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%",
		show : false
    },
	calculable : false,
    toolbox: {

    },
    series: [
        {axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.166, '#f00'],
                    [0.5, '#EFC631'],
                    [0.835, '#63869e'],
                    [1, '#91c7ae']
                ],
                width: 30
            }
        },
            axisTick: {
                show: true
            },
            axisLabel: {
                distance: 6,
                textStyle: {
                    color: 'auto'
                }
            },
            itemStyle: {
                normal: {
                    color: 'auto'
                }
            },
            title: {
                offsetCenter: [0, '90%']
            },
            name: '',
            type: 'gauge',
            animationEasing:'circularIn',
            detail: {
                formatter:'{value}%',
                offsetCenter: [0, '60%'],
                textStyle: {
                    color: 'auto',
                    fontSize: 20
                }},
            data: [{value: v, name: ''}]
        }
    ]
};
                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
/** 仪表盘-接通率 **/
function getJtl(id){
	var v = 10;
$.ajax({				 
	type: "get",
    url: "http://"+window.location.host+"/nfpt/one/getJtl",
    async:false,
	data: {},
	dataType: "json",
	success: function(data){
		v = data.JTL;
	},error: function(XMLHttpRequest, textStatus, errorThrown){
		
	}
});


var option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%",
		show : false
    },
	calculable : false,
    toolbox: {

    },
    series: [
        {axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.166, '#f00'],
                    [0.5, '#EFC631'],
                    [0.835, '#63869e'],
                    [1, '#91c7ae']
                ],
                width: 30
            }
        },
            axisTick: {
                show: true
            },
            axisLabel: {
                distance: 6,
                textStyle: {
                    color: 'auto'
                }
            },
            itemStyle: {
                normal: {
                    color: 'auto'
                }
            },
            title: {
                offsetCenter: [0, '90%']
            },
            name: '',
            type: 'gauge',
            animationEasing:'circularIn',
            detail: {
                formatter:'{value}%',
                offsetCenter: [0, '60%'],
                textStyle: {
                    color: 'auto',
                    fontSize: 20
                }
            },
            data: [{value: v, name: ''}]
        }
    ]
};




                    
	var chart = echarts.init(document.getElementById(id));
	chart.setOption(option);
}
