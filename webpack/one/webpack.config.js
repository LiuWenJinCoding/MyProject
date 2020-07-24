const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		app: __dirname + "/src/app.js", //唯一入口文件，__dirname 是nodejs里面的一个全局变量
	},

	output: {
		path: path.resolve(__dirname, "./dist"), //打包后文件存放的位置
		filename: "boundle.js", //打包后输出的文件名
	},

	module: {
		rules: [{ test: /\.css&/, use: "css-loader" }, ],
	},

	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
