/**
 * @function blankArray undefined占位的数组
 * @param  {number} length    {传入数组的长度}
 * @return {array} {undefined占位的数组}
 */
function blankArray(length) {
    return Array.apply(null, {length: length});
}