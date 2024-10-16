function deepCopy(val) {
    if (Array.isArray(val)) {
        return val.map(deepCopy); 
    } 
    else if (val !== null && typeof val === 'object') {
        let copy = {}; 
        Object.keys(val).forEach(function(key) {
            copy[key] = deepCopy(val[key]); 
        });
        return copy;
    } 
    return val;
}
