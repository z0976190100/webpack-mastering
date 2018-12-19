const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "ai_bundle.js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            }
        ]
    }
};

module.exports = config;