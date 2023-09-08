import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

/**
 *  @type {import('rollup').RollupOptions}
 */
export default {
  input: "./src/index.js", // 打包的入口文件
  output: {
    file: 'dist/vue.js',
    format: 'umd',
    name: 'Vue',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      port: 3000,
      contentBase: '',
      openPage: '/index.html'
    })
  ]
};
