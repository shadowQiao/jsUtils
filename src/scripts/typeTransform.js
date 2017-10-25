/**
 * @function toArray 将类数组对象转化为数组
 * @param  {类Array对象} value
 * @return {Array} {转化后的数组}
 * ES6中有方法Array.from(value)实现
 */
function toArray(value) {
    return Array.prototype.slice(value);
}