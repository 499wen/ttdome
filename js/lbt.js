// 广告
var adv_01 = document.querySelector(".adv .box .tips > img:nth-child(1)");
var adv_box = document.querySelector(".adv .box .tips");
// 鼠标放上 改变图片
adv_01.onmouseover = function () {
    adv_box.style.width = "88px";
    adv_01.src = "./images/adv_04.jpg";
}

// 鼠标移开 还原图片
adv_01.onmouseout = function () {
    adv_box.style.width = "40px";
    adv_01.src = "./images/adv_03.jpg";
}

var adv_02 = document.querySelectorAll(".adv .box .tips > .img");
var adv_pb = document.querySelectorAll(".adv .box .tips .pb");
var adv = document.querySelectorAll(".adv .box");

// 鼠标放上 出现屏蔽广告功能
for (var i = 0; i < adv_02.length; i++) {
    adv_02[i].onmouseover = function () {
        this.nextElementSibling.style.display = "block";
    }

    adv_pb[i].onmouseover = function () {
        this.style.display = "block";
    }

    adv_pb[i].onmouseout = function () {
        this.style.display = "none";
    }

    adv_pb[i].onclick = function () {
        this.parentNode.parentNode.style.display = 'none';
    }
}

// 广告轮播图 
var adv_li = document.querySelectorAll(".adv .box .box_right ul li");

// 第一组广告轮播图
// 设置定时器
var adv_div = adv_li[0].nextElementSibling.childNodes[2];
var insert = setInterval(adv_lbt, 2000);

function adv_lbt() {

    // 除去上次选中的样式
    var bgc_o = document.querySelector('.bgc_o');
    
    bgc_o.classList.remove('bgc_o');
    var cont = document.querySelector("#" + bgc_o.dataset.cont);
    cont.style.zIndex = 0;

    // 给当前点击的添加样式
    adv_div.classList.add('bgc_o');
    
    // 获取 div 中data-cont值 
    cont = adv_div.dataset.cont;
  
    // 小图对应的大图  添上样式
    document.querySelector("#" + cont).style.zIndex = 5;

    if (adv_div.dataset.cont != "s1") {

        adv_div = adv_div.parentNode.nextElementSibling.childNodes[2];
    } else {

        adv_div = adv_li[0].childNodes[2];
    }

}

for (var i = 0; i < (adv_li.length) / 3; i++) {

    // 给小图  附上点击事件
    adv_li[i].onmouseover = function () {

        // 鼠标放在图片上时  定时器关闭
        clearInterval(insert);

        // 除去上次选中的样式
        var bgc_o = document.querySelector('.bgc_o');
        bgc_o.classList.remove('bgc_o');
        document.querySelector("#" + bgc_o.dataset.cont).style.zIndex = 0;

        // 给当前点击的添加样式
        this.childNodes[2].classList.add('bgc_o');

        // 获取 div 中data-cont值 
        cont = this.childNodes[2].dataset.cont;

        // 小图对应的大图  添上样式
        document.querySelector("#" + cont).style.zIndex = 5;
    }

    adv_li[i].onmouseout = function () {
        // 鼠标离开图片时  定时器开启
        var insert = setInterval(adv_lbt, 2000);
    }
}


// 第二组广告轮播图
// 设置定时器
var insert_t = setInterval(adv_lbt_t, 2000);
var adv_div_t = adv_li[6].nextElementSibling.childNodes[2];


function adv_lbt_t() {

    // 除去上次选中的样式
    var bgc_t = document.querySelector('.bgc_t');
    bgc_t.classList.remove('bgc_t');
    var cont = document.querySelector("#" + bgc_t.dataset.cont);
    cont.style.zIndex = 0;

    // 给当前点击的添加样式
    adv_div_t.classList.add('bgc_t');

    // 获取 div 中data-cont值 
    cont = adv_div_t.dataset.cont;

    // 小图对应的大图  添上样式
    document.querySelector("#" + cont).style.zIndex = 5;

    if (adv_div_t.dataset.cont != "s2") {

        adv_div_t = adv_div_t.parentNode.nextElementSibling.childNodes[2];
    } else {
        adv_div_t = adv_li[6].childNodes[2];
    }

}

for (var i = (adv_li.length) / 3; i < (adv_li.length) * 2 / 3; i++) {

    // 给小图  附上点击事件
    adv_li[i].onmouseover = function () {

        // 鼠标放在图片上时  定时器关闭
        clearInterval(insert_t);

        // 除去上次选中的样式
        var bgc_t = document.querySelector('.bgc_t');
        bgc_t.classList.remove('bgc_t');
        document.querySelector("#" + bgc_t.dataset.cont).style.zIndex = 0;

        // 给当前点击的添加样式
        this.childNodes[2].classList.add('bgc_t');

        // 获取 div 中data-cont值 
        cont = this.childNodes[2].dataset.cont;

        // 小图对应的大图  添上样式
        document.querySelector("#" + cont).style.zIndex = 5;
    }

    adv_li[i].onmouseout = function () {
        // 鼠标离开图片时  定时器开启
        var insert_t = setInterval(adv_lbt_t, 2000);
    }
}


// 第三组广告轮播图
// 设置定时器
var insert_h = setInterval(adv_lbt_h, 2000);
var adv_div_h = adv_li[12].childNodes[2];

function adv_lbt_h() {

    // 除去上次选中的样式
    var bgc_h = document.querySelector('.bgc_h');
    bgc_h.classList.remove('bgc_h');
    var cont = document.querySelector("#" + bgc_h.dataset.cont);
    cont.style.zIndex = 0;

    // 给当前点击的添加样式
    adv_div_h.classList.add('bgc_h');

    // 获取 div 中data-cont值 
    cont = adv_div_h.dataset.cont;

    // 小图对应的大图  添上样式
    document.querySelector("#" + cont).style.zIndex = 5;

    if (adv_div_h.dataset.cont != "s3") {

        adv_div_h = adv_div_h.parentNode.nextElementSibling.childNodes[2];
    } else {
        adv_div_h = adv_li[12].childNodes[2];
    }

}

for (var i = (adv_li.length) * 2 / 3; i < (adv_li.length); i++) {

    // 给小图  附上点击事件
    adv_li[i].onmouseover = function () {

        // 鼠标放在图片上时  定时器关闭
        clearInterval(insert_h);

        // 除去上次选中的样式
        var bgc_h = document.querySelector('.bgc_h');
        bgc_h.classList.remove('bgc_h');
        document.querySelector("#" + bgc_h.dataset.cont).style.zIndex = 0;

        // 给当前点击的添加样式
        this.childNodes[2].classList.add('bgc_h');

        // 获取 div 中data-cont值 
        cont = this.childNodes[2].dataset.cont;

        // 小图对应的大图  添上样式
        document.querySelector("#" + cont).style.zIndex = 5;
    }

    adv_li[i].onmouseout = function () {
        // 鼠标离开图片时  定时器开启
        var insert_h = setInterval(adv_lbt_h, 2000);
    }
}