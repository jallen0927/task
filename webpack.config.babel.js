'use strict';

import path from 'path';

const config = {
    entry: {
        app: path.join(__dirname, 'client/index')
    },
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

export default config;
