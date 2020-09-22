
const fs                  = require('fs');
const packageJson         = require('./package.template');
const brands              = require('./brands.js');
const stringPackagejson   = JSON.stringify(packageJson);
const path                = require('path');

const compile             = require('es6-template-strings/compile')
const resolveToString     = require('es6-template-strings/resolve-to-string')
const compiled            = compile(stringPackagejson);
// print process.argv
const argv               = (() => {
    const arguments = {};
    process.argv.slice(2).map( (element) => {
        const matches = element.match( '--([a-zA-Z0-9]+)=(.*)');
        if ( matches ){
            arguments[matches[1]] = matches[2]
                .replace(/^['"]/, '').replace(/['"]$/, '');
        }
    });
    return arguments;
})();

if(!argv.brand && !brands[argv.brand]){
    throw Error('The Brand that you have selected not exist')
}
if(!brands[argv.brand].hostList[argv.env]){
    throw Error('There is no endpoint for this env')
}

const brand = brands[argv.brand]
const brandedJson   = JSON.parse(resolveToString(compiled, brands[argv.brand]));
brand.host          = brand.hostList[argv.env]

fs.writeFileSync(path.join(__dirname,'../../../package.json'), JSON.stringify(brandedJson , null, 4));
fs.writeFileSync(path.join(__dirname,'../default.json'), JSON.stringify(brands[argv.brand], null, 4));
