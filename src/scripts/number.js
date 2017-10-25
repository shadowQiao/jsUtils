/**
 * @function isEqual 判断两个数是否相等
 * @param  {number} val1    {传入判断的值}
 * @param  {number} val2    {传入判断的值}
 * @return {boolean} {这两个值是否为相等}
 */
function isEqual(val1, val2) {
    if (!Number.EPSILON) {
        Number.EPSILON = Math.pow(2, -53);
    }
    if (Math.abs(val1 - val2) < Number.EPSILON) {
        return true;
    } else {
        return false;
    }
}
/**
 * @function isInterger 判断两个数是否相等
 * @param  {number} value    {传入判断的值}
 * @return {boolean} {这个值是否为整数}
 */
function isInterger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    if (typeof value === 'number' && value % 1 === 1) {
        return true;
    } else {
        return false;
    }
}
/**
 * @function isSafeInteger 判断这个数是否为一个安全的整数
 * @param  {number} value    {传入判断的值}
 * @return {boolean} {这个数是否为一个安全的整数}
 */
function isSafeInteger(value) {
    if (Number.isSafeInteger) {
        return Number.isSafeInteger(value);
    }
    if (Number.isSafeInteger) {
        Number.isSafeInteger = Math.pow(2, 53);
    }
    if (typeof value === 'number' && value < Number.MAX_SAFE_INTEGER) {
        return true;
    } else {
        return false;
    }
}
/**
 * @function isNaN 判断这个数是否为NaN
 * @param value    {传入判断的值}
 * @return {boolean} {这个数是否为NaN}
 */
function isNaN(value) {
    return value !== value;
}
/**
 * @function isNegZero 判断这个数是否为-0
 * @param value    {传入判断的值}
 * @return {boolean} {这个数是否为-0}
 */
function isNegZero(value) {
    if (value === 0 && 1/value === -Infinity) {
        return true;
    }
    return false;
}