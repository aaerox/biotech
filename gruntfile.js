module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    config: grunt.file.readJSON('../assets/gruntconfig.json'),
    pkg: grunt.file.readJSON('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('tasks');
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['task-styles', 'task-coffee', 'watch']);
  grunt.registerTask('config', function () { 
    console.log(grunt.config.get()); 
  });
};