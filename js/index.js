
// 获取轮播图 列表对象
var lb_list = document.querySelectorAll(".lb li");
var j = 0;

// 轮播图间隔时间 ms
var speed = 3000;

function lbt() {
    var next_lb = lb_list[j].nextElementSibling;

    if (next_lb == null) {
        j = -1;
        next_lb = lb_list[0];
        // j++;
        // return;
    }

    // 去除上一次的样式
    var active = document.querySelector(".active");
    var public = document.querySelector(".public");
    public.classList.remove("public");
    active.classList.remove("active");

    // 给下次选中的添加样式
    next_lb.classList.add("active");
    next_lb.childNodes[0].classList.add("public");

    // 修改对应的图片
    var cont = (j == -1 ? lb_list[lb_list.length - 1].dataset.cont : lb_list[j].dataset.cont);
    document.querySelector("#" + cont).style.zIndex = 0;
    var cont = next_lb.dataset.cont;
    document.querySelector("#" + cont).style.zIndex = 3;

    j++;
}
var inter = setInterval(lbt, speed);

for (var i = 0; i < lb_list.length; i++) {
    // 鼠标放在轮播导航上时 关闭定时器
    lb_list[i].onmouseover = function () {

        clearInterval(inter);

        // 排他思想  -  先将已有的列表样式去了 在往鼠标经过的列表上加上样式
        // 1、去除原有样式
        var public = document.querySelector(".public");
        var active = document.querySelector(".active");
        public.classList.remove("public");
        active.classList.remove("active");

        // 1.1、处理图片问题
        var cont = active.dataset.cont;
        document.querySelector("#" + cont).style.zIndex = 0;

        // 2、往鼠标经过的列表上加上样式
        this.classList.add("active");
        this.childNodes[0].classList.add("public");

        // 2.1、换成对应的图片
        var cont = this.dataset.cont;
        document.querySelector("#" + cont).style.zIndex = 2;

    }

    // 鼠标离开轮播导航时 开启定时器
    lb_list[i].onmouseout = function () {
        inter = setInterval(lbt, speed);
    }
}

// 发表长文 复选框
var checkbox = document.querySelector(".publish-bottom .checkbox");
// console.log(checkbox.parentNode.parentNode)
checkbox.onclick = function () {
    // this父级的父级的父级de 前一个兄弟
    var textare = this.parentNode.parentNode.parentNode.previousElementSibling;

    if (this.childNodes[0].classList[2] == "i-none") {

        this.childNodes[0].classList.remove("i-none");
        this.childNodes[0].classList.add("i-block");
        textare.style.height = "293px";
    } else {

        this.childNodes[0].classList.remove("i-block");
        this.childNodes[0].classList.add("i-none");
        textare.style.height = "93px";
    }

}