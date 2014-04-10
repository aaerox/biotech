module.exports = {
	// When production is disabled minification isn't performed.
	"production": true,

	// Prototyping is used to develop static HTML files before the back-end is
	// deployed. http://localhost:3000 should point to your HTML files in the 
	// root of your project.
	"prototyping": true,
	"prototypes": {
		"root": "/",		// The path to our static HTML files
		"port": 3000		// The port to run the webserver on
	},

	// Folder paths to relevant assets.
	"scss_folder": "assets/scss",		// Remove me to disable sass
	"css_folder": "assets/css",
	"coffee_folder": "assets/coffee",	// Remove me to disable coffeescript
	"js_folder" : "assets/js",
	"img_folder" : "assets/img",
	
	// The name of the concatenated app file to generate. 
	//'app' will generate app.js and app.min.js in production.
	"coffee_appfile": "app",
	
	// The path to the sitecore project for syncing changes.
	// If this is removed then no syncing will be performed.
	"sitecore_path" : "C:/Sitecore/HelloWorld/Website"
};
