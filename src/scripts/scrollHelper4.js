/**
 * @function scrollHelper
 * @param  {dom object} container
 * @return {object}
 */
function scrollHelper(ele) {
    var startX,
        startY,
        initPos = function(ev) {
            var touch = ev.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;
        },
        disableScroll = function(ev) {
            var touch = ev.touches[0],
                target = e.currentTarget,
                deltaX = touch.pageX - startX,
                deltaY = touch.pageY - startY;
            if (Math.abs(deltaY) < Math.abs(deltaX)) {
                e.preventDefault();
            }
            if (target.clientHeight + target.scrollTop + 3 >= target.scrollHeight) {
                if (deltaY < 0) {
                    e.preventDefault();
                }
            }
            if (target.scrollTop === 0) {
                if (deltaY > 0) {
                    e.preventDefault();
                }
            }
            e.stopPropagation();
        };
    return {
        resetTouchStart: function() {
            ele.addEventListener('touchstart', initPos, false);
        },
        resetTouchMove: function() {
            ele.removeEventListener('touchmove', disableScroll, false);
        },
        resetTouchEnd: function() {
            ele.removeEventListener('touchstart', initPos, false);
            ele.removeEventListener('touchmove', disableScroll, false);
        }
    }
}