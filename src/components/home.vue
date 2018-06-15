<template>
 <div class="content">
				<div class="All_summen">
					<div alt='javascript:;'>
						<ul>
							<li class="pinkFont">告警总数</li>
							<li><i><img src="@/assets/images/alert.png"/></i><span>15,960</span></li>
						</ul>
						<p class="pinkbg"><i></i>比上周减少了30.44% ↓</p>
					</div>
					<div alt='AnalyseEvent.html'>
						<ul>
							<li  class="blueFont">事件总数</li>
							<li><i><img src="@/assets/images/selectEvent.png"/></i><span>6</span></li>
						</ul>
						<p class="bluebg"><i></i>比上周减少了4% ↓</p>
					</div>
					<div alt='FallHostAnalyze.html'>
						<ul>
							<li  class="cyanFont">失陷主机总数</li>
							<li><i><img src="@/assets/images/shixian.png"/></i><span>1</span></li>
						</ul>
						<p class="cyanbg"><i></i>比上周减少了44% ↓</p></div>
					<div alt='FallServer.html'>
						<ul>
							<li  class="orangeFont">失陷服务器总数</li>
							<li><i><img src="@/assets/images/server.png"/></i><span>1</span></li>
						</ul>
						<p class="orangebg"><i></i>比上周减少了34% ↓</p></div>
					<div alt='AnalyseEvent.html'>
						<ul>
							<li  class="pinkFont">事件类型总数</li>
							<li><i><img src="@/assets/images/event5.png"/></i><span>3</span></li>
						</ul>
						<p class="pinkbg"><i></i>比上周增加了3.44% ↑</p></div>
					<div alt='javascript:;'>
						<ul>
							<li  class="blueFont">黑客总数</li>
							<li><i><img src="@/assets/images/hack.png"/></i><span>2</span></li>
						</ul>
						<p class="bluebg"><i></i>比上周减少了0.4% ↓</p></div>
					</div>
				<div class="dataShow">
					<div class="dataShow_left">
						<div>
							<button class="listToggle">≡</button>
							<h4> ▶ 失陷主机信息</h4>
							<div class="dataShow_left_top chart" id="Herbst_Host">
							</div>
							<div class="tableDefault">

							<table>
								<tr>
									<th>主机IP</th>
									<th>事件总数</th>
									<th>状态</th>
								</tr>
								<tr>
									<td>192.168.1.150</td>
									<td>500</td>
									<td>失陷</td>
								</tr>
								<tr>
									<td>192.168.1.13</td>
									<td>340</td>
									<td>疑失陷</td>
								</tr>
								<tr>
									<td>192.168.1.152</td>
									<td>250</td>
									<td>疑失陷</td>
								</tr>
							</table>
							</div>
						</div>
						<div>
							<button class="listToggle">≡</button>
								<h4> ▶ 失陷服务器信息</h4>
							<div class="dataShow_left_btm chart" id="Herbst_Server">
							</div>
							<div class="tableDefault">
							<table>
								<tr>
									<th>服务器IP</th>
									<th>事件总数</th>
									<th>状态</th>
								</tr>
								<tr>
									<td>192.168.1.11</td>
									<td>2656</td>
									<td>失陷</td>
								</tr>
							</table>
							</div>
						</div>
					</div>
					<div class="dataShow_Center">
						<div class="dataShow_Center_top" id="NetWork_Flow"></div>
						<div class="dataShow_Center_midden">
							<div id="map" style="height: 100%;">
							</div>
						</div>
						<div class="dataShow_Center_btm tableDefault">
							<h4> ▶ 最新事件类型</h4>
							<table>
								<tr>
									<th>开始时间</th>
									<th>结束时间</th>
									<th>资产IP</th>
									<th>资产类型</th>
									<th>事件类型</th>
								</tr>
								<tr>
									<td>2018-04-10 22:20:02:222</td>
									<td>2018-04-10 22:20:12:22</td>
									<td>192.168.1.1</td>
									<td>主机</td>
									<td>SQL注入攻击</td>
								</tr>
								<tr>
									<td>2018-04-10 19:20:02:002</td>
									<td>2018-04-10 19:20:10:000</td>
									<td>192.168.1.12</td>
									<td>主机</td>
									<td>远程代码执行</td>
								</tr>
								<tr>
									<td>2018-04-09 22:20:02:222</td>
									<td>2017-04-09 22:20:12:220</td>
									<td>192.168.1.117</td>
									<td>主机</td>
									<td>WebShell</td>
								</tr>
								<tr>
									<td>2018-04-09 10:20:02:222</td>
									<td>2017-04-09 10:20:12:222</td>
									<td>192.168.1.181</td>
									<td>主机</td>
									<td>cms通用漏洞</td>
								</tr>
								<tr>
									<td>2017-04-09 09:20:02:222</td>
									<td>2017-01-02 09:20:21:222</td>
									<td>192.168.1.119</td>
									<td>主机</td>
									<td>中间件漏洞</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="dataShow_Right">
						<div>
							<button class="listToggle">≡</button>
							<h4> ▶ 事件类型信息</h4>
								<div class="dataShow_Right_top chart" id="Event_Type">
								</div>
								<div class="tableDefault">
								<table>
									<tr>
										<th>事件类型</th>
										<th>事件总数</th>
									</tr>
									<tr>
										<td>内网扫描</td>
										<td>102</td>
									</tr>
									<tr>
										<td>服务器扫描</td>
										<td>35</td>
									</tr><tr>
										<td>隧道通讯</td>
										<td>25</td>
									</tr>
								</table>
								</div>
						</div>
						<div>
							<button class="listToggle">≡</button>
							<h4> ▶ 黑客信息</h4>
							<div class="dataShow_Right_btm chart" id="Hack_Info">
							</div>
							<div class="tableDefault">
							<table>
								<tr>
									<th>黑客IP</th>
									<th>国家</th>
									<th>时间数量</th>
								</tr>
								<tr>
									<td>72.17.174.253</td>
									<td>马来西亚</td>
									<td>4562</td>
								</tr>
								<tr>
									<td>163.98.225.20</td>
									<td>韩国</td>
									<td>4320</td>
								</tr>
							</table>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
// import echarts from "echarts";
let echarts = require('echarts/lib/echarts')

// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: "HelloWorld",
  data() {
    return {
      datas: [
        { name: "192.168.1.150", value: 500, status: "失陷" },
        { name: "192.168.1.13", value: 340, status: "疑失陷" },
        { name: "192.168.1.11", value: 250, status: "疑失陷" }
      ],
      eventTypeData: [
        { name: "内网扫描", value: 102 },
        { name: "DDOS", value: 35 },
        { name: "隧道通讯", value: 20 }
      ],
      flow: {
        time: [
          "23:09:35",
          "01:59:51",
          "03:09:01",
          "02:40:58",
          "16:49:57",
          "22:05:47",
          "18:55:17",
          "09:48:35",
          "02:33:44",
          "12:01:03",
          "18:30:58",
          "18:40:03",
          "18:41:03",
          "09:06:51",
          "06:38:54",
          "01:38:00",
          "09:43:22",
          "11:09:59",
          "03:16:11",
          "08:10:10",
          "02:36:56",
          "16:39:55",
          "04:27:48",
          "21:29:14"
        ],
        tcp: [
          1403767978,
          2147867731,
          937585414,
          3692605410,
          9390443420,
          1596022713,
          7200293915,
          2509465540,
          2063596355,
          5144268146,
          5968526933,
          3474066703,
          6833050696,
          6005517878,
          2640017888,
          1184720738,
          4338137528,
          786033162,
          7689469575,
          1888862361,
          5867556840,
          8352120037,
          4187357090,
          9611462166,
          619814795,
          7289464421,
          2278591552,
          4159528132,
          8250482029,
          8766186944,
          2676595089,
          8119032710,
          9966614384,
          3235897893,
          4888255532,
          2158230358,
          7297689276,
          5410338892,
          708130581,
          8908120109,
          4034230131,
          8979321309,
          913662864,
          7354515178,
          6920764049,
          380904288,
          2168532980,
          3854126054,
          7696827826,
          1190431192,
          4489451401,
          183189514,
          8559958243,
          5617008522,
          5582473754,
          1726314198,
          8511422823,
          3471696653,
          2101568117,
          9159640153,
          3980669094,
          4720019097,
          9472611709,
          4536372238,
          9363553777,
          2607223707,
          5419989637,
          6724806092,
          8923404700,
          5663617963,
          2526125586,
          6526465308,
          4707848565,
          9177646426,
          9274881082,
          1570093000,
          8848890001,
          8116967254,
          1725204377,
          5409019691,
          6257620731,
          5363773718,
          7017580920,
          148579753,
          1608718591,
          7955269541,
          1128623619,
          4698473102,
          1235778286,
          2191776910,
          7791098207,
          2126928019,
          4236568384,
          4386005123,
          6279114219,
          9497826695,
          5254669725,
          7676888282,
          2053992725,
          5318467852
        ],
        udp: [
          3090709470,
          3330674576,
          753462446,
          7260337004,
          7972709673,
          493722058,
          7398650817,
          7784018043,
          8686290202,
          7200602590,
          8827880695,
          8454486518,
          2279907979,
          7682543312,
          9452729938,
          7293549599,
          4463963198,
          8621055021,
          7671322109,
          4396833324,
          5072691450,
          8385322521,
          4247595573,
          835538177,
          4717872055,
          1518823538,
          8431693878,
          6709863185,
          2543204669,
          1189898605,
          9677968363,
          211334701,
          9986888504,
          7488358453,
          4860258124,
          3400913524,
          7291741737,
          7582320911,
          932707869,
          5153713224,
          5300597910,
          4861036293,
          1644411268,
          5927950441,
          2288931218,
          6368584537,
          5049481318,
          9159377897,
          2728349380,
          6245757581,
          2515084091,
          3254728898,
          681386409,
          7990272987,
          1780649531,
          4413609280,
          8645283457,
          5234500314,
          6640444253,
          2928998220,
          6460545562,
          9035764893,
          8739511380,
          5167389823,
          6046535124,
          6869772562,
          797836035,
          4543256279,
          231104508,
          5554737585,
          7064583183,
          4811786513,
          6473523690,
          5549562050,
          9455723948,
          3117245347,
          324694258,
          4850297768,
          5620745850,
          2843806551,
          7725499938,
          645626822,
          95336971,
          2490502181,
          495016782,
          8535029324,
          3619144731,
          5261279957,
          2654892307,
          164982377,
          3399614294,
          9923044377,
          478452841,
          5608110656,
          3615313045,
          735896459,
          6201640148,
          7391760159,
          3480901333,
          4841722757
        ],
        total: [
          6852550782,
          2311964114,
          4754099965,
          9194386977,
          1917817415,
          5075762149,
          9230158688,
          1580305702,
          8366578504,
          9512496506,
          1503276428,
          6075125584,
          2765923237,
          539507703,
          1364100604,
          4661128473,
          1109957020,
          3442215593,
          6754486401,
          4100443456,
          4483624412,
          9985871645,
          9087759213,
          8781024686,
          9085521862,
          4360450382,
          2814565671,
          9920886449,
          9374873980,
          2657700783,
          8718973904,
          3481620138,
          180577387,
          6575950928,
          8588502900,
          2958966840,
          7516726210,
          4564306969,
          9321029239,
          4721773329,
          6862561145,
          2367534701,
          9221496029,
          834672754,
          5782663353,
          3169672399,
          1272351531,
          5615472604,
          4011679301,
          6197996208,
          8398843406,
          1627380171,
          9427596602,
          8343244000,
          2304892273,
          2750324926,
          7760808879,
          1564528832,
          4660458887,
          3711271961,
          5897543993,
          5719044767,
          9466413398,
          6850732135,
          6371216590,
          2435853680,
          6304073304,
          9951472218,
          3387596551,
          8977590402,
          9871077212,
          8792107781,
          2825324267,
          214116048,
          9482484471,
          5259416252,
          5160291499,
          825860270,
          485469123,
          2658668540,
          1853696965,
          7479770329,
          3373603728,
          8821891498,
          2741259912,
          1622411384,
          8599519073,
          6522073924,
          6297452470,
          2372442739,
          6239078140,
          4235491057,
          3312261986,
          6685291378,
          8917804741,
          2305368308,
          8317727712,
          4232244136,
          3948181689,
          8685110916
        ]
      },
      lineStyle: "#676767",
      axisLabelcolor: "#e6e6e6",
      splitcolor: "#595959"
    };
  },
  mounted() {
    let _this = this;
	var width = $(".chart").width()
		$(".dataShow_left .tableDefault,.dataShow_Right .tableDefault").width($(".chart").width())
		$(".dataShow_left .tableDefault,.dataShow_Right .tableDefault").css({marginLeft:$(".chart").width()+"px"})
    drawLine();
    pie()
    function drawLine() {
      let line = echarts.init(document.getElementById("NetWork_Flow"));
      let option = {
        backgroundColor: "#333744",
        title: {
          text: " ▶ 流量趋势图",
          top: "10",
          textStyle: {
            //文字颜色
            color: "#4293ef",
            //字体风格,'normal','italic','oblique'
            fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "bold",
            //字体系列
            fontFamily: "sans-serif",
            //字体大小
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: function(value) {
            console.log(value);
            var str = "时间:" + value[0].name + "<br>";
            for (var i = 0; i < value.length; i++) {
              str +=
                value[i].marker +
                value[i].seriesName +
                ":" +
                _this.$test.ByteTo(value[i].data) +
                "<br>";
            }
            return str;
          },
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["TCP", "UDP", "Total"],
          show: true,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 15,
          itemHeight: 15,
          right: "5%",
          y: 1,
          itemGap: 6
        },
        //					    toolbox: {
        //					        feature: {
        //					            saveAsImage: {}
        //					        }
        //					    },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        dataZoom: [
          {
            show: true,
            type: "inside"
          }
        ],
        xAxis: [
          {
            name: "时间",
            type: "category",
            boundaryGap: true,
            nameTextStyle: {
              color: "#fff"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#595959"
              }
            },
            axisLabel: {
              color: "#e6e6e6"
            },
            data: _this.flow.time
          }
        ],
        yAxis: [
          {
            name: "( 流量 )",
            type: "value",
            nameTextStyle: {
              color: "#fff",
              padding: [0, 40, 0, 0]
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#e6e6e6",
              formatter: function(value) {
                return _this.$test.ByteTo(value);
                // return flow(value)
              }
            },
            splitLine: {
              lineStyle: {
                color: "#595959"
              }
            }
          }
        ],
        series: [
          {
            name: "Total",
            smooth: true,
            type: "line",
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "rgba(7,180,240,1)",
                borderColor: "rgba(7,180,240,0.3)",
                borderWidth: 20
              }
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#07b4f0"
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)"
                  }
                ])
              }
            },
            data: _this.flow.total
          },
          {
            name: "TCP",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "rgb(255,48,88)",
                borderColor: "rgba(255,48,88,0.3)",
                borderWidth: 20
              }
            },
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#ff3058"
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)"
                  }
                ])
              }
            },
            data: _this.flow.tcp
          },
          {
            name: "UDP",
            smooth: true,
            type: "line",
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "#b0d311",
                borderColor: "rgba(176,211,17,0.3)",
                borderWidth: 20
              }
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#b0d311"
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)"
                  }
                ])
              }
            },
            data: _this.flow.udp
          }
        ]
      };
      line.setOption(option);
	};
	 bar("Hack_Info",_this.datas)
	 bar("Herbst_Server",_this.datas)
	function bar (ele,data){
		var bar= echarts.init(document.getElementById(ele))
		let option = {
			backgroundColor:'#333744',
		    tooltip : {
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter: function(v){
					console.log(v)
		        	var status = (ele == "Herbst_Server"?"状态":"国家")
					return 'IP:'+v.data.status+"<br>被攻击次数："+v.value+"次<br>"+status+"："+v.data.name
		        }
		    },
		    legend: {
		    	top:"10",
		    	right:"10",
		    	left:150,
		        data:['失陷','疑失陷'],
		    },
		    grid: {
		    	top:'8%',
		        left: '10%',
		        right: '11%',
		        bottom: '10%',
		        containLabel: false
		    },
		    yAxis : [
		        {	
		        	name:"IP",
		        	nameTextStyle:{
						color:"#fff",
						padding:[0,40,0,0],
					},
		            type : 'category',
                    data:datafor(_this.datas,'ip') ,
		            axisLabel:{
		            	show:false,
                            color: _this.axisLabelcolor,
		            },
		            axisLine:{
					            	show:true,
					            	lineStyle:{
					            		color:_this.splitcolor
					            	}
						            },
		        }
		    ],
		     xAxis: [
		        {
		        	nameTextStyle:{
						color:"#fff",
						padding:[0,40,0,0],
					},
		            type : 'value',
		            axisLine:{
            			show:false,
	            	},
		            axisTick: {
			            show: false
			        },
			        axisLabel:{
                            color:  _this.axisLabelcolor
		           },
			        splitLine:{
			        	lineStyle:{
			        		color:_this.splitcolor
			        	}
			        }
		        }
		    ],
		    series : [
		        {
		            name:'bar',
		            type:'bar',
		            barMaxWidth:"28",
		             label: {
		                normal: {
		                    show: true,
		                    position: 'insideLeft',
		                    formatter:"{b}"
		                   }
		            },
		             itemStyle: {
		                normal: {
		                    color: function(params) {
		                        // build a color map as your need.
		                        var colorList = [
		                          '#02c0c8','#ff7e66'
		                        ];
		                        return   params.data.name == "疑失陷"?colorList[1]:colorList[0]
		                    }
		                   }
		                    },
		            data:valname(_this.datas)
		        }
		    ]
		};
	bar.setOption(option)
	};
  function pie(){
    
		var protoflow= echarts.init(document.getElementById('Event_Type'))
	    var option = {
	    		backgroundColor:"#333744",
			    tooltip : {
			        trigger: 'item',
			        formatter: function(v){	
			        	return '事件类型:'+v.name+"<br>发生次数："+v.value+"次"
			        }
			    },
			     grid: {
				    	top:'8%',
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
			    legend: {
			        orient: 'vertical',
			        top:'10',
			        left: '10',
					show:false
			    },
			    series : [
			        {
			            name: 'type',
			            type: 'pie',
			            radius : ['0%','35%'],
			            center: ['50%', '50%'],
			            data:_this.eventTypeData,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            },
			            label:{
				                normal: {
				                    position: 'inner',
				                    formatter:function(v){
				                    	return v.data.value 
				                    }
				                }
			            },
			            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
			        },
			        {
			            name: 'type',
			            type: 'pie',
			            radius : ['50%','65%'],
			            center: ['50%', '50%'],
			            data:_this.eventTypeData,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			}
	    protoflow.setOption(option)
		protoflow.on("click",function(p){
  				window.open('AnalyseEvent.html',"_self")
		})
	}


	$(".listToggle").on("click",function(){
		 	var $that = $(this)
		 	if($(this).text()=="≡"){
		 		$(this).text('◎')
		 		$(this).siblings('.tableDefault').stop().animate({
		 			left:'-'+width+'px'
		 		},500)
		 		$(this).siblings('.chart').stop().animate({
		 			left:'-'+width+'px'
		 		},500)
		 	}else{
		 		$(this).text('≡')
		 		$(this).siblings('.tableDefault').stop().animate({
		 			left:width+'px'
		 		},500)
		 		$(this).siblings('.chart').stop().animate({
		 			left:0
		 		},500)
		 	}
		 })
hostpie()
   function hostpie(){
    
		var protoflow= echarts.init(document.getElementById('Herbst_Host'))
	    var option = {
	    		backgroundColor:"#333744",
			    tooltip : {
			        trigger: 'item',
			        formatter: function(v){
			        	return 'IP:'+v.name+"<br>被攻击次数："+v.value+"次<br>状态："+v.data.status
			        }
			    },
			    grid: {
			    	top:'0%',
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    legend: {
			        orient: 'vertical',
			        top:'10',
			        left: '10',
//			        data: ar,
					show:false
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : ['0%','30%'],
			            center: ['50%', '50%'],
			            data:_this.datas,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                },
			            },
			            label:{
				                normal: {
				                    position: 'inner',
				                    formatter:function(v){
				                    	return v.data.value 
				                    }
				                }
			            },
			            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
			        },
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : ['40%', '50%'],
			            center: ['50%', '50%'],
			            data:_this.datas,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            },
			            label:{
				                normal: {
				                    position: 'inner',
				                    formatter:function(v){
				                    	return v.data.status 
				                    }
				                }
			            },
			            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
			        },
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : ['60%','70%'],
			            center: ['50%', '50%'],
			            data:_this.datas,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			}
	    protoflow.setOption(option)
	    protoflow.on("click",function(p){
  				window.open('FallHostAnalyze.html',"_self")
		})
  }


	function datafor(data,key){
			var iparr = []
			console.log(data)
			for (var i=0;i<data.length;i++){
				iparr.push({value:data[i].value,name:data[i].status})
			}	
			return iparr
		}
    function valname(data,key){
			var iparr = []
			for (var i=0;i<data.length;i++){
				iparr.push({value:data[i].value,name:data[i].status,status:data[i].name})
			}	
			return iparr
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.content {
  width: 100%;
  padding: 13px;
  .All_summen {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 16%;
      height: 130px;
      background: #333744;
      position: relative;
      box-shadow: 0 2px 5px 0 rgb(201, 201, 201);
      cursor: pointer;
      ul {
        text-align: center;
        padding: 0 25px;
        li:first-child {
          border-bottom: 1px solid #595959;
          font-size: 16px;
          padding: 6px 0;
          color: #fff;
        }
        li:last-child {
          font-size: 32px;
          color: #f2f2f2;
          font-weight: bold;
          height: 70px;
          position: relative;
          i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translate(0, -50%);
            display: inline-block;
            width: 28px;
            img {
              width: 100%;
            }
            @media (max-width: 1740px) {
              img {
                display: none;
                width: 100%;
              }
            }
          }
          span {
            line-height: 70px;
          }
        }
      }
      & > p {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        line-height: 25px;
        background: rgba(0, 0, 0, 0.2);
        font-size: 12px;
        color: #fff;
        i {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 5px;
          background-color: #fff;
          vertical-align: middle;
        }
      }
    }
  }
  .dataShow {
    width: 100%;
    display: flex;
    margin-top: 13px;
    justify-content: space-between;
    & > div {
      width: 55%;
    }
    & > div:first-child,
    & > div:last-child {
      width: 21.5%;
    }
    .dataShow_left_top,
    .dataShow_left_btm,
    .dataShow_Right_top,
    .dataShow_Right_btm {
      width: 100%;
      height: 343px;
      background: #333744;
    }
    .dataShow_left_btm,
    .dataShow_Right_btm {
      & > div {
        margin-top: 13px;
      }
    }
    .dataShow_Center_top,  
    .dataShow_Center_midden,
    .dataShow_Center_btm {
      background: #fff;
      height: 238px;
    }
    .dataShow_Center_midden,
    .dataShow_Center_btm {
      margin-top: 13px;
    }
    .dataShow_Center_midden {
      overflow: hidden;
    }
    .dataShow_Center_btm {
      height: 270px;
      background: #333744;
    }
  }
  .dataShow > div > div:hover,
  .All_summen > div:hover {
    box-shadow: 0 0px 1px 1px #4293ef;
    //      border:1px solid #4293EF;
  }
  .dataShow_Center_btm {
    h4 {
      color: #9677b3;
      padding: 8px;
      text-align: left;
    }
    padding: 0;
  }
  .dataShow_left > div,
  .dataShow_Right > div {
    height: 380px;
    margin-bottom: 13px;
    position: relative;
    overflow: hidden;
    background: #333744;

    h4 {
      padding: 8px;
      text-align: left;
      background: #333744;
      color: #ff7e66;
    }
    .chart,
    .tableDefault {
      position: absolute;
      top: 37px;
    }
    &:last-child {
      h4 {
        color: #4293ef;
      }
    }
    table tr td {
      height: 37px;
    }
    button {
      position: absolute;
      right: 10px;
      z-index: 50;
      background: none;
      border: none;
      font-size: 30px;
      color: #fff;
    }
  }
}
#map {
  background: #333744;
}
.tableDefault{
	width: 100%;
}
//  .chartTransfel{
//      height: 343px;
//      &>div{
//          float: left;
//      }
//  }
</style>
