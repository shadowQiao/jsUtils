/**
 * @function scrollHelper
 * @param  {dom object} container
 * @return {object}
 */

function scrollHelper(container) {
    var scrollTop;
    if (!container) {
        container = document.body;
    }
    function beforeOpen() {
        scrollTop = container.scollTop;
        container.style.overflow = 'hidden';
    }
    function beforeClose() {
        container.style.overflow = 'auto';
        container.scollTop = scrollTop;
    }
    return {
        beforeOpen,
        beforeClose
    };
}