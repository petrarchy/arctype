
const NODE_ENV = process.env.NODE_ENV;

var CONFIG;
if (NODE_ENV === 'development'){
    CONFIG = require('./webpack.config.development');
} else if (NODE_ENV === 'production') {
    CONFIG = require('./webpack.config.production');
}

module.exports = CONFIG;
