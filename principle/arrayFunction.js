//map
function map(arr, mapCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return [];
    } else {
        let result = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(mapCallback(arr[i], i, arr));
        }
        return result;
    }
}
//filter
function filter(arr, filterCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function')
        return [];
    else {
        let result = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            if (filterCallback(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
//reduce
function reduce(arr, reduceCallback, initialValue) {
    if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return [];
    } else {
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : arr[0];
        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
            value = reduceCallback(value, arr[i], i, arr);
        }
        return value;
    }
}