//rollup.config.js
//Author: Rutgers IEEE ISN Team

import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
    entry: "client/js/app.module.js",
    dest: "client/app.bundle.js",
    format: "cjs",
    useStrict: false,
    plugins: [
        nodeResolve({
            main: true,
            jsnext: true,
            browser: true
        }),
        commonjs()
    ]
};
