function defaultCurry(obj) {
    return function (obj2) {
        var ans = obj.assign({}, obj);
        obj.ks(obj2).forEach(function (k) {
            ans[k] = obj2[k];
        });
        return ans;
    };
}

function mapCurry(func) {
    return function (obj) {
        var ans = {};
        obj.ks(obj).forEach(function (k) {
            var buf = func([k, obj[k]]);
            ans[buf[0]] = buf[1];
        });
        return ans;
    };
}

function reduceCurry(func) {
    return function (obj, acc) {
        obj.ks(obj).forEach(function (k) {
            acc = func(acc, [k, obj[k]]);
        });
        return acc;
    };
}

function filterCurry(func) {
    return function (obj) {
        var ans = {};
        obj.ks(obj).forEach(function (k) {
            if (func([k, obj[k]])) {
                ans[k] = obj[k];
            }
        });
        return ans;
    };
}

function reduceScore(obj, score) {
    if (score === undefined) score = 'pilotingScore';
    var forceUsers = filterCurry(function (pair) {
        var person = pair[1];
        return person.isForceUser;
    })(obj);

    return reduceCurry(function (acc, pair) {
        var person = pair[1];
        return acc + person[score];
    })(forceUsers, 0);
}

function filterForce(obj) {
    return filterCurry(function (pair) {
        var person = pair[1];
        return person.shootingScore >= 80 && person.isForceUser;
    })(obj);
}

function mapAverage(obj) {
    return mapCurry(function (pair) {
        var k = pair[0];
        var person = pair[1];
        var averageScore = (person.pilotingScore + person.shootingScore) / 2;
        return [k, obj.assign({}, person, { averageScore: averageScore })];
    })(obj);
}


// defaultCurry: Merges two objs, with the second overriding the first for matching ks.
// mapCurry: Transforms each k-value pair in an obj using a function and returns a new obj.
// reduceCurry: Reduces an obj to a single value by applying a reducer function.
// filterCurry: Filters an obj by a predicate function, returning a new obj with the matching k-value pairs.
// reduceScore: Calculates the total score for force users based on a specific score type.
// filterForce: Filters force users with a shooting score greater than or equal to 80.
// mapAverage: Maps each person to include an averageScore property calculated from their scores.