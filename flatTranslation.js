
function flatTranslation(jsonObject) {
    const map = generateFlattenMap(jsonObject);

    let flatten = {};
    for (var [key, value] of map.entries()) {
        flatten[key] = value;
    }

    return flatten;
}

function generateFlattenMap(source) {
    let map = new Map();
    for(let [key, value] of Object.entries(source)) {
        if(typeof value === 'object') {
            const deepMap = generateFlattenMap(value);
            for(let [mapKey, mapValue] of deepMap.entries()) {
                map.set(`${key}_${mapKey}`, mapValue);
            }
        } else {
            map.set(key, value);
        }
    }

    return map;
}

module.exports = flatTranslation;