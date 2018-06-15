<template>
  <div class="content">
				<div class="selectTab">
					<ul class="serverNav">
						<li>
							<span class="selectStyle">
								<select name="" id="apply" >
									<option value="">应用类型</option>
									<option value="">WEB</option>
									<option value="">FTP</option>
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="exietStatus" >
									<option value="">状态</option>
									<option value="">失陷</option>
									<option value="">疑失陷</option>
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="EventProtoTypeS" >
									<option value="">事件类型</option>
								</select>
							</span>
						</li>
						<li>
							服务器IP
							<input type="text" name="" id="" value="" style="width: 100px;" />
						</li>
						<li>
							<button class="click_btn click_green">搜索</button>
						</li>
					</ul>
				</div>
				<div class="contentC">
				<div class="All_sum">
					<ul class="sumDetail">
						<li>
							<div>
								<p>
								<img src="@/assets/images/fallServer1.png"/><span>服务器总数</span>
								</p>
							</div>
							<div>
								<p>1</p>
								<p class="lastP">比上周增长了0.12%</p>
							</div>
						</li>
						<li>
							<div>
								<p>
								<img src="@/assets/images/fallServer2.png"/><span class="blueFont">失陷服务器总数</span>
								</p>
                </div>
							<div>
								<p>1</p>
								<p class="lastP bluebg">比上周增长了0.2%</p>
							</div>
						</li>
						<li>
							<div>
								<p>
								<img src="@/assets/images/fallServer3.png"/><span class="cyanFont">疑失陷服务器总数</span>
								</p>
                </div>
							<div>
								<p>0</p>
								<p class="lastP cyanbg">比上周减少了0.3%</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="Event_chart">
				</div>
				<div class="tableDefault">
					<table class="" border="" cellspacing="" cellpadding="">
						<tr>
							<th>最早事件时间</th>
							<th>最近事件时间</th>
							<th>服务器IP</th>
							<th>应用总数</th>
							<th>应用类型</th>
							<th>事件总数</th>
							<th>事件类型总数</th>
							<th>事件类型</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>2018-04-10 12:14:23</td>
							<td>2018-04-10 14:34:23</td>
							<td>192.168.1.151</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>2</td>
							<td>1</td>
							<td>WebShell</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<!-- <tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr>
						<tr>
							<td>2017-10-02  13:20:20</td>
							<td>2017-10-02  13:20:20</td>
							<td>192.168.1.150</td>
							<td>2</td>
							<td>WEB FTP</td>
							<td>12</td>
							<td>22</td>
							<td>IP扫描</td>
							<td>失陷</td>
							<td>
								<button class="click_btn click_orange">编辑状态</button>
								<button class="click_btn click_purple">查看详情</button>
							</td>
						</tr> -->
					</table>
					
					<div class="page">
									<div>
			                    		<div class="pagination" id="yema"></div>
					                    <div class="right">
					                        <span>共 <span class="pagetotal" id="routeSetTablePge">1</span> 页</span>
					                        <span>到第 <input type="text" value="1" id="currentPage"> 页</span>
					                        <span class="toPage" id="assetsTopage">确定</span>
			                    		</div>
			                    	</div>
								</div>
				</div>
				</div>
			</div>

</template>
<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data(){
    return {

    }
  },
  mounted(){

    bar() 
    function bar(){
     var bar= echarts.init(document.getElementsByClassName('Event_chart')[0])
				let	option = {
						backgroundColor:"#333744",
					    title: {
					        text: ' ▶ 服务器事件排名',
							top:"10",
					        textStyle:{
						        //文字颜色
						        color:'#fff',
						        //字体风格,'normal','italic','oblique'
						        fontStyle:'normal',
						        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
						        fontWeight:'bold',
						        //字体系列
						        fontFamily:'sans-serif',
						        //字体大小
						　　　　 fontSize:16
						    }
					    },
					    tooltip : {
							trigger: 'axis',
							formatter:"IP ：{b}<br>发生 ：{c}次" ,
					        axisPointer: {
					            type: 'cross',
					            label: {
					                backgroundColor: '#6a7985'
					            }
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis : [
					        {
					        		name:"( IP )",
						        	nameTextStyle:{
												color:"#fff",
												padding:[0,40,0,0],
											},
					            type : 'category',
					            boundaryGap : true,
					            axisLabel:{
				                            color: '#e6e6e6'
			            		},
			            		axisLine:{
					            	show:true,
					            	lineStyle:{
					            		color:'#595959'
					            	}
						            },
					            data : ['192.168.1.151']
					        }
					    ],
					    yAxis : [
					        {
					        		name:"( 次数 )",
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
				                            color: '#e6e6e6'
			            		},
			            		splitLine:{
			            			lineStyle:{
					        			color:'#595959'
					        		}
			            		}
					        }
					    ],
					    series : [
					        {
					            name:'HTTP',
								type:'bar',
								barMaxWidth:40,
					            smooth:true,
					            areaStyle: {normal: {}},
					            data:[1]
					        }
					    ]
		};
  			bar.setOption(option)
   }

    this.$test.searchNav($(".serverNav"),$(".tab_nav"))
  }
}
</script>
<style lang="scss">
.contentC{
    .Event_chart{
        width: 100%;
        background: #fff;
        margin-top: 13px;
        height: 250px;
        box-shadow: 0 2px 5px 0 rgba(201, 201, 201, 0.5);
    }
.tableDefault{
    margin-top:20px;
    box-shadow: 0 2px 5px 0 rgba(201, 201, 201, 0.5);
 }
 .echartDiv{
     position: relative;
     height: 250px;
     .check,.selectStyle{
         position: absolute;
         top: 0px;
         z-index: 500;
     }
     .check{
         right: 250px;
         color: #fff;
         font-size: 14px;
         top: 10px;
         input{
             margin-left: 0px;
             display: none;
            
         }
         input + label{
            background-color: none;
            border:1px solid #595959;
            color: #eee;
            width:15px;
            height:15px;
            display: inline-block;
            text-align: center;
            vertical-align: text-top;
            font-size: 14px;
            line-height: 15px;
        }
        input:checked + label{
            background-color: none;
            }
            input:checked + label:after{
                content:"\2714";
            }
     }
     .selectStyle{
         right: 30px;
     }
     .flows{
         right: 150px;
     }
 }
.sumDetail{
    li{
        width: 32.5%;
    }
}
}
</style>
