const path = require('path');

module.export = {
    entry:'./src/index,js', 
    output:{
        path: path.resolve(__dirname, 'dis/asset'),
        filename : 'bundle.js'
    }
};