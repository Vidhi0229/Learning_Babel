const path = require('path');

module.export = {
    mode: 'production',
    entry:'./src/index,js', 
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    }
};