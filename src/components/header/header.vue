<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="img-header">
				我是图片
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<!-- <span :class="classMap[seller.supports[0].type]"></span> -->
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span class="count" @click="mShow">
					{{seller.supports.length}}个
				</span>
				<!-- <i class="icon-keyboard_arrow_right"> &gt; </i> -->
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<p class="bulletin-text" @click="mShow">{{seller.bulletin}}</p>
		</div>
		<div v-show="modelShow" class="model">
			<div class="model-wrapper  clearfix">
				<div class="model-main">
					<p>{{seller.name}}</p>
					<p class="level">{{seller.score}}分</p>
					<div class="banner">
						<p class="line"></p>
						<p class="move">优惠信息</p>
						<p class="line"></p>
					</div>
					<ul v-if="seller.supports" class="discount">
					<!-- vue2.0 不支持$index写法,具体写法如下 -->
						<li class="supper-item" v-for="(item,index) in seller.supports">
							<p class="img"></p>{{seller.supports[index].description}}
						</li>
					</ul>
					<div class="banner">
						<p class="line"></p>
						<p class="move">商家公告</p>
						<p class="line"></p>
					</div>
					<div class="text-shop">
						{{seller.bulletin}}
					</div>
				</div>
			</div>
			<div class="model-close" @click="shutModel">x</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['seller'],
		data(){
			return {
				modelShow: false
			}
		},
		methods:{
			mShow(){
				this.modelShow = true
			},
			shutModel(){
				this.modelShow = false
			}
		}
		// created() {
		// 	this.classMap = ['decrease','discount','special']
		// }
	};
</script>
<style>
	.img-header{
		width: 64px;
		height: 64px;
		background-color: red;
		vertical-align: top;
		color:white;
		font-size: 15px;
		line-height: 64px;
	}
	.header{
		color: #fff;
		background-color: #999;
		/*font-size: 0;*/
		text-align: center;
	}
	.content-wrapper{
		padding: 24px 12px 18px 24px;
		display: flex;
		position: relative;
	}
	.content{
		font-size: 14px;
		margin-left: 16px;
	}
	.title{
		margin: 2px 0 8px 0;
	}
	.name{
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.text{
		font-size: 10px;
		line-height: 12px;
	}
	.support-count{
		position: absolute;
		right: 12px;
		bottom: 14px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background-color: rgba(0,0,0,0.2);
		text-align: center;
	}
	.count{
		font-size: 10px;
		vertical-align: top;
	}
	.icon-keyboard_arrow_right{
		margin-left: 2px;
		line-height: 24px;
		font-size: 10px;
	}
	.bulletin-wrapper{
		background-color: rgba(7,17,27,0.2);
	}
	.bulletin-text{
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 10px;
		margin: 0 4px;
		vertical-align: top;
	}
	.model{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: rgba(7,17,27,0.8);
		text-align: center;
	}
	.clearfix{
		display: inline-block;
	}
	.clearfix:after{
		display: block;
		content: '.';
		height: 0;
		line-height: 0;
		clear: both;
		visibility: hidden;
	}
	.model-wrapper{
		min-height: 100%;
		width: 100%;
		text-align: center;
	}
	.model-main{
		margin-top: 64px;
		padding-bottom: 64px;
		width: 100%;
		text-align: center;
	}
	.model-close{
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		clear: both;
		font-size: 32px;
	}
	.level{
		margin: 18px 0;
	}
	.banner{
		width: 80%;
		display: flex;
		margin: 30px auto 24px auto;
		line-height: 24px;
	}
	.line{
		flex: 1;
		position: relative;
		top: -10px;
		border-bottom: 1px solid #ccc;
	}
	.move{
		padding: 0 12px;
	}
	.supper-item{
		margin: 10px 11%;
		text-align: left;
		display: flex;
	}
	.img{
		width: 16px;
		height: 16px;
		margin-right: 10px;
		background-color: red;
	}
	.text-shop{
		width: 80%;
		margin-left: 10%;
		text-align: center;
		font-size: 16px;
		line-height: 20px;
	}
	
	.shut{
		/*padding-top: 130%; */
	}
	/*.decrease{
		background-image: ()
	}
	.discount{
		background-image: ()
	}
	.special{
		background-image: ()
	}*/
</style>