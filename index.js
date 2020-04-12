const fs = require('fs');
const source = require('./source');

const flatTranslation = require('./flatTranslation');

const flattenSource = flatTranslation(source);

fs.writeFileSync('flatten.json', JSON.stringify(flattenSource));