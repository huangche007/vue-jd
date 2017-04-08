/**
 * Created by hc on 2017/4/4.
 */
function myMoveScroll() {
    var childbox = document.getElementsByClassName("childbox")[0];
    var lis = childbox.children;
    var parentBox = document.getElementsByClassName("category_left")[0];
    var height = parentBox.offsetHeight;
    var topheight = document.getElementsByClassName("top_bar")[0].offsetHeight;
    //想要的
    var parentHeight = height - topheight;
    var childHeight = childbox.offsetHeight;
    var startY = 0;
    var endY = 0;
    var moveY = 0;
    var currentY = 0;
    //上下滑动距离的限制
    var upDownOffset = 150;
    var startTime = 0;
    var endTime = 0;

    function addTrans() {
        childbox.style.transition = "all.3s ease 0s";
        childbox.style.webkitTransition = "all.3s ease 0s";
    }

    function removeTrans() {
        childbox.style.transition = "none";
        childbox.style.webkitTransition = "none";
    }

    function setTransfrom(t) {
        childbox.style.transform = 'translateY(' + t + 'px)';
        childbox.style.webiktTransform = 'translateY(' + t + 'px)';
    }

    childbox.addEventListener("touchstart", function(e) {
        startTime = new Date().getTime();
        console.log("start");
        var event = e || window.event;
        startY = event.touches[0].clientY;
    }, false);

    childbox.addEventListener("touchmove", function(e) {
        console.log("move");
        var event = e || window.event;
        event.preventDefault();
        endY = event.touches[0].clientY;
        moveY = startY - endY;
        //上下滑动的范围
        if ((currentY - moveY) < upDownOffset && (currentY - moveY) > (parentHeight - childHeight - upDownOffset)) {
            removeTrans();
            setTransfrom(currentY - moveY);
        }

    }, false);

    childbox.addEventListener("touchend", function(e) {
        endTime = new Date().getTime();
        console.log("end");
        var event = e || window.event;
        //上面满足吸附的条件
        if ((currentY - moveY) >= 0) {
            addTrans();
            removeTrans();
            setTransfrom(0);
            currentY = 0;
            //下面满足吸附的条件
        } else if ((currentY - moveY) <= (parentHeight - childHeight)) {
            addTrans();
            removeTrans();
            setTransfrom(parentHeight - childHeight);
            currentY = parentHeight - childHeight;
        } else {
            currentY = currentY - moveY;
        }
        //就认为是点击
        if (endTime - startTime < 150 && moveY == 0) {

            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
                lis[i].index = i;
            }
            var li = e.target.parentNode;
            li.className = "now";
            /*
            移动的距离
             */
            var translateY = li.index * 50;
            if (translateY < childHeight - parentHeight) {
                addTrans();
                setTransfrom(-translateY);
                currentY = -translateY;
            } else {
                addTrans();
                setTransfrom(parentHeight - childHeight);
                currentY = parentHeight - childHeight;
            }

        }
    }, false);
};

module.exports = {
    myMoveScroll
}
