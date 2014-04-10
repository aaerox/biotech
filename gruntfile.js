module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    config: grunt.file.readJSON('../assets/gruntconfig.json'),
    pkg: grunt.file.readJSON('./package.json'),
    buildTasks: []
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Load our utility tasks
  grunt.loadTasks('tasks/util');

  // Load per-task config from separate files.
  grunt.loadTasks('tasks');
  
  // Register our build and watch tasks
  grunt.registerTask('build', grunt.config('buildTasks'));
  grunt.registerTask('default', ['build', 'watch']);

  grunt.registerTask('config', function () { 
    console.log(grunt.config.get()); 
  });
};