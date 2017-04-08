/**
 * Created by hc on 2017/4/4.
 */
function $id(id) {
    return document.getElementById(id);
}

function bindEvent() {
    var sea = $id("my_search");
    /*banner对象*/
    var banner = $id("my_banner");
    /*高度*/
    var height = banner.offsetHeight;
    window.onscroll = function() {
        var top = document.body.scrollTop;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if (top > height) {
            sea.style.background = "rgba(201,21,35,0.85)";
        } else {
            var op = top / height * 0.85;
            sea.style.background = "rgba(201,21,35," + op + ")";
        }
    };
}

function scrollPic() {
    var imgBox = document.getElementsByClassName("banner_box")[0];
    var width = $id("my_banner").offsetWidth;
    var pointBox = document.getElementsByClassName("point_box")[0];
    var ols = pointBox.children;
    var indexx = 1;
    var timer = null;
    var moveX = 0;
    var endX = 0;
    var startX = 0;
    var square = 0;

    function addTransition() {
        imgBox.style.transition = "all .3s ease 0s";
        imgBox.style.webkitTransition = "all .3s ease 0s";
    }

    function removeTransition() {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }

    function setTransfrom(t) {
        imgBox.style.transform = 'translateX(' + t + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + t + 'px)';
    }
    //3. 开始动画部分
    pointBox.children[0].className = "now";
    for (var i = 0; i < ols.length; i++) {
        ols[i].index = i; // 获得当前第几个小li 的索引号
        ols[i].onmouseover = function() {
            for (var j = 0; j < ols.length; j++) {
                ols[j].className = ""; // 所有的都要清空
            }
            this.className = "now";
            setTransfrom(-indexx * width);
            // 调用动画函数  第一个参数  谁动画     第二个  走多少
            square = indexx; // 当前的索引号为主
        }
    }
    timer = setInterval(function() {
        indexx++;
        addTransition();
        setTransfrom(-indexx * width);
        // 小方块
        square++;
        if (square > ols.length - 1) {
            square = 0;
        }
        for (var i = 0; i < ols.length; i++) // 先清除所有的
        {
            ols[i].className = "";
        }
        console.log("最初", square);
        ols[square].className = "now"; // 留下当前的
    }, 3000);

    imgBox.addEventListener('transitionEnd', function() {
        if (indexx >= 9) {
            indexx = 1;
        } else if (indexx <= 0) {
            indexx = 8;
        }
        removeTransition();
        setTransfrom(-indexx * width);
    }, false);
    imgBox.addEventListener('webkitTransitionEnd', function() {
        if (indexx >= 9) {
            indexx = 1;
        } else if (indexx <= 0) {
            indexx = 8;
        }

        removeTransition();
        setTransfrom(-indexx * width);
    }, false);
    /**
     * 触摸事件开始
     */
    imgBox.addEventListener("touchstart", function(e) {
        console.log("开始");
        var event = e || window.event;
        //记录开始滑动的位置
        startX = event.touches[0].clientX;
    }, false);
    /**
     * 触摸滑动事件
     */
    imgBox.addEventListener("touchmove", function(e) {
        console.log("move");
        var event = e || window.event;
        event.preventDefault();

        //清除定时器
        clearInterval(timer);
        //记录结束位置
        endX = event.touches[0].clientX;
        //记录移动的位置
        moveX = startX - endX;
        removeTransition();
        setTransfrom(-indexx * width - moveX);
    }, false);
    /**
     * 触摸结束事件
     */
    imgBox.addEventListener("touchend", function() {
        console.log("end");
        //如果移动的位置大于三分之一，并且是移动过的
        if (Math.abs(moveX) > (1 / 3 * width) && endX != 0) {
            //向左
            if (moveX > 0) {
                indexx++;
            } else {
                indexx--;
            }
            //改变位置
            setTransfrom(-indexx * width);
        }
        //回到原来的位置
        addTransition();
        setTransfrom(-indexx * width);
        //初始化
        startX = 0;
        endX = 0;

        clearInterval(timer);
        timer = setInterval(function() {
            indexx++;
            square++;
            if (square > ols.length - 1) {
                square = 0;
            }
            for (var i = 0; i < ols.length; i++) // 先清除所有的
            {
                ols[i].className = "";
            }
            console.log("最初", square);
            ols[square].className = "now"; // 留下当前的
            addTransition();
            setTransfrom(-indexx * width);

        }, 3000);
    }, false);
};

module.exports = {
    bindEvent,
    scrollPic
}
