/**
 * @function scrollHelper
 * @param  {dom object} container
 * @return {object}
 */
function scrollHelper(ele) {
    var preventScroll = function(ev) {
        ev.preventDefault();
    };
    return {
        disableScroll: function() {
            ele.addEventListener('ontouchstart', preventScroll, false);
        },
        cancelDisable: function() {
            ele.removeEventListener('ontouchstart', preventScroll, false);
        }
    }
}