const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/scss/_variables.scss";
                @import "@/scss/_general.scss";
                `
            }
        }
    }
}