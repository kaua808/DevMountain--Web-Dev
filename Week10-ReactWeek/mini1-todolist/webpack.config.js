module.exports = { 
	entry: "./app/App.js",
	output: { 
		filename: "public/bundle.js"
	},
	modules: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	}
};

