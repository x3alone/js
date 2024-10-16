function replica(obj1, ...old) {
    function deepAssign(obj1, source) {
        if (Array.isArray(source)) {
            if (!Array.isArray(obj1)) {
                obj1 = [];
            }
            source.forEach((item, index) => {
                obj1[index] = deepAssign(obj1[index], item);
            });
        } else if (source !== null && typeof source === 'object') {
            if (typeof obj1 !== 'object' || obj1 === null) {
                obj1 = {};
            }
            Object.keys(source).forEach((key) => {
                obj1[key] = deepAssign(obj1[key], source[key]);
            });
        } else {
            return source;
        }
        return obj1;
    }

    old.forEach((source) => {
        obj1 = deepAssign(obj1, source);
    });

    return obj1;
}
