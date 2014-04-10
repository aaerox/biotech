module.exports = function(grunt) {
	grunt.config('coffee', {
		dist: {
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

	// If we're in production mode, set up uglify too
	var taskList = (grunt.config.get('config.production') === true) ? 
									['coffee', 'concat', 'uglify'] :
									['coffee', 'concat'];

	grunt.registerTask('task-coffee', 'Preprocess coffeescript files for the site.', taskList);
};