module.exports = function(grunt) {

	// Validate our configuration
	if (!verifyConfig(grunt))
		return;

	grunt.config('coffee', {
		coffee: {
			options: {
				bare: false,
				sourceMap: false
			},
			files: [
				{	//Compile our coffeescript into the site js folder
					expand: true,
					cwd: '../<%= config.coffee_folder %>',
					src: '**/*.coffee',
					dest: '.tmp/js/',
					ext: '.js'
				}
			]
		}
	});

	// Concatenate our temporary javascript files into the main app js file
	grunt.config('concat.coffee', {
		src: '.tmp/js/**/*.js',
		dest: '../<%= config.js_folder %>/<%= config.coffee_appfile %>.js'
	});

	// Uglify our appfile when production is enabled
	grunt.config('uglify.coffee', {
		files: {
			'../<%= config.js_folder %>/<%= config.coffee_appfile %>.min.js': '../<%= config.js_folder %>/<%= config.coffee_appfile %>.js'
		}
	});

	// Keep an eye on our coffeescript folder
	grunt.config('watch.coffee', {
		files: ['../<%= config.coffee_folder %>/**/*.coffee'],
		tasks: ['task-coffee']
	});

	// Assign our tasks based on production mode
	var taskList = (grunt.config.get('config.production') === true) ? 
									['coffee:coffee', 'concat:coffee', 'uglify:coffee'] :
									['coffee:coffee', 'concat:coffee'];

	grunt.registerTask('task-coffee', 'Preprocess coffeescript files for the site.', taskList);

	// Add our task to the build list
	var tasks = grunt.config('buildTasks');
	tasks.push('task-coffee');
	grunt.config('buildTasks', tasks);
};


function verifyConfig(grunt) {
	// Do we have a coffee folder assigned?
	var coffeeFolder = grunt.config('config.coffee_folder');
	if (coffeeFolder === undefined)
		return false;

	// Make sure it's valid
	var fs = require('fs');
	if (	typeof(coffeeFolder) !== "string" ||
				coffeeFolder === "" ||
				!fs.existsSync('../' + coffeeFolder)) 
	{
		grunt.fail.warn("Invalid 'coffee_folder' path given. Please specific a valid path, or remove the option to " +
										"avoid compiling any coffeescript.");
		return false;
	}

	// Be sure the js folder is equally valid
	var jsFolder = grunt.config('config.js_folder');
	if (	typeof(jsFolder) !== "string" ||
				jsFolder === "" ||
				!fs.existsSync('../' + jsFolder)) 
	{
		grunt.fail.warn("No 'js_folder' config option provided. Please specific a valid path, or " +
										"disable coffeescript by removing the 'coffee_folder' setting.");
		return false;
	}

	// Be sure we have been given an appfile name
	var coffeeAppFile = grunt.config('config.coffee_appfile');
	if (coffeeAppFile === "" || typeof(coffeeAppFile) !== "string") {
		grunt.fail.warn("No 'coffee_appfile' config option provided. Please specific a valid name for the " +
										"compiled javascript file, or disable coffeescript by removing the 'coffee_folder' setting.");
		return false;
	}

	return true;
}