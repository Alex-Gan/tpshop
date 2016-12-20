// jQuery版本要求1.9.1
/**
 *导航菜单鼠标经过点击效果
 * @param object _this 当前对象
 * @param string item html对象的类名或者ID名(带.或#，支持链式)
 * @param string className 要操作的类名
 */
function slelectItem(_this, item, className) {
	$(item).siblings().removeClass(className);
	_this.addClass(className);
}

$(function(){
	/** 登录框弹窗效果 - 开始 */
	$('body').on('click', '.web_qr_login .from input', function(){
		$(this).addClass('selected');
	});
	$('body').on('blur', '.web_qr_login .from input', function(){
		$(this).removeClass('selected');
	});
	$('body').on('click', '.web_qr_login .title span', function(){
		$('#logo').remove();
	});
	$('.alert-logo').on('click', function(){
		var html = '<div id="logo"><div class="logo-all"><div class="logo-bg"></div><div class="web_qr_login"><p class="title"><span class="close"></span></p><div class="alter"><p>帐号密码登录</p>推荐<a href="">绑定邮箱</a>，防止盗号</div><div class="from"><input type="text" placeholder="请输入账号或绑定邮箱号" /><input type="text" placeholder="密码" /><input type="button" value="登 录" class="button" /></div><div class="co"><a href="">忘记密码？</a> | <a href="">注册新账号</a> | <a href="">意见反馈</a></div></div></div></div>';
		$('body').append(html);
	});
	/** 登录框弹窗效果 - 结束 */


	/*头部导航菜单效果*/
	$('.header-nav li a').click(function(){
		var _this = $(this);
		_this.parent().parent().find('a').removeClass('current');
		_this.addClass('current');
	})

})