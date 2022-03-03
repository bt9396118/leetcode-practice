/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let res = 0;
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = MAX_VALUE * -1;

    while (x != 0) {
        res = res * 10 + parseInt(x % 10);

        if (res > MAX_VALUE || res < MIN_VALUE) return 0;

        x = parseInt(x / 10);
    }

    return res;
};