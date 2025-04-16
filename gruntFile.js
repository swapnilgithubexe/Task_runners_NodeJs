module.exports = function (grunt) {

  //configure tasks

  grunt.initConfig({
    //specify tasks
    uglify: {
      target: {
        files: {
          "dest/js/main2.min.js": ["src/js/input1.js"]
          //for all js files use ["src/js/*.js"]
        }
      }
    }
  })
  //load libraries
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //setting up tasks
  grunt.registerTask("default", ['uglify']);
}