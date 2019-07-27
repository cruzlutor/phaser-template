const path = require("path");
const config = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

config.mode = "development";

config.devServer = {
	contentBase: path.join(__dirname, "dist"),
	port: 4000
};

config.plugins.push(
	new HtmlWebpackPlugin({
		template: "src/index.html"
	})
);

module.exports = config;
