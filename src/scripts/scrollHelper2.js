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
        container.style.position = 'fixed';
        container.top = -scrollTop + 'px;';
    }
    function beforeClose() {
        container.style.position = 'static';
        container.scrollTop = scrollTop;
    }
    return {
        beforeOpen,
        beforeClose
    };
}