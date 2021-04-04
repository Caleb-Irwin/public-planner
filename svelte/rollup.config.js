// jshint esversion: 8
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import autoPreprocess from "svelte-preprocess";
import copy from "rollup-plugin-copy";
import babel from "@rollup/plugin-babel";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "../dev/build/public/bundle.js",
  },
  plugins: [
    svelte({
      preprocess: autoPreprocess(),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // typescript({ sourceMap: true }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({ sourceMap: true }),
    !production && babel({ babelHelpers: "bundled" }),
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    !production && terser(),
    copy({
      targets: [{ src: "public/**/*", dest: "../dev/build/public/" }],
    }),
  ],
  watch: {
    clearScreen: true,
  },
};
