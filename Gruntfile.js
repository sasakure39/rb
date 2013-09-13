module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {},
    watch: {}
  });

  var pkg = grunt.file.readJSON('package.json');
  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', ['watch']);
};
