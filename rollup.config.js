import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "Webapp/final_project/main.js", // Specify the entry point of your application
  output: {
    file: "Webapp/final_project/main.js", // Specify the output file where Rollup will bundle your code
    format: 'umd', // Specify the module format (e.g., UMD, CommonJS, ES module)
    name: 'MyBundle' // Specify the name of your bundle (only required for UMD format)
  },
  plugins: [
    nodeResolve(), // Resolve node modules
    commonjs() // Convert CommonJS modules to ES modules
  ]
};
