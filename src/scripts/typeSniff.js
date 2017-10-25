/**
 * @function isNull 判断值是否为null
 * @param  {不限} value    {传入判断的值}
 * @return {boolean} {这个值是否为null}
 */
function isNull(value) {
    if (!value && typeof value === 'object') {
        return true;
    }
    return false;
}
/**
 * @function typeName 判断内置对象的类型
 * @param  {不限} value    {传入判断的值}
 * @return {string} {这个值的类型}
 */
function typeName(value) {
    if (typeof value === 'object') {
        return Object.prototype.toString.call(value).slice(8);
    }
}