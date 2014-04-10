module.exports = function(grunt) {
	grunt.config('sass', {
		styles: {
			files: [
				{	//Compile our sass into the site css folder
					expand: true,
					cwd: '../<%= config.scss_folder %>',
					src: '**/*.scss',
					dest: '../<%= config.css_folder %>',
					ext: '.css'
				}
			]
		}
	});

	// Keep an eye on our sass folder
	grunt.config('watch.styles', {
		files: ['../<%= config.scss_folder %>/**/*.scss'],
		tasks: ['task-styles']
	});

	// Minify our css when production is enabled
	grunt.config('cssmin.styles', {
		files: [
			{	//Compile our sass into the site css folder
				expand: true,
				cwd: '../<%= config.css_folder %>',
				src: '**/*.css',
				dest: '../<%= config.css_folder %>',
				ext: '.min.css'
			}
		]
	});

	// Assign our tasks based on production mode
	var taskList = (grunt.config.get('config.production') === true) ? 
									['sass:styles', 'cssmin:styles'] :
									['sass:styles' ];

	grunt.registerTask('task-styles', 'Preprocess styles for site.', taskList);

	// Add our task to the build list
	var tasks = grunt.config('buildTasks');
	tasks.push('task-styles');
	grunt.config('buildTasks', tasks);
};