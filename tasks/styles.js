module.exports = function(grunt) {
	grunt.config('sass', {
		dist: {
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

	grunt.registerTask('task-styles',
		'Preprocess styles for site.',
		['sass']);
};