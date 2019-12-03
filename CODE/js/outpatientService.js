$(function(){
	$("header ul li").click(function(){
  		$(this).children('p').toggleClass('op');
  		if($(this).children('p').hasClass('op')){
  			$(this).siblings().children('p').removeClass('op');
  		}
	})
	$(".bli").click(function(){
		console.log(1);
	})

	//1.调用获取签名接口 sign接口
	//2.通过config注入验证权限设置
	//3.通过ready接口处理成功验证 wx.ready(function(){})
	//4.通过error接口处理失败验证
	//5.选图片接口欧
	// wx.chooseImage({
	// count: 1, // 默认9
	// sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	// sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	// success: function (res) {
	// var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
	// }
	// });

	function getSign(noncestr,timestamp,url){
		var data={
			noncestr:noncestr,
			timestamp:timestamp,
			url:url
		}
		$.get("http://localhost:8080/by/sign",data,function(ret){
			console.log(ret);
		})
	}
	getSign("abcdefg","afsafd","http://cat1.xiongshi666.cn:8081/by/apply.html")
})