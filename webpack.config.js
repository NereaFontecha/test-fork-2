var path = require('path');

module.exports = {
    watch: true,
    mode:'development',
    entry: {
        app: './src/js/app.js',
        capabilities: './src/js/capabilities.js',
        ourOffices: './src/js/ourOffices.js',
        ourOfficesIE: './src/js/ourOfficesIE.js',
        aboutUs: './src/js/aboutUs.js',
        thoughtLeadership: './src/js/thoughtLeadership.js',
        singleHeadshot: './src/js/singleHeadshot.js'
    },
    output: {
        path: path.resolve(__dirname, './build/themes/web/js/'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                },
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    resolve: {
        alias: {

            // "Enllax": path.resolve('node_modules', 'enllax/dist/jquery.enllax.js'),
        },
    }
}
