/**
 * @function is 判断两个数是否相等
 * @param  {number} val1    {传入判断的值}
 * @param  {number} val2    {传入判断的值}
 * @return {boolean} {这两个值是否为相等}
 */
function is(val1, val2) {
    if (val1 === 0 ) {
        return val1 === val2 && 1/val1 === 1/val2;
    }
    if (val1 !== val1) {
        return val2 !== val2;
    }
    return val1 === val2;
}