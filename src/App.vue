<template>
  <div id="app">
      <div class="login-user">
        <span>admin </span><span> | </span><span class="pointer" onclick="window.open('login.html','_self')"> 退出</span>
      </div>
      <div class="header">
        <div class="logo"><img src="@/assets/images/antell.png"/></div>
        <div class="Title"><img src="@/assets/images/title.png"/></div>
      </div>
      <section>
        <div class="nav">
            <ul>
              <li class="nav_active pointer">
                <div>
                <router-link to='/'>  
                  <img src="@/assets/images/Summary.png" class="showImg"/>
                  <img src="@/assets/images/Summary_hover.png" class="activeImg"/>
                  <p>概要</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                  </router-link>
                </div>
              </li>
              <li>
                <div>
                  <img src="@/assets/images/Analyse.png" class="showImg"/>
                  <img src="@/assets/images/Analyse_hover.png" class="activeImg"/>
                  <p>威胁分析</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
                <ul> 
                  <li><router-link to='/ThreatEvents'>威胁事件分析</router-link></li>
                  <li><router-link to='/ThreatType'>威胁类型分析</router-link></li>
                  <li><router-link to='/FallHost'>失陷主机分析</router-link></li>
                  <li><router-link to='/FallSearch'>失陷服务器分析</router-link></li>
                  <li><router-link to='/AlertS'>告警分析</router-link></li>
                  <li><router-link to='/HackS'>黑客分析</router-link></li>
                  <i></i>
                </ul>
              </li>
              <li>
                <div>
                  <img src="@/assets/images/NetWork.png" class="showImg"/>
                  <img src="@/assets/images/NetWork_hover.png" class="activeImg"/>
                  <p>安全运维</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
                <ul>
                  <li><router-link to='/WebMailn'>WEB会话监控</router-link></li>
                  <li><router-link to='/emailMailin'>邮件会话监控</router-link></li>
                  <li><router-link to='/FileTransfer'>文件传输监控</router-link></li>
                  <li><router-link to='/DNSSearchMa'>DNS查询监控</router-link></li>
                  <li><router-link to='/flowMonitoring'>流量监控</router-link></li>
                  <li><router-link to='/dynamicMonitoring'>动态监控</router-link></li>
                  <i></i>
                </ul>
              </li>
              <li>
                <div>
                  <router-link to='/assetsMan'>
                        <img src="@/assets/images/Assets.png" class="showImg"/>
                        <img src="@/assets/images/Ass_hover.png" class="activeImg"/>
                        <p>资产管理</p>
                        <i id="nav_active_left">
                            <img src="@/assets/images/left.png" alt="" />
                        </i>
                  </router-link>
                </div>
              </li>
              <li onclick="window.open('reportMange.html','_self')">
                <div>
                  <img src="@/assets/images/report.png" class="showImg"/>
                  <img src="@/assets/images/report_hover.png"class="activeImg"/>
                  <p>报表管理</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
              </li>
              <li onclick="window.open('systemLog.html','_self')">
                <div>
                  <img src="@/assets/images/systemLog.png" class="showImg"/>
                  <img src="@/assets/images/systemLog_hover.png"class="activeImg"/>
                  <p>系统日志</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
              </li>
              <li>
                <div>
                  <img src="@/assets/images/systemMange.png" class="showImg"/>
                  <img src="@/assets/images/systemMange_hover.png"class="activeImg"/>
                  <p>系统管理</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
                <ul>
                  <li onclick="window.open('systemView.html','_self')">系统概览</li>
                  <li onclick="window.open('systemMange.html','_self')">系统配置</li>
                  <li onclick="window.open('flowCollection.html','_self')">流量采集策略</li>
                  <li onclick="window.open('systemUpload.html','_self')">系统升级</li>
                  <li onclick="window.open('userManage.html','_self')">用户管理</li>
                  <i></i>
                </ul>
              </li>
              <li   onclick="window.open('easyMap.html','_self')">
                <div>
                  <img src="@/assets/images/map.png" class="showImg"/>
                  <img src="@/assets/images/map_hovor.png" class="activeImg"/>
                  <p>攻击地图</p>
                  <i id="nav_active_left">
                    <img src="@/assets/images/left.png" alt="" />
                  </i>
                </div>
              </li>
            </ul>
      </div>
      <router-view/>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  data(){
  return {

  }
  },
  mounted(){
   var timesp=300
  $(".nav>ul>li").hover(function(){
          $(".nav>ul>li").css({background:"none"})
          .find('.showImg').stop().fadeIn(timesp)
          $(".nav>ul>li").find('.activeImg').stop().fadeOut(timesp)
          $(".nav>ul>li").find('p').css({color:"#d3d3d3"})
          $(this).css({background:"#00c1de"})
          $(this).find('.showImg').stop().fadeOut(timesp)
          $(this).find('.activeImg').stop().fadeIn(timesp)
          $(this).find('#nav_active_left').stop().show(timesp)
          $(this).find('p').css({color:"#fff"})
          $(this).find('ul').stop().show(timesp)
        },function(){
          $(this).css({background:"none"}).find('.showImg').stop().fadeIn(timesp)
          $(this).find('.activeImg').stop().fadeOut(timesp)
          $(this).find('ul').stop().hide(timesp)
          $(this).find('#nav_active_left').stop().hide(timesp)
	
	
	
          $(".nav_active").css({background:"#00c1de"}).find('p').css({color:"#fff"})
          $(".nav_active").find('.showImg').stop().fadeOut(timesp)
          $(".nav_active").find('.activeImg').stop().fadeIn(timesp)
      })

        



        // if($(".serverNav")){
		// 	var Sleft = $(".serverNav").offset().left + 'px'
		// 	var Swidth = $(document).width()+'px'
		// 	var Navwidth = $('.selectTab').width()+'px'
		// 		$(document).scroll(function(){
		// 		if($(this).scrollTop()>$(".serverNav").offset().top && !$(".serverNav").hasClass('serverNavfixed')){
					
		// 			$(".serverNav").addClass('serverNavfixed').css({marginLeft:'120px',width:Navwidth})
		// 			$(".selectTab").height($(".serverNav").height()+20)
		// 			console.log(Navwidth)
	
		// 		}else if($(this).scrollTop() <93 && $(".serverNav").hasClass('serverNavfixed')){
		// 			$(".serverNav").css({marginLeft:0+'px'})
		// 			$(".serverNav").removeClass('serverNavfixed')
		// 			$(".selectTab").height($(".serverNav").height()+20)
		// 		}
		// 		})
		// 	}


      $(".content").animate({
				opacity:1,
				marginTop:'0px'
			},500)
  },
  created(){
  }

}
</script>

<style lang="scss">
*{
    margin: 0;padding: 0;
    list-style: none;text-decoration: none;
    outline: none;
    font-family:Consolas,"Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
	border-collapse: collapse;
}
body,html{width: 100%;background: #42485B;}

.login-user{
    position: absolute;
    z-index: 555;
    right: 50px;
    top: 27px;
    span{
        color: #fff;
    }
}

.header{
	width: 100%;
	height: 80px;
	display: flex;
	&>div{
		float: left;
		height: 100%;
	}
	.logo{
		width: 107px;
		background: #4192ee;
		position: relative;
		img{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
	.Title{
//		width: 100%;
            flex-grow: 1;
		background: #373d41;
		position: relative;
		img{
			position: absolute;
			top: 50%;
			left: 20px;
			transform: translate(0,-50%);
		}
	}
}

 .selectTab{
        color: #dcdcdc;
        font-size: 14px;
        position: relative;
        .serverNav{
//          height: 32px;
           padding: 10px 0;
            background:#333744 ;
            input[type="text"] {
            background: #333744;
            color:#dcdcdc ;
                     border: 1px solid #dcdcdc;
                    border-radius: 5px;
                    height: 28px;
                    padding-left: 5px;
            }
            li{
                float:left;
                margin-left: 1.4%;
                input[type="text"]{
                    width: 116px !important;
                }
                #date-select{
                    width: 270px !important;
                }
                
             &:first-child{
                 margin-left: 1%;
             }
            }
            .right{
                float:right;
                margin-right: 5%;
            }
}
    }

@media (max-width:1700px){
    .serverNav{
            background:#333744 ;
        li{
            margin-bottom: 13px;
            &:last-child{
                float: right;
                margin-right: 50px;
            }
        }
    }
    .All_sum{
                            ul{
                                li{
                            div:first-child{
                              span{
                                font-size: 12px;
                              }
                            }
                               }
                            }
                        }
}
@media (min-width:1699px){
   
 .All_sum{

        div:first-child{    
          span{
            font-size: 14px;
          }
        }
}
}
  .selectStyle{
        background: #333744;
    padding: 4px 0;
    select{
                     border: 1px solid #dcdcdc;
            color:#dcdcdc ;
                    border-radius: 5px;
	background: #42485B;
        height: 30px;
        padding-left: 5px;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-size: 10px ;
        padding-right: 20px;
    }
}
   .All_sum{
        width: 100%;
        ul{
            margin: 0 auto;
            width: 100%;
            display: flex;
            justify-content: space-between;
            li{
                width: 24%;
                background: #333744;
                height: 120px;
                display: flex;
                box-shadow: 0 2px 5px 0 rgba(201, 201, 201, 0.5);
                div{
//                  width: 70%;
//                     flex-grow: 1;
                    height: 100%;
//                  float: left;
                    position: relative;
                    p{
                        color: #fff;
                        text-align: center;
                        font-size: 12px;
                    }
                    p:first-child{
                        margin-top: 25px;
                        margin-bottom: 5px;
                        color: #fff;
                        font-size: 28px;
                    }
                    .lastP{
                        position: absolute;
                        bottom: 0;
                        line-height: 30px;
                        height: 30px;
                        width: 100%;
                        font-size: 12px;
                        background: #cc7eba;
                    }
                }
                div:first-child{
                    width: 29.5%;
                    border-right: 1px solid #676767;
                    text-align: center;
                     position: relative;
                    p{
                        width: 100%;
                        text-align: center;
                        margin: 0 !important;
                        position: absolute;
                        bottom: 25px;   
                    }
                    span{
                        display:block;
//                      font-size: 14px;
                        color: #cc7eba;
                    }
                }
                div:last-child{
                    flex-grow: 1;
                }
            }
        }
    }


section{
	width: 100%;
	display: flex;
	background: #42485B;
	.nav{
//		height: 2000px;
		background:#373d41 ;
 		font-size: 14px;
		&>ul{
			&>li{
				height: 100px;
				width: 107px;
				cursor: pointer;
				position: relative;
				
				.activeImg{
					display: none;
				}
								
				&>div{
					height: 100%;
						text-align: center;
						color: #d3d3d3;
                    position: relative;;  
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    color:rgb(211, 211, 211)
                }
				& img{
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%,-90%);
                }
					#nav_active_left{
					    
							position: absolute;
							background-size: 100%;
							right: -1px;
							top: 50%;
							transform: translate(0,-50%);
							width: 10px;
							display: none;
							z-index: 1200;
							img{
							    width: 100%;
							}
						}
					p{
//						padding: 10px 0;
                         width: 100%;
                         position: absolute;
                         bottom: 20px;
					}
				}
				ul{
					position: absolute;
					top: 0px;
					left: 100%;
					color: #fff;
					width: 120%;
					z-index: 8888;
					border: 1px solid rgba(255,255,255,.3);
 					font-size: 12px;
					background: #42485b;
					display: none;
					li{
						text-align: center;
						font-size: 14px;
						border-bottom: 1px solid rgba(255, 255, 255, 0.3);
						padding: 15px 5px;
						position: relative;
						cursor: pointer;
						z-index: 1;
                        a{
                            display:inline-block;
                            color:#fff;
                            width:100%;
                            height:100%;
                        }
						&:last-of-type{
						border-bottom: 1px solid rgba(255, 255, 255, 0);
						}
						&:hover{
                            a{
						    color: #00C1DE;
                                
                            }
						}
					}
					&>i{
						position: absolute;
						left:-8px;
						top: 36px;
						width: 12px;
						height: 12px;
						background: #42485b;
						transform: rotateZ(45deg);
						border:  1px solid rgba(255, 255, 255, 0.3);
						border-top:none ;
						border-right:none ;
					}
				}
//				&:hover{
//					background: #00c1de;
//					div{
//						overflow: hidden;
//						.showImg{	
//							display: none;
//						}
//						.activeImg{
//							display: inline-block;
//						}
//						#nav_active_left{
//						opacity: 1;
//					   }
//					   p{
//                          color:#fff
//                      }
//					}
//					&>ul{
//						display: block;
//					}
//					
//				}
			}
			
		}
		.nav_active{
                    background: #00c1de;
                    .showImg{
                        display: none;
                    }
                    .activeImg{
                        display:inline-block; 
                    }
					#nav_active_left{
						opacity: 1;
					}
					&>div>p{
					    color: #fff;
					}
		}
	}
	.hideNav{
	    display: none;
	    width: 107px !important;
	    height: 100px;
	    background: #333744;
	}
	.content{
	    flex-grow: 1 !important;
        padding: 13px;
	}
} 
.tableDefault{
            h4{
                color: #4e2323;
                padding: 10px;
                text-align: center;
            }
            table{
                width: 100%;
                text-align: center;
                color: #003254;
                border: 1px solid #fff;
                background: #333744;
                th{
                    padding: 8px 0;
                    font-size: 14px;
                    color: #fff;
                    background: #4192ee;
                }
                th,td{
                     border: 1px solid #595959;
                }
                td{
                    height: 38px;
                    color: #fff;
                    font-size: 12px;
                }
                td:nth-of-type(2n){
                    color: #02c0c8;
                }
                .Modify{
                    background: linear-gradient(to bottom, #05e1e6, #02c0c8);;
                }
                .dele{
                    background: linear-gradient(to bottom, #ffc1b2, #ff7e66);
                }
            }
        }



.page{
    width: 100%;
    height: 40px;
    padding-top: 20px;
        background: #333744;
    position: relative;
    font-size: 14px;
        color: #dcdcdc;
                .active{
                    background: #42485B;
                }
    &>div{
        position: absolute;
        right: 0;
    }
    &>div>div{
        float: left;
    }
    .pagination{

//      width: 200px;
        height: 22px;
//      border: 1px solid red;      
        margin:2px 10px 0 0;
        &>ul{
            li{
//              width: 20px;/
                padding: 0 5px;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                border: 1px solid #595959;
                float: left;
                a{
                    display: inline-block;
                    width: 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .right{
        padding-right: 20px;
        &>span:first-child{
            margin-top: 2px;
        }
        &>span:nth-of-type(2){
            padding: 0 15px;
            input{
                color: #22c9fb;
                display: inline-block;
                width: 40px;
                padding: 0 7px;
                height: 22px;
                line-height: 23px;
                background-color: #333744;
                border: solid 1px #595959;
            }
        }
        .toPage{
                height: 16px;line-height: 16px;padding: 3px 5px;color: #fff;cursor: pointer;
                background-color: #4293ef;
                
                }

    }
}

        .pinkFont{
    color: #cc7eba !important;
}
.content{
    background: #42485B;
}
.green{
	 background-color: rgba(109, 189, 167, 0.9);
}
.blue{
	background-color: rgba(105, 144, 201, 0.9);
}
.orange{
	 background-color:rgba(242, 139, 118, 0.9);
}
.purple{
	 background-color: rgba(150, 119, 179, 0.9);
}
#TimePicker{
	width: 100%;
	position: absolute;
	top: 0;
	height: 150px;
	z-index: 9999;
	background: #D3D3D3;
}

//弹框
.modal{
    width: 600px;
    z-index: 120;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 2px 5px 0 rgba(205, 205, 205, 0.5);    background: #333744;
    display: none;
.assetEditTitle{
    position: relative;
p{
     text-align: center;
    height: 39px;
    line-height: 39px;
    color: #fff;
}
    background: #00c1de;
    }
    
.assetEditTitle>span img{
     cursor: pointer;
    position: absolute;
    top: 11px;
    right: 13px;

}
.addManC{
    margin-bottom: 40px;
    color: #07b4f0;
    text-align: center;
    dl{
        width: 100%;
        display: flex;
        
    }
    dt{
        width: 150px;
        text-align: right;
        font-size: 14px;
        line-height:28px ;
        &>span{
            vertical-align:middle;
            color: #fff;
        }
    }
    dd{
        text-align: left;
        flex-grow: 1;
    }
}

.addManC input{
     border: solid 1px #f1f1f1;
     height: 28px;
    width: 340px;
    padding-left: 11px;
    background: transparent;
    color:#07b4f0 ;
    padding-top: 5px \9;
}


.addFooter{
    /*margin: 68px 0 30px 226px;*/
   text-align: center;
   margin-bottom: 30px;
}
.addFooter>span{
    display: inline-block;
    width: 96px;
    height: 35px;
    color: white;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
}
.quxiao{
    background: #089dd4;
    margin-right: 20px;
}
.queren{
    background: #ff6f4c;
}

#modeS,.modeS{
    width: 353px;
    height: 31px;
     border: solid 1px #f1f1f1;
    background: #333744;
    color: #07b4f0;
    padding-left: 7px;
}
#delmodal,.delmodal{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #fff;
    cursor: pointer;
//  font-weight: bold;
    font-size: 25px;
}
#delmodal:active,.delmodal:active{
    font-size: 20px;
}
}


  .selectTab{
        color: #dcdcdc;
        font-size: 14px;
        position: relative;
        .serverNav{
//          height: 32px;
           padding: 10px 0;
            background:#333744 ;
            input[type="text"] {
            background: #333744;
            color:#dcdcdc ;
                     border: 1px solid #dcdcdc;
                    border-radius: 5px;
                    height: 28px;
                    padding-left: 5px;
            }
            li{
                float:left;
                margin-left: 1.4%;
                input[type="text"]{
                    width: 116px !important;
                }
                #date-select{
                    width: 270px !important;
                }
                
             &:first-child{
                 margin-left: 1%;
             }
            }
            .right{
                float:right;
                margin-right: 5%;
            }
}
    }


@media (max-width:1700px){
    .serverNav{
            background:#333744 ;
        li{
            margin-bottom: 13px;
            &:last-child{
                float: right;
                margin-right: 50px;
            }
        }
    }
    .All_sum{
                            ul{
                                li{
                            div:first-child{
                              span{
                                font-size: 12px;
                              }
                            }
                               }
                            }
                        }
}



.hide{
	overflow: hidden;
}
.nav_ul_active{
    color: #00C1DE;
}
.selectTab{
    margin-bottom: 13px;
}
.click_btn{
	   color: #fff;
        width: 70px;
      height: 28px;
      border: none;
}
.click_btn:active{
    position:relative;
    
}
.click_btn:active{
    position:relative;
    top:2px;
}
.click_green{
	background: #02c0c8;
}
.click_orange{
	background: #ff7e66;
}
.click_purple{
	background:#cc7eba;
}
.click_blue{
    background:#4192ee;
}
.selected-days-num{
			color: #00A5E3;
 
}

.click_out{
    background:#AAAAAA;
    color: #333744;
}


.pointer{
 cursor: pointer;   
}
.blueFont{
    color: #4192ee !important;
}
.cyanFont{
    color: #02c0c8 !important;
}
.orangeFont{
    color: #ff7e66 !important;
}
.pinkbg{
    background: #cc7eba !important;
}
.bluebg,.rrac{
    background: #4192ee !important;
}
.cyanbg,.socks{
    background: #02c0c8 !important;
}
.orangebg{
    background: #ff7e66 !important;
}
option{
    background: #333744;
}
button{
                    cursor: pointer;
}
</style>
