var share_list = document.querySelectorAll(".share-list > li");
var l = document.querySelector("#l");
var m = document.querySelector("#m");
var n = document.querySelector("#n");
var k = document.querySelector("#k");

window.addEventListener('scroll',function(){
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var share_list_parent = share_list[0].parentNode;

    if(top >= 91){
        
        share_list_parent.style.textAlign = "center";
        share_list_parent.style.position = "fixed";
        // share_list_parent.style.height = "0px";

        // $(".share-list").animate({
        //     height: 43,
        // },500);
    }else if(top < 91){

        share_list_parent.style.textAlign = "left";
        share_list_parent.style.position = "absolute";
    }

})

for (var i = 0; i < share_list.length; i++) {
    share_list[i].onclick = function () {

        var list_parent = document.querySelectorAll(".list > div");

        // 隐藏当前下边框样式
        var share_list_check = document.querySelector(".share-list-check");
        share_list_check.classList.remove("share-list-check");
        console.log(share_list_check);
        // 给当前点击的加上下边框样式
        this.classList.add("share-list-check");

        if (this.dataset.cont != 'p') {

            // 将所有列表隐藏
            for (var j = 0; j < list_parent.length; j++) {
                list_parent[j].style.display = "none";
            }

            // 显示选中导航对应的列表
            var list = document.querySelector("#" + this.dataset.cont);
            list.style.display = "block";

        } else {
            // 若点击全部时 所有列表显示
            for (var j = 0; j < list_parent.length; j++) {
                list_parent[j].style.display = "block";
            }
        }

    }
}