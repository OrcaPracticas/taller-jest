/**
 * Configuracion general.
 *
 * @package Brahma.
 * @subPackage Webapck.
 */
const PATH = require("path");
const BROWSER_SYNC = require("browser-sync-webpack-plugin");

const ROOT_FOLDER = PATH.resolve(__dirname, "../");

const COMMON_CONFIG = {
    watch: true,
    entry: {
        "react-component": PATH.resolve(__dirname, "../src/react-component.js"),
    },
    output: {
        filename: "dist-[name].js",
        path: `${ROOT_FOLDER}/dist/`,
        publicPath: "/dist/",
        pathinfo: true,
    },
    module: {
        rules: [
            {
                // Rules for JS
                exclude: /(node_modules)/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "react",
                            "env",
                            "flow",
                            "stage-0",
                            "es2017",
                        ],
                        plugins: ["inline-json-import"],
                    },
                },
            },
        ],
    },
    plugins: [
        new BROWSER_SYNC({
            host: "localhost",
            port: 3000,
            server: {
                baseDir: [
                    `${ROOT_FOLDER}/dist/`,
                    `${ROOT_FOLDER}/`,
                    `${ROOT_FOLDER}/src/`,
                ],
            },
        }),
    ],
};

module.exports = COMMON_CONFIG;
