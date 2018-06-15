<template>
  <div class="content">
				<div class="selectTab">
					<ul class="serverNav">
						<li>
							<span class="selectStyle">
								<select name="" id="AssetClass" >
									<option value="">资产类型</option>
									<option value="">主机</option>
									<option value="">服务器</option>
									
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="directionS" >
									<option value="">方向</option>
									<option value="">内</option>
									<option value="">外</option>
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="threatgrade" >
									<option value="">威胁等级</option>
									<option value="">高</option>
									<option value="">中</option>
									<option value="">低</option>
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="EventProtoTypeS" >
									<option value="">事件类型</option>
									<option value="">内网扫描</option>
								</select>
							</span>
						</li>
						<li>
							<span class="selectStyle">
								<select name="" id="parsing" >
									<option value="">分析算法</option>
									<option value="">规则引擎</option>
								</select>
							</span>
						</li>
						<li>
							资产IP <input type="text" name="" id="" value="" style="width: 100px;"/>
						</li>
						<li>
							<div class="time_select">
								<p>
									<input type="text" id="date-select" />
								</p>
							</div>
						</li>
						<li>
							<button class="click_btn click_green" style="margin-top: 2px;">搜索</button>
						</li>
					</ul>
				</div>
				<div class="contentC">
				<div class="All_sum">
					<ul>
						<li>
							<div>
								<p>
								<img src="@/assets/images/EventSum.png"/><span>事件总数</span>
								</p>
							</div>
							<div>
								<p>6</p>
								<p class="lastP">比上周增长了0.82%</p>
							</div>
						</li>
						<li>
							<div>
								<p>
								<img src="@/assets/images/A_2.png"/><span class="blueFont">高危事件总数</span>
								</p>
              </div>
							<div>
								<p>8,576</p>
								<p class="lastP bluebg">比上周增长了0.56%</p>
							</div>
						</li>
						<li onclick="window.open('assetMange.html','_self')" style="cursor: pointer;">
							<div>
								<p>
								<img src="@/assets/images/A_3.png"/><span class="cyanFont">资产总数</span>
								</p>
                </div>
							<div>
								<p>47</p>
								<p class="lastP cyanbg">比上周增长了12.21%</p>
							</div>
						</li>
						<li>
							<div>
								<p>
								<img src="@/assets/images/A_4.png"/><span class="orangeFont">事件类型总数</span>
								</p>
                </div>
							<div>
								<p>3</p>
								<p class="lastP orangebg">比上周增长了0.5%</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="Event_chart">
				</div>
				<div class="tableDefault">
					<table class="" border="" cellspacing="" cellpadding="">
						<tr>
							<th>开始时间</th>
							<th>结束时间</th>
							<th>资产IP</th>
							<th>资产类型</th>
							<th>方向</th>
							<th>威胁等级</th>
							<th>事件类型</th>
							<th>分析算法</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>2018-04-02  13:20:20</td>
							<td>2018-04-02  13:21:20</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>SQL注入攻击</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  12:56:34</td>
							<td>2018-04-02  12:57:56</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>远程代码执行</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  11:35:45</td>
							<td>2018-04-02  11:36:13</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>WebShell</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  11:21:55</td>
							<td>2018-04-02  11:22:35</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>cms通用漏洞</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  11:11:10</td>
							<td>2018-04-02  11:13:24</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>中间件漏洞</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  10:56:51</td>
							<td>2018-04-02  10:57:45</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>黑域名</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  10:24:31</td>
							<td>2018-04-02  10:30:32</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>cms通用漏洞</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						<tr>
							<td>2018-04-02  10:09:01</td>
							<td>2018-04-02  10:11:14</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>中间件漏洞</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
						
						<tr>
							<td>2018-04-02  09:20:20</td>
							<td>2018-04-02  09:23:41</td>
							<td>192.168.1.150</td>
							<td>主机</td>
							<td>内</td>
							<td>高危</td>
							<td>黑域名</td>
							<td>规则引擎</td>
							<td>
								<button class="click_btn click_green">查看线索</button>
								<button class="click_btn click_orange">查看资产</button>
								<button class="click_btn click_purple">查看类型</button>
							</td>
						</tr>
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

// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data(){
			return {

			}
	},
	mounted(){
		let _this = this
		line()
				 function line(){
							let	line= echarts.init(document.getElementsByClassName('Event_chart')[0])
							let	option = {
									backgroundColor:"#333744",
										title: {
												text: ' ▶ 事件趋势图',
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
										formatter:"时间 ：{b}<br>发生 ：{c}次" ,
												axisPointer: {
														type: 'cross',
														label: {
																backgroundColor: '#6a7985'
														}
												}
										},
										legend: {
												data:['HTTP','DNS','UDP'],
												show:false
										},
										grid: {
												left: '3%',
												right: '4%',
												bottom: '3%',
												containLabel: true
										},
										xAxis : [
												{
													name:"( 时间 )",
													nameTextStyle:{
												color:"#fff",
												padding:[0,40,0,0],
											},
														type : 'category',
														boundaryGap : false,
														axisLabel:{
																					color: '#e6e6e6'
														},
														axisLine:{
															show:true,
															lineStyle:{
																color:'#595959'
															}
															},
														data : ['2018-03-26','2018-03-27','2018-03-28','2018-03-29','2018-03-30','2018-04-01','2018-04-02']
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
														type:'line',
														smooth:true,
															lineStyle:{
																			normal:{
																				width:1,
																				color:"#00c1de"
																			}
																		},
														data:[150, 22, 201, 154, 10, 330, 40]
												}
										]
					};
  			line.setOption(option)
				}

				this.$test.searchNav($(".serverNav"),$(".tab_nav"))
	}
}
</script>
<style lang="scss">
.content{
    width: 100%;
       
}
.contentC{
//  width: 100%;
//  background: #edeeee;
    .Event_chart{
                box-shadow: 0 2px 5px 0 rgba(201, 201, 201, 0.5);
        width: 100%;
        background: #fff;
        margin-top: 13px;
        height: 250px;
    }
 }
 .tableDefault{
            margin-top:20px;
            box-shadow: 0 2px 5px 0 rgba(201, 201, 201, 0.5);
 }

</style>
