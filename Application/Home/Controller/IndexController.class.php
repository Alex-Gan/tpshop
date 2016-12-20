<?php
/**
 * PC端首页
 * @Author ganchaosheng
 */ 
namespace Home\Controller;

use Think\Page;
use Think\Verify;

class IndexController extends BaseController
{

    /**
     * 首页
     */
    public function index()
    {

        // 如果是手机跳转到 手机模块
        if(true == isMobile()){
            header("Location: ".U('Mobile/Index/index'));
        }

        $this->display();
    }

}