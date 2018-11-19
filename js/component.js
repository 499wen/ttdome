// 头部
Vue.component('tops', {
    template:`
    <div>
    <div class="top">

            <div class="top_lf">
                <a href="javascript:;" class="download">下载APP</a>
                <a href="javascript:;" class="weater">北京&nbsp; &nbsp;多云&nbsp; &nbsp;27°&nbsp; &nbsp;/&nbsp; &nbsp;36°&nbsp; &nbsp;
                    <i class="fa fa-angle-down"></i>
                </a>
                <!-- <div class="weather">
                    <i class="iconfont icon-weather"></i>
                </div> -->
            </div>

            <div class="top_r">
                <ul style=" box-sizing: border-box">
                    <li class="check">
                        <a href="javascript:;">发文</a>
                    </li>
                    <li>
                        <a href="javascript:;">反馈</a>
                    </li>
                    <li>
                        <a href="javascript:;">侵权投诉</a>
                    </li>
                    <li>
                        <a href="javascript:;">头条产品</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `,
})

// 焦点图
Vue.component('focus-graphs', {
    template: `
    <div>
    <!-- 轮播图 - 未登录 - start -->
                <div class="lbt">
                    <div class="img">
                        <a href="javascript:;" id="a" class="zIndex">
                            <img src="./images/lb_01.jpg" alt="">
                        </a>
                        <a href="javascript:;" id="b">
                            <img src="./images/lb_02.jpg" alt="">
                        </a>
                        <a href="javascript:;" id="c">
                            <img src="./images/lb_03.jpg" alt="">
                        </a>
                        <a href="javascript:;" id="d">
                            <img src="./images/lb_04.jpg" alt="">
                        </a>
                        <a href="javascript:;" id="e">
                            <img src="./images/lb_05.jpg" alt="">
                        </a>
                        <a href="javascript:;" id="f">
                            <img src="./images/lb_06.jpg" alt="">
                        </a>
                    </div>
                    <!--  -->
                    <div class="lb">
                        <ul>
                            <li data-cont="a" class="active">
                                <i class="fa fa-caret-left public"></i>
                                <a href="javascript:;">要闻</a>
                            </li>
                            <li data-cont="b">
                                <i class="fa fa-caret-left b"></i>
                                <a href="javascript:;">社会</a>
                            </li>
                            <li data-cont="c">
                                <i class="fa fa-caret-left c"></i>
                                <a href="javascript:;">娱乐</a>
                            </li>
                            <li data-cont="d">
                                <i class="fa fa-caret-left d"></i>
                                <a href="javascript:;">体育</a>
                            </li>
                            <li data-cont="e">
                                <i class="fa fa-caret-left e"></i>
                                <a href="javascript:;">军事</a>
                            </li>
                            <li data-cont="f">
                                <i class="fa fa-caret-left f"></i>
                                <a href="javascript:;">明星</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 轮播图 - 未登录 - end -->


                <!-- 发表相关操作 - 登录 - start -->

                <div class="publish">
                    <div class="publish-nav">
                        <ul>
                            <!-- public-active : 当前发布的样式 -->
                            <li data-cont="one" class="publish-active">发布图片</li>
                            <li data-cont="two">发布视频</li>
                            <li data-cont="three">发布问答</li>
                        </ul>
                    </div>
                    <div id="one" class="publish-release">
                        <div class="release-text">
                            <span>0/2000字</span>
                            <textarea name="" id="" placeholder="有什么新鲜事想告诉大家"></textarea>
                        </div>

                        <div class="publish-bottom">
                            <div class="left">
                                <span>
                                    <i class="fa fa-image"></i>
                                    添加图片
                                </span>
                                <span>
                                    <div class="checkbox">
                                        <i class="fa fa-check-square i-none"></i>
                                    </div>
                                    发表长文
                                </span>
                            </div>
                            <div class="right">

                                <a href="javascript:;">发布</a>

                            </div>
                        </div>
                    </div>
                    <div id="two" class="video">
                        <div class="video-text">
                            <span>0/30字</span>
                            <textarea name="" id="" placeholder="有什么新鲜事想告诉大家"></textarea>
                        </div>

                        <div class="video-bottom">
                            <div class="left">
                                <span>
                                    <i class="fa fa-video-camera"></i>
                                    &nbsp;&nbsp; 添加视频
                                </span>

                            </div>
                            <div class="right">

                                <a href="javascript:;">发布</a>

                            </div>
                        </div>
                    </div>
                    <div id="three" class="wenDa">
                        <div class="title">
                            <div class="wenDa-title">
                                <input type="text" placeholder="请输入问题标题（4-40字）" name="" id="">
                            </div>
                            <div class="wenDa-content">
                                <span>0/40字</span>
                                <textarea name="" id="" placeholder="添加问题背景描述（选填，0-40字）"></textarea>
                            </div>
                        </div>
                        <div class="wenDa-bottom">
                            <div class="left">
                                <span>
                                    <i class="fa fa-image"></i>
                                    &nbsp;&nbsp; 添加图片
                                </span>
                                <span>
                                    <i class="fa fa-file-text"></i>
                                    &nbsp;&nbsp; 更多问答
                                </span>

                            </div>
                            <div class="right">

                                <a href="javascript:;">发布</a>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- 发表相关操作 - 登录 - end -->
                </div>
    `,
})

// 未读新闻提示
Vue.component('tips',{
    template:`
    <div>
        <!-- 未读新闻 - start -->

        <div class="unreadNew">

            <span>你有未读新闻，点击刷新 <i class="fa fa-refresh"></i></span>
            <i class="fa fa-times" id="times"></i>

        </div>

        <!-- 未读新闻 - end -->

    </div>
    `,
})

// 推荐新闻提示
Vue.component('retips',{
    template:`
    <div>
        <!-- 推荐新闻 - start -->

        <div class="unreNew">

            <span>为您推荐几篇新闻</span>

        </div>

        <!-- 推荐新闻 - end -->
    
    </div>
    `,
})

// 焦点图下的列表
Vue.component('messages', {
    template: `<div>
    
    
    <div class="list">
    <ul>
        <li>
            <a href="javascript:;">习近平出席推进“一带一路”建设工作5周年座谈会并发表重要讲话</a>
            <span class="list_span">
                <a href="javascript:;">
                    时政
                </a>
                <a href="javascript:;">
                    <img src="./images/list_01.jpg" alt="">
                </a>
                <a href="javascript:;">新华网</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">56评论</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">12分钟前</a>
                <div style="display: none-block">
                    <i class="fa fa-times cha" id="1"></i>
                </div>

                <b>不感兴趣
                    <i class="fa fa-times"></i>
                </b>
            </span>
        </li>
        <li>
            <a href="javascript:;">商务部：中国对非合作将更注重培养非洲内生发展能力</a>
            <span class="list_span">
                <a href="javascript:;">时政</a>
                <a href="javascript:;">
                    <img src="./images/list_01.jpg" alt="">
                </a>
                <a href="javascript:;">新华网</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">56评论</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">12分钟前</a>
                <div style="display: inline-block">
                    <i class="fa fa-times cha" id="2"></i>
                </div>

                <b>不感兴趣
                    <i class="fa fa-times"></i>
                </b>

        </li>
        <li>
            <a href="javascript:;">台媒称台湾或再次无缘APEC峰会：“已作最坏打算”</a>
            <span class="list_span">
                <a href="javascript:;">时政</a>
                <a href="javascript:;">
                    <img src="./images/list_01.jpg" alt="">
                </a>
                <a href="javascript:;">新华网</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">56评论</a>
                <a href="javascript:;">·</a>
                <a href="javascript:;">12分钟前</a>
                <div style="display: inline-block">
                    <i class="fa fa-times cha" id="3"></i>
                </div>
                <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                <b>不感兴趣
                    <i class="fa fa-times"></i>
                </b>
            </span>
        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_01.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">英国女孩考14个A愁坏父亲 曾承诺1个A给100英镑
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_02.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_02.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">零回应！将台湾与中国并列，犯众怒的宜家在等风声过去？
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_03.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
        <li class="haveimg">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_03.jpg" style="height: 90px;" alt="">
                    </div>
                </div>
            </div>
            <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                <dt>
                    <a href="javascript:;">他是海外赌王身家35亿，与赵薇老公合伙开赌场，失联后股价跌35%
                    </a>
                </dt>
                <dd>
                    <span class="list_span">
                        <a href="javascript:;">时政</a>
                        <a href="javascript:;">
                            <img src="./images/list_04.jpg" alt="">
                        </a>
                        <a href="javascript:;">新华网</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">56评论</a>
                        <a href="javascript:;">·</a>
                        <a href="javascript:;">12分钟前</a>
                        <div style="display: inline-block">
                            <i class="fa fa-times cha" id="3"></i>
                        </div>
                        <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                        <b>不感兴趣
                            <i class="fa fa-times"></i>
                        </b>
                    </span>

                </dd>
            </dl>

        </li>
    </ul>

</div>
    </div>`,
})

Vue.component('cs',{
    props: ['name'],
    template:`
        <div v-if="name == 4444">
            {{ name }}
        
        </div>
    `,
})

// 首页左边导航
Vue.component('navs', {
    props: ['defaults'],
    template: `
    <div>
    <div class="body_fl">
    
                <a href="index.html">
                    <img width="120" src="images/logo.gif" alt="">
                </a>
                <div class="nav">
                    <ul>
                        <li>

                            <a target="_black" href="index.html" v-if="defaults == 'index'"  class="defualt"  >推荐</a>
                            <a v-else target="_black" href="index.html"  >推荐</a>
                            
                        </li>
                        <li>
                            <a target="_black" href="热点.html" v-if="defaults == 'hot'"  class="defualt"  >热点</a>
                            <a v-else target="_black" href="热点.html"  >热点</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">图片</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">科技</a>
                        </li>
                        <li>
                            <a target="_black" href="娱乐.html" v-if="defaults == 'enter'" class="defualt" >娱乐</a>
                            <a v-else target="_black" href="娱乐.html"  >娱乐</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">游戏</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">体育</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">体育</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">体育</a>
                        </li>
                        <li>
                            <a target="_black" href="javascript:;">体育</a>
                        </li>
                        <li>
                            <a href="javascript:;">更多</a>
                            <div class="more">
                                <ul>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">军事</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">国际</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">时尚</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">旅游</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">探索</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">育儿</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">养生</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">美文</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">历史</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">美食</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">财经</a>
                                    </li>
                                    <li>
                                        <a target="_black" href="" herf="javascript:;">搞笑</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
            </div>
    `,
})

// 搜索框
Vue.component('searchs',{
    template:`
    <div>
    <!-- 搜索框 -->
    
    <div class="search">
        <input type="text" name="" placeholder="请输入要输入的内容" id="">
        <a href="javascript:;">搜索</a>
    </div>

    <br>
    </div>
    `,
})

// 首页 - 登录
Vue.component('logins', {
    template: `
    <div>
    <!-- 未登录 - 盒子 -->
    <div class="unlogin">
        <div class="box">

            <br>
            <span>登录后可以保存您的浏览喜好、评论、收藏， 并与APP同步更可以发布微头条
            </span>
            <br>
            <br>
            <a href="javascript:;">登录</a>


            <ul>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-qq"></i>
                    </a>
                    <span>QQ</span>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-weixin"></i>
                    </a>
                    <span>微信</span>
                </li>
            </ul>

        </div>
    </div>

    <!-- 登录后 - 盒子 -->
    <div class="login">
        <div class="box">
            <div class="out_box">
                <a href="javascript:;" class="out">退出登录</a>
            </div>
            <div class="face">
                <ul>
                    <li>
                        <img src="./images/face_01.jpg" alt="">
                    </li>
                    <a href="javascript:;">错了就错了</a>
                </ul>
            </div>
            <!-- 关注 - 粉丝 -->
            <div class="gf">
                <ul>
                    <li>
                        <a href="">
                            <p>0</p>关注</a>
                    </li>
                    <li>
                        <a href="">
                            <p>0</p>粉丝</a>
                    </li>
                    <div class="shu"></div>
                </ul>
            </div>
        </div>
    </div>

    <br>
    </div>
    `,
})

// 广告
Vue.component('advs',{
    template:`
    <div>
    
    <!-- 广告 - start -->
    <div class="adv">
        <div class="box">
            <img src="./images/adv_01.jpg" alt="">

            <div class="box_left" style="z-index: 5;" id="o1">
                <img style="z-index: 2;" src="./images/adv_09.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="t1">
                <img style="z-index: 2;" src="./images/adv_11.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="h1">
                <img style="z-index: 2;" src="./images/adv_13.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="f1">
                <img style="z-index: 2;" src="./images/adv_15.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="i1">
                <img style="z-index: 2;" src="./images/adv_17.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="s1">
                <img style="z-index: 2;" src="./images/adv_19.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_right">
                <ul>
                    <i class="fa fa-angle-up"></i>
                    <li>
                        <img src="./images/adv_08.jpg" alt="">
                        <div data-cont="o1" class="bgc_o"></div>
                    </li>
                    <li>
                        <img src="./images/adv_10.jpg" alt="">
                        <div data-cont="t1"></div>
                    </li>
                    <li>
                        <img src="./images/adv_12.jpg" alt="">
                        <div data-cont="h1"></div>
                    </li>
                    <li>
                        <img src="./images/adv_14.jpg" alt="">
                        <div data-cont="f1"></div>
                    </li>
                    <li>
                        <img src="./images/adv_16.jpg" alt="">
                        <div data-cont="i1"></div>
                    </li>
                    <li>
                        <img src="./images/adv_18.jpg" alt="">
                        <div data-cont="s1"></div>
                    </li>
                    <i class="fa fa-angle-down"></i>
                </ul>
            </div>
            <div class="tips">
                <img src="./images/adv_03.jpg" alt="">
                <img class="img" src="./images/adv_02.jpg" alt="">
                <!-- <i class="fa fa-caret-down"></i> -->
                <div class="pb"> </div>
            </div>
        </div>

    </div>
    <!-- 广告 - end -->

    <br>
    
    </div>  
    `,
})

// 24小时热闻
Vue.component('hours',{
    template:`
    <div>
    
    <!-- 24小时热闻 - start -->

    <div class="hotNew">
        <div class="box">
            <div class="title">
                <p>24小时热闻</p>
            </div>
            <ul>
                <li>

                    <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;">
                        <div class="uk-text-center" style="margin-right: 0px; width: 75px; ">
                            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                <img class="uk-transition-scale-up uk-transition-opaque" src="images/hotNew_01.jpg" style="height: 60px;" alt="">
                            </div>
                        </div>
                    </div>

                    <dl class="uk-description-list uk-description-list-divider" style="margin:0;margin-left:5px;flex: 1;">
                        <dt>
                            <a href="javascript:;" style="">央视起底昆山砍人事件始末 于海明哭着回忆事发：太欺负人了
                            </a>
                        </dt>
                    </dl>

                </li>
                <li>

                    <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;">
                        <div class="uk-text-center" style="margin-right: 0px; width: 75px; ">
                            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                <img class="uk-transition-scale-up uk-transition-opaque" src="images/hotNew_02.jpg" style="height: 60px;" alt="">
                            </div>
                        </div>
                    </div>

                    <dl class="uk-description-list uk-description-list-divider" style="margin:0;margin-left:5px;flex: 1;">
                        <dt>
                            <a href="javascript:;" style="">美驻伊拉克大使馆安全区附近遭多枚迫击炮弹袭击 视频曝光
                            </a>
                        </dt>
                    </dl>

                </li>
                <li>

                    <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;">
                        <div class="uk-text-center" style="margin-right: 0px; width: 75px; ">
                            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                <img class="uk-transition-scale-up uk-transition-opaque" src="images/hotNew_03.jpg" style="height: 60px;" alt="">
                            </div>
                        </div>
                    </div>

                    <dl class="uk-description-list uk-description-list-divider" style="margin:0;margin-left:5px;flex: 1;">
                        <dt>
                            <a href="javascript:;" style="">年轻市长没“收手”
                            </a>
                        </dt>
                    </dl>

                </li>
                <li>

                    <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;">
                        <div class="uk-text-center" style="margin-right: 0px; width: 75px; ">
                            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                <img class="uk-transition-scale-up uk-transition-opaque" src="images/hotNew_04.jpg" style="height: 60px;" alt="">
                            </div>
                        </div>
                    </div>

                    <dl class="uk-description-list uk-description-list-divider" style="margin:0;margin-left:5px;flex: 1;">
                        <dt>
                            <a href="javascript:;" style="">关于个人所得税、社保费率、创投基金税负……刚刚，国务院重磅表态！
                            </a>
                        </dt>
                    </dl>

                </li>
            </ul>
        </div>
    </div>

    <!-- 24小时热闻 - end -->

    <br>
    
    </div>
    `,
})

// 广告 - 第二种
Vue.component('advs-two',{
    template:`
    <div>
    <!-- 广告 - start -->
                <div class="adv">
                    <div class="box">
                        <img src="./images/adv_01.jpg" alt="">

                        <div class="box_left" style="z-index: 5;" id="o2">
                            <img style="z-index: 2;" src="./images/adv_09.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_left" id="t2">
                            <img style="z-index: 2;" src="./images/adv_11.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_left" id="h2">
                            <img style="z-index: 2;" src="./images/adv_13.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_left" id="f2">
                            <img style="z-index: 2;" src="./images/adv_15.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_left" id="i2">
                            <img style="z-index: 2;" src="./images/adv_17.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_left" id="s2">
                            <img style="z-index: 2;" src="./images/adv_19.jpg" alt="">
                            <div class="price">
                                <b>￥380.00</b>
                                <s>￥296</s>
                                <span class="xl">销量：150</span>
                            </div>
                        </div>

                        <div class="box_right">
                            <ul>
                                <i class="fa fa-angle-up"></i>
                                <li>
                                    <img src="./images/adv_08.jpg" alt="">
                                    <div data-cont="o2" class="bgc_t"></div>
                                </li>
                                <li>
                                    <img src="./images/adv_10.jpg" alt="">
                                    <div data-cont="t2"></div>
                                </li>
                                <li>
                                    <img src="./images/adv_12.jpg" alt="">
                                    <div data-cont="h2"></div>
                                </li>
                                <li>
                                    <img src="./images/adv_14.jpg" alt="">
                                    <div data-cont="f2"></div>
                                </li>
                                <li>
                                    <img src="./images/adv_16.jpg" alt="">
                                    <div data-cont="i2"></div>
                                </li>
                                <li>
                                    <img src="./images/adv_18.jpg" alt="">
                                    <div data-cont="s2"></div>
                                </li>
                                <i class="fa fa-angle-down"></i>
                            </ul>
                        </div>
                        <div class="tips" style="width: 24px">
                            <img class="img" src="./images/adv_02.jpg" alt="">
                            <div class="pb"> </div>
                        </div>
                    </div>

                </div>
                <!-- 广告 - end -->

                <br>
    </div> 
    `,
})

// 广告 - 第三种
Vue.component('advs-three',{
    template:`
    <div>
    <!-- 广告 - start -->
    <div class="adv">
        <div class="box">
            <img src="./images/adv_01.jpg" alt="">

            <div class="box_left" style="z-index: 5;" id="o3">
                <img style="z-index: 2;" src="./images/adv_09.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="t3">
                <img style="z-index: 2;" src="./images/adv_11.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="h3">
                <img style="z-index: 2;" src="./images/adv_13.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="f3">
                <img style="z-index: 2;" src="./images/adv_15.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="i3">
                <img style="z-index: 2;" src="./images/adv_17.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_left" id="s3">
                <img style="z-index: 2;" src="./images/adv_19.jpg" alt="">
                <div class="price">
                    <b>￥380.00</b>
                    <s>￥296</s>
                    <span class="xl">销量：150</span>
                </div>
            </div>

            <div class="box_right">
                <ul>
                    <i class="fa fa-angle-up"></i>
                    <li>
                        <img src="./images/adv_08.jpg" alt="">
                        <div data-cont="o3" class="bgc_h"></div>
                    </li>
                    <li>
                        <img src="./images/adv_10.jpg" alt="">
                        <div data-cont="t3"></div>
                    </li>
                    <li>
                        <img src="./images/adv_12.jpg" alt="">
                        <div data-cont="h3"></div>
                    </li>
                    <li>
                        <img src="./images/adv_14.jpg" alt="">
                        <div data-cont="f3"></div>
                    </li>
                    <li>
                        <img src="./images/adv_16.jpg" alt="">
                        <div data-cont="i3"></div>
                    </li>
                    <li>
                        <img src="./images/adv_18.jpg" alt="">
                        <div data-cont="s3"></div>
                    </li>
                    <i class="fa fa-angle-down"></i>
                </ul>
            </div>
            <div class="tips" style="width: 24px">
                <!-- <img style="visibility: hidden" src="./images/adv_03.jpg" alt=""> -->
                <img class="img" src="./images/adv_02.jpg" alt="">
                <!-- <i class="fa fa-caret-down"></i> -->
                <div class="pb"> </div>
            </div>
        </div>

    </div>
    <!-- 广告 - end -->

    <br>
    </div>
    `,
})

// 精彩图片
Vue.component('pane-module',{
    template:`
    <div>
    <!-- 精彩图片 - start -->
    <div class="pane-module">
        <div class="box">

            <div class="title">
                <p>精彩图片</p>
            </div>

            <ul>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_01.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">21图</span>
                        邓超为《影》瘦身40斤，一人二角同框太惊
                    </a>
                </li>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_02.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">15图</span>
                        封闭整治的长滩岛将重新开放，严重污染的最美岛屿能完好如初吗？
                    </a>
                </li>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_03.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">广告</span>
                        恨不在江苏！9月起，上班族可申读1年本...
                    </a>
                </li>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_04.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">9图</span>
                        德国反移民大游行现场
                    </a>
                </li>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_01.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">21图</span>
                        邓超为《影》瘦身40斤，一人二角同框太惊
                    </a>
                </li>
                <li>
                    <a href="" class="module-text">
                        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="margin-bottom:10px;display: inline-block;float: left;">
                            <div class="uk-text-center" style="margin: 0px 10px 0 0; width: 153px; ">
                                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                    <img class="uk-transition-scale-up uk-transition-opaque" src="images/pane_module_01.jpg" style="" alt="">
                                </div>
                            </div>
                        </div>
                        <span class="">21图</span>
                        邓超为《影》瘦身40斤，一人二角同框太惊
                    </a>
                </li>
            </ul>
        </div>

    </div>
    <!-- 精彩图片 - end -->
    </div>
    `,
})

// 返回顶部
Vue.component('return-tops',{
    template:`
    <div>

        <div class="refresh">
            <a href="/">
                <i class="fa fa-refresh"></i>
            </a>
        </div>

        <div class="angle-up">
            <i class="fa fa-angle-up"></i>
        </div>
    
    </div>
    `,
})

// 卡片 - 导航
Vue.component('care-navs',{
    template:`
    <div>
        <!--  电影 电视剧 综艺 明星八卦  -->
        <ul class="share-list">
            <li data-cont="p" class="share-list-check">全部</li>
            <li data-cont="l">电影</li>
            <li data-cont="m">电视剧</li>
            <li data-cont="n">综艺</li>
            <li data-cont="k">明星八卦</li>
        </ul>
    </div>
    `,
})

// 卡片 - 列表
Vue.component('care-lists',{
    template:`
    <div>
    <div class="list">

    <!-- 电影 -->
    <div id="l">
        <ul>
            <li>
                <a href="javascript:;">台媒称台湾或再次无缘APEC峰会：“已作最坏打算”</a>
                <span class="list_span">
                    <a href="javascript:;">时政</a>
                    <a href="javascript:;">
                        <img src="./images/list_01.jpg" alt="">
                    </a>
                    <a href="javascript:;">新华网</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">56评论</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">12分钟前</a>
                    <div style="display: inline-block">
                        <i class="fa fa-times cha" id="3"></i>
                    </div>
                    <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                    <b>不感兴趣
                        <i class="fa fa-times"></i>
                    </b>
                </span>
            </li>
            <li class="haveimg">
                <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                    <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_01.jpg" style="height: 90px;" alt="">
                        </div>
                    </div>
                </div>
                <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                    <dt>
                        <a href="javascript:;">英国女孩考14个A愁坏父亲 曾承诺1个A给100英镑
                        </a>
                    </dt>
                    <dd>
                        <span class="list_span">
                            <a href="javascript:;">时政</a>
                            <a href="javascript:;">
                                <img src="./images/list_02.jpg" alt="">
                            </a>
                            <a href="javascript:;">新华网</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">56评论</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">12分钟前</a>
                            <div style="display: inline-block">
                                <i class="fa fa-times cha" id="3"></i>
                            </div>
                            <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                            <b>不感兴趣
                                <i class="fa fa-times"></i>
                            </b>
                        </span>

                    </dd>
                </dl>

            </li>
        </ul>
    </div>

    <!-- 电视剧 -->
    <div id="m">
        <ul>
            <li>
                <a href="javascript:;">台媒称台湾或再次无缘APEC峰会：“已作最坏打算”</a>
                <span class="list_span">
                    <a href="javascript:;">时政</a>
                    <a href="javascript:;">
                        <img src="./images/list_01.jpg" alt="">
                    </a>
                    <a href="javascript:;">新华网</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">56评论</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">12分钟前</a>
                    <div style="display: inline-block">
                        <i class="fa fa-times cha" id="3"></i>
                    </div>
                    <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                    <b>不感兴趣
                        <i class="fa fa-times"></i>
                    </b>
                </span>
            </li>
            <li class="haveimg">
                <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                    <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_01.jpg" style="height: 90px;" alt="">
                        </div>
                    </div>
                </div>
                <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                    <dt>
                        <a href="javascript:;">英国女孩考14个A愁坏父亲 曾承诺1个A给100英镑
                        </a>
                    </dt>
                    <dd>
                        <span class="list_span">
                            <a href="javascript:;">时政</a>
                            <a href="javascript:;">
                                <img src="./images/list_02.jpg" alt="">
                            </a>
                            <a href="javascript:;">新华网</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">56评论</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">12分钟前</a>
                            <div style="display: inline-block">
                                <i class="fa fa-times cha" id="3"></i>
                            </div>
                            <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                            <b>不感兴趣
                                <i class="fa fa-times"></i>
                            </b>
                        </span>

                    </dd>
                </dl>

            </li>
        </ul>
    </div>

    <!-- 综艺 -->
    <div id="n">
        <ul>
            <li>
                <a href="javascript:;">台媒称台湾或再次无缘APEC峰会：“已作最坏打算”</a>
                <span class="list_span">
                    <a href="javascript:;">时政</a>
                    <a href="javascript:;">
                        <img src="./images/list_01.jpg" alt="">
                    </a>
                    <a href="javascript:;">新华网</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">56评论</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">12分钟前</a>
                    <div style="display: inline-block">
                        <i class="fa fa-times cha" id="3"></i>
                    </div>
                    <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                    <b>不感兴趣
                        <i class="fa fa-times"></i>
                    </b>
                </span>
            </li>
            <li class="haveimg">
                <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                    <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_01.jpg" style="height: 90px;" alt="">
                        </div>
                    </div>
                </div>
                <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                    <dt>
                        <a href="javascript:;">英国女孩考14个A愁坏父亲 曾承诺1个A给100英镑
                        </a>
                    </dt>
                    <dd>
                        <span class="list_span">
                            <a href="javascript:;">时政</a>
                            <a href="javascript:;">
                                <img src="./images/list_02.jpg" alt="">
                            </a>
                            <a href="javascript:;">新华网</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">56评论</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">12分钟前</a>
                            <div style="display: inline-block">
                                <i class="fa fa-times cha" id="3"></i>
                            </div>
                            <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                            <b>不感兴趣
                                <i class="fa fa-times"></i>
                            </b>
                        </span>

                    </dd>
                </dl>

            </li>
        </ul>
    </div>

    <!-- 明星八卦 -->
    <div id="k">
        <ul>
            <li>
                <a href="javascript:;">台媒称台湾或再次无缘APEC峰会：“已作最坏打算”</a>
                <span class="list_span">
                    <a href="javascript:;">时政</a>
                    <a href="javascript:;">
                        <img src="./images/list_01.jpg" alt="">
                    </a>
                    <a href="javascript:;">新华网</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">56评论</a>
                    <a href="javascript:;">·</a>
                    <a href="javascript:;">12分钟前</a>
                    <div style="display: inline-block">
                        <i class="fa fa-times cha" id="3"></i>
                    </div>
                    <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                    <b>不感兴趣
                        <i class="fa fa-times"></i>
                    </b>
                </span>
            </li>
            <li class="haveimg">
                <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid style="display: inline-block;float: left;width: 166px; margin-right: 15px;">
                    <div class="uk-text-center" style="margin-right: 0px; width: 156px; ">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img class="uk-transition-scale-up uk-transition-opaque" src="images/list_img_01.jpg" style="height: 90px;" alt="">
                        </div>
                    </div>
                </div>
                <dl class="uk-description-list uk-description-list-divider" style="margin: 0px;flex: 1;">
                    <dt>
                        <a href="javascript:;">英国女孩考14个A愁坏父亲 曾承诺1个A给100英镑
                        </a>
                    </dt>
                    <dd>
                        <span class="list_span">
                            <a href="javascript:;">时政</a>
                            <a href="javascript:;">
                                <img src="./images/list_02.jpg" alt="">
                            </a>
                            <a href="javascript:;">新华网</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">56评论</a>
                            <a href="javascript:;">·</a>
                            <a href="javascript:;">12分钟前</a>
                            <div style="display: inline-block">
                                <i class="fa fa-times cha" id="3"></i>
                            </div>
                            <!-- <i class="fa fa-times"><span>不感兴趣</span></i> -->

                            <b>不感兴趣
                                <i class="fa fa-times"></i>
                            </b>
                        </span>

                    </dd>
                </dl>

            </li>
        </ul>
    </div>

</div>
    </div>
    `,
})