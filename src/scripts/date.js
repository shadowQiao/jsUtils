/**
 * @function now 返回当前时间的时间戳
 * @return {number} {当前时间的时间戳}
 */
function now() {
    if (Date.now) {
        return Date.now;
    } else {
        return new Date().getTime();
    }
}