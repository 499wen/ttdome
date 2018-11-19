var up = document.querySelector(".scroll-top .angle-up");
//在页面加载之前执行 
function hidden() {

    // if (document.documentElement.scrollTop >= 40) {
    //     up.style.display = "block";

    //     $(".body_fl").css("top", "15px");
    // }
}

// 滚动条下滑到一定距离时  弹回顶端的按钮出现
window.onscroll = function () {
    var docTop = document.documentElement.scrollTop || document.body.scrollTop;
    var body_fl = document.querySelector(".body_fl");

    if (docTop >= 40) {

        body_fl.style.top = "15px";
        up.style.display = "block";
    } else {

        body_fl.style.top = "55px";
        up.style.display = "none";
    }

    // 返回顶部  函数
    up.onclick = function top() {

        function top() {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 200;

            // 当滑轮距顶端为 0 时 关闭定时器
            if (document.documentElement.scrollTop == 0) {

                clearInterval(time);
            }
        };

        // 开启定时器
        var time = setInterval(top, 30);
    }

}

// 点击导航换效果
var publish_nav = document.querySelectorAll(".publish .publish-nav ul > li");
for (var i = 0; i < publish_nav.length; i++) {
    publish_nav[i].onclick = function () {
        // 先将已有样式的导航的去掉样式 .publish-active
        var active = document.querySelector(".publish-active");
        active.classList.remove("publish-active");

        // 给点击的导航就加上样式 .publish-active
        this.classList.add("publish-active");
        // 将之前的效果 隐藏
        document.querySelector("#" + active.dataset.cont).style.display = "none";

        // 获取当前点击导航的 data-cont 值
        var cont = this.dataset.cont;
        // 将与cont对应的效果 显示出来
        document.querySelector("#" + cont).style.display = "block";
    }

}

// 点击新闻  X  信息消失
var times = document.querySelector("#times");
times.onclick = function () {
    var unreadNew = document.querySelector(".unreadNew");
    unreadNew.style.display = "none";
}

// 让推荐新闻慢慢消失
console.log($(".unreNew"))
$(".unreNew").animate({
    height: 0,
    opacity: 0,
},2000);

// 新闻列表 动画
var newtimes = document.querySelectorAll(".list_span > div");
var bgxq = document.querySelectorAll(".list_span > b");

for (var i = 0; i < newtimes.length; i++) {

    // 出现"不感兴趣"动画
    newtimes[i].childNodes[0].onmouseover = function () {
        // console.log($(this))
        this.style.visibility = "hidden";
        // this.style.visibility = "hidden";

        $(this).parent().next().animate({
            opacity: 1,
            width: 70,
        }, 500)
    }

    // 鼠标离开 X 标签
    bgxq[i].childNodes[1].onmouseout = function () {
        // console.log('66');
        // this父节点的上一个兄弟节点 的第一个子节点
        var fa = this.parentNode.previousElementSibling.childNodes[0];
        fa.style.visibility = "visible";
        // fa.style.visibility = "visible";

        this.parentNode.style.opacity = "0";
        this.parentNode.style.width = "0";
    }



    // 点击 "不感兴趣" 当前列表消失
    bgxq[i].onclick = function () {
        // console.log($(this).parent().parent()[0].localName);
        if ($(this).parent().parent()[0].localName == "li") {
            this.parentNode.parentNode.style.display = "none";
        } else if ($(this).parent().parent()[0].localName == "dd") {
            this.parentNode.parentNode.parentNode.parentNode.style.display = "none";
        }

        $(".model-frame").animate({
            opacity: 1,
        }, 1000, function () {
            $(".model-frame").animate({
                opacity: 0,
            }, 1000)
        })
    }

}

荀彧