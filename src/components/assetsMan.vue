<template>
<div class="content">
			<ul class="tab_nav">
				<li :class= "{tab_nav_active: show}" @click= "NavTap(0)">
					资产列表
				</li>
				<li  :class= "{tab_nav_active: !show}" @click= "NavTap(1)" >
					自动识别资产
				</li>
			</ul>
			<!--***********
				    * 资产列表 *
				    ***********-->
			<div class="tab-plane">

				<div v-if= "show">


					<div class="selectTab" >
						<ul class="serverNav" :style= "{height:height+'px'}">
							<li>
								资产IP
								<input type="text" id="searchip" v-model="assetsags.ip" style="width: 100px;" />
							</li>
							<li>
								<span class="selectStyle">
									<select name="" id="livesearch">
										<option  v-for= "(x,v) in assetsags.liveList" :value= "v" :selected="v==0">{{x}}</option>
									</select>
								</span>
							</li>
							<li>
								类型
								<input type="text" name="" id="searchtype" v-model="assetsags.type" style="width: 100px;" />
							</li>
							<li>
								所有者
								<input type="text" name="" id="ownersearch" v-model="assetsags.owner" value="" />
							</li>
							<li>
								所属部门
								<input type="text" name="" id="depsearch" v-model="assetsags.dep" style="width: 100px;" />
							</li>
							<li>
								<span class="selectStyle">
									<select name="" id="searchstatus">
										<option  v-for= "(x,v) in assetsags.statusList" selected="v==2" :value= "v">{{x}}</option>
									</select>
								</span>
							</li>
							<li>
								<button class="click_btn click_green" id="searchList" @click="serverList">搜索</button>
								<button class="click_btn click_orange" id="addAsslist" @click="addass">添加</button>
							</li>
						</ul>
					</div>
					<div class="tableDefault" id="tableDefault">
						<table id="assetList">
							<tr>
								<th>IP</th>
								<th>操作系统</th>
								<th>服务</th>
								<th>MAC</th>
								<th>存活状态</th>
								<th>类型</th>
								<th>所有者</th>
								<th>所属部门</th>
								<th>状态</th>
								<th>发起攻击数</th>
								<th>被攻击数</th>
								<th>DNS查询</th>
								<th>流量</th>
								<th>操作</th>
							</tr>
							<tr v-for= "k in assetsags.asslist">
								<td> {{ k.ip }} </td>
								<td> {{ k.os }}</td>
								<td>
									<span v-for= "j in assetsags.asslist.services">
										<span class="assetBg ftp">{{j}}</span>
									</span>
								</td>
								<td>{{k.mac}}</td>
								<td>{{k.live?"在线":"不在线"}}</td>
								<td>{{k.type}}</td>
								<td>{{k.owner}}</td>
								<td>{{k.dep}}</td>
								<td>{{k.status?"已确认":"未确认"}}</td>
								<td>{{k.attkNum}}</td>
								<td>{{k.attackedNum}}</td>
								<td>{{k.dnsNum}}</td>
								<td>{{k.streamSize}}</td>
								<td>
									<button class="click_btn click_green editMan" @click= "edit(k)">编辑</button>
									<button class="click_btn click_orange delMan"  @click="delASSets(k)">删除</button>
									<button  :disabled= "k.status==1" v-bind:class= "['click_btn' ,'btn_sum', {click_purple:!k.status},{click_out:k.status}]">
										{{k.status?"已确认":"确认"}}
									</button>
								</td>
							</tr>
						</table>
						<v-pagination :total="assetsags.total" :current-page='assetsags.page' @pagechange="pagechange"></v-pagination>
					</div>
				</div>
				<!--**************
						    *自动识别资产 *
						    **************-->
				<div  v-else= "show" style="padding:13px 13px">
					<div class="tableDefault">
						<div class="btn-group">
							<button class="click_btn click_green" id="runAss" @click="carry">执行</button>
							<button class="click_btn click_orange" id="addAssetSc" @click="addscan">添加</button>
						</div>
						<table id="assetsScanListtable">
							<tr>
								<th>状态</th>
								<th>起始IP</th>
								<th>终止IP</th>
								<th>资产列表</th>
								<th>所属部门</th>
								<th>操作</th>
							</tr>
							<tr v-for="k in assetsScanags.Scanlist">
								<td>
									<i class="statusblo" :style="{ 'background-position-y': k.enable ? '-18px' : '0px'}"></i>
								</td>
								<td>
									{{k.IPStart}}
								</td>
								<td>
									{{k.IPEnd}}
								</td>
								<td>
									{{k.type}}
								</td>
								<td>
									{{k.dep}}
								</td>
								<td>
									<button class="click_btn click_blue">修改</button>
									<button class="click_btn click_orange">删除</button>
									<button v-if="!k.enable" class="click_btn click_orange">停用</button>
									<button v-else="k.enable" class="click_btn click_green">启用</button>
								</td>
								<!--<td colspan="6">-----------暂时没有数据-----------</td>-->
							</tr>
						</table>
					
						<v-pagination :total="assetsScanags.total" :current-page='assetsScanags.page' @pagechange="pagechange"></v-pagination>
					</div>
				</div>
			</div>
      <div class="modal" id="assetsScanListModal" v-show="scanModal">
				<div class="assetEditTitle" id="assetsScanListTitle">
					<p>添加识别对象</p>
					<span id="delmodal" class="assetsExit">×</span>
					<i class="sanjiao"></i>
				</div>
				<div style="margin-top: 30px;">
			<div id="name" style="text-align: center;color: #4192ee;"></div>
			<div style="margin-top: 40px;" class="addManC" id="editIp">
				<dl>
					<dt>
						<span>起始IP&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="startIP">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>终止IP&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="ENDIP">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>资产类型&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="scanType">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>所属部门&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="scanDep">
					</dd>
				</dl>
			</div>
		</div>
		<div class="addFooter">
			<!--<span class="click_btn click_green" id="scancancel">取消</span>-->
			<span class="click_btn click_orange" id="submit">确认</span>
		</div>
	</div>
	<div class="modal" id="L_modal"   :style="{'display':editModal?'block':'none'}" >
		<div class="assetEditTitle" id="L_Title">
			<p id="L_title">{{modalJudag?"编辑资产":"添加资产"}}</p>
			<span id="delmodal" class="L_exit" @click="hideModal()">×</span>
			<i class="sanjiao"></i>
		</div>
		<div style="margin-top: 30px;">
			<div style="margin-top: 40px;" class="addManC" id="editIp">
				<dl>
					<dt>
						<span>IP&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="l_ip" v-model="assetsags.editS.ip">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>操作系统&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="OS" v-model="assetsags.editS.OS">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>服务&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="services"  v-model="assetsags.editS.os">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>MAC&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="l_Mac"  v-model="assetsags.editS.mac">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>存活状态&nbsp;</span>
					</dt>
					<dd>
						<select name="" class="modeS" id="liveStatus">
							<option :value="k" :selected="assetsags.editS.live==k?'selected':false" v-for="(v,k) in assetsags.liveList">{{v}}</option>
						</select>
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>类型&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="l_type"  v-model="assetsags.editS.type">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>所有者&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="l_owner" v-model="assetsags.editS.owner">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>所属部门&nbsp;</span>
					</dt>
					<dd>
						<input type="text" id="l_dep" v-model="assetsags.editS.dep">
					</dd>
				</dl>
			</div>
			<div class="addManC" id="editMac">
				<dl>
					<dt>
						<span>状态&nbsp;</span>
					</dt>
					<dd>
						<select name="" class="modeS" id="l_status">
							<option  v-for= "(x,v) in assetsags.statusList" :selected="v==assetsags.editS.status" :value= "v">{{x}}</option>
						</select>
					</dd>
				</dl>
			</div>
		</div>
		<div class="addFooter">
			<!--<span class="click_btn click_green" id="L_cancel">取消</span>-->
			<span class="click_btn click_orange" id="L_submit" @click="submit">确认</span>
		</div>
	</div>
		</div>        
</template>
<script>
import pagination from '@/components/pagination/pagination'
export default {
	components : {
           'v-pagination': pagination
        },
	data(){
		return {
			api:{
		  		assetsList:'/api/search/assetsManage/assetsList?pageSize=10&',	
					addAssets:'/api/search/assetsManage/addAssets?',
		  		updateAssets:'/api/search/assetsManage/updateAssets?',	
					delAssets:'/api/search/assetsManage/delAssets?',


					assetsScanList:"/api/search/assetsManage/assetsScanList?pageSize=10&",
					runScan:'/api/search/assetsManage/runScan?',
					addAssetsScan:'addAssetsScan?',
					updateAssetsScan:'updateAssetsScan?',
					delAssetsScan:'delAssetsScan?'
					},
			assetsags:{
					liveList:["存活状态","不在线","在线"],
					statusList:["未确认","已确认","状态"],
					ip:'',
					owner:'',
					live:'',
					type:'',
					dep:'',
					status:'',
			 		total: 150,     // 记录总条数
					assStatus:0,
					asslist:[],
					editS:{
						ip:"",
						mac:"",
						live:"",
						owner:"",
						type:"",
						dep:"",
						status:"",
						os:"",
						services:[]
					},
					Oldlist:[]
			},
			assetsScanags:{
					Scanlist:[],
					enable:"",
					startIP:"",
					endIP:"",
					type:"",
					status:"",
			 		total: 150,     // 记录总条数
					dep:""
			},
					modalJudag:false, // true  编辑资产  false 添加资产
					scanModal:false,
					editModal:false,
					display: 10,   // 每页显示条数
					page:1,
					height:30,
					show:true,
		}
	},
	mounted(){
		this.assListS()
		this.assscanList()
		
	},
	methods:{
				assListS(){
					let _this = this
									this.axios.get(this.api.assetsList+"ip="+this.assetsags.ip+
																						"&owner="	+this.assetsags.owner+
																						"&live="+this.assetsags.live+
																						"&type="+this.assetsags.type+
																						"&dep="+this.assetsags.dep+
																						"&status="+this.assetsags.status+
																						"&page="+ this.page).then( data =>{
																								_this.assetsags.asslist = data.data.results
																								_this.assetsags.total = data.data.count
						})
			},
			assscanList(){
				let _this =this
							this.axios.get(this.api.assetsScanList+"enable="+this.assetsScanags.enable+
																						"&startIP="	+this.assetsScanags.startIP+
																						"&endIP="+this.assetsScanags.endIP+
																						"&type="+this.assetsScanags.type+
																						"&dep="+this.assetsScanags.dep+
																						"&status="+this.assetsScanags.status+
																						"&page="+ this.page).then( data =>{
																								_this.assetsScanags.Scanlist = data.data.results
																								_this.assetsScanags.total = data.data.count
						})
			},
			updateAssets(){
						this.axios.post(this.api.updateAssets+"oldIp="+this.assetsags.Oldlist.ip  + 
																								"&oldMac=" + this.assetsags.Oldlist.mac + 
																								"&oldLive=" + this.assetsags.Oldlist.live + 
																								"&oldType=" + this.assetsags.Oldlist.type + 
																								"&oldOwner=" + this.assetsags.Oldlist.owner + 
																								"&oldDep=" + this.assetsags.Oldlist.dep + 
																								"&oldStatus="+this.assetsags.Oldlist.status+
																								"&oldServices="+this.assetsags.Oldlist.oldServices+
																								"&oldOS="+this.assetsags.Oldlist.os+
																								"&newOS="+this.assetsags.editS.os+
																								"&newIp="+this.assetsags.editS.ip +
																								"&newServices="+this.assetsags.editS.services +
																								"&newMac="+this.assetsags.editS.mac + 
																								"&newLive=" + this.assetsags.editS.live + 
																								"&newType=" + this.assetsags.editS.type +
																								"&newOwner="+ this.assetsags.editS.owner + 
																								"&newDep="+ this.assetsags.editS.dep + 
																								"&newStatus="+this.assetsags.editS.status).then( data =>{
																							console.log(data)
																							if(data.data.status==0){
																								alert("修改成功")
																								_this.assListS()
																							}else{
																								alert("修改失败:"+data.msg)
																							}
																								
						})

			},
			delAssets(m){
					this.axios.post(this.api.delAssets+"ip=" + m.ip + 
																				"&mac=" + m.mac + 
																				"&live=" + m.live + 
																				"&type=" + m.type + 
																				"&owner=" + m.owner + 
																				"&dep=" + m.dep + 
																				"&status=" + m.status).then(data=>{
																					data.data.status == 0?alert("删除成功"):alert("删除失败")
																					_this.assListS()
																				})
			},
			add(){
				this.axios.post(this.api.addAssets+"ip=" +this.assetsags.editS.ip +
		 							  "&mac=" + this.assetsags.editS.mac + 
		 							  "&live=" + this.assetsags.editS.live + 
		 							  "&type=" + this.assetsags.editS.type +
		 							  "&owner=" + this.assetsags.editS.owner + 
		 							  "&os=" + this.assetsags.editS.os + 
		 							  "&services=" + this.assetsags.editS.services + 
		 							  "&dep=" + this.assetsags.editS.dep + 
		 							  "&status="+this.assetsags.editS.status ,"{}").then(data=>{
											 if(data.data.status==0){
												 alert("添加成功")
											 		_this.assListS()
											 }else{
												 alert("添加失败")
											 }
										 })
			},
			serverList(){
						this.assListS()
			},
			addass(){
					this.editModal = true
					this.modalJudag = false
			},
		 	NavTap(that){
				this.show = that==0?true:false
				this.page = 1
				if(this.show){
					this.assListS()
				}else{
					this.assscanList()
				}
		 },
		 delASSets:function(obj){
			console.log(obj)
			if(confirm("确定删除吗？")){
					this.delAssets(item)
			}
		},
		 edit:function(item){
			 this.modalJudag = true
			 this.editModal = true
			$.extend(this.assetsags.Oldlist,item)
			 item.live= item.live?2:1
			 $.extend(this.assetsags.editS,item)

		 },
		 hideModal(){
			 this.editModal = false
		 },

		 submit(){
			 if(this.modalJudag){
				 if(confirm("确定修改吗？")){

					  // this.updateAssets()
				 }else{
					 this.assetsags.Oldlist = {}
					 this.assetsags.editS = {}
				 }
			 }else{
				 if(confirm("确定添加吗？")){
					 this.add()
				 }else{
					 this.assetsags.editS = {}
				 }
			 }
			 console.log(	this.assetsags.editS)
			 console.log(	this.assetsags.Oldlist)

		 },

		//自动识别
		carry(){
			this.axios.get(this.api.runScan).then(data=>{
				 data.data.status==0?alert("执行成功"):alert("执行失败")
			})
		},
		
		addscan(){
						this.scanModal=true
		},

		pagechange:function(currentPage){
			if(this.show){
				this.page = currentPage
				this.assListS()
			}else{
			this.page = currentPage
			this.assscanList()
			}
       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		 }
		
	},
	created(){
		}
};
</script>
<style lang="scss">
.content {
  width: 100%;
  padding: 0;
  .tab_nav {
    padding: 20px 0 0 20px;
		margin-bottom: 13px;
    display: flex;
    background: #333744;
    li {
      line-height: 40px;
      padding: 0 25px;
      font-size: 14px;
      color: #ffffff;
      cursor: pointer;
    }
    .tab_nav_active {
      color: #00c1de;
      background: #42485b;
    }
  }
  h5 {
    color: #4293ef;
    font-size: 18px;
  }
  .tab-plane > div {
    display: none;
    background: #42485b;
    padding: 40px;
    &:first-child {
      padding: 0;
      display: block;
    }
  }
  .routeSetList {
    width: 800px;
  }
  #MapSetting {
    padding: 20px 40px;
    .selectDiv {
      padding: 40px;
      color: #fff;
      select {
        width: 100px;
        color: #4293ef;
        height: 36px;
        background: #f2f2f2;
        border: solid 1px #dedede;
        margin-right: 40px;
      }
    }
  }
}
.btn-group {
  text-align: right;
  padding-bottom: 20px;
}
#tableDefault {
  padding-top: 0px;
}
.tableDefault {
  h4 {
    color: #4293ef;
  }
  .click_orange {
    margin-left: 5px;
  }
}
.statusblo {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("../assets/images/manage.png") no-repeat;
  background-position-y: -18px;
  vertical-align: middle;
}
</style>
