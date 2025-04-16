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
    },
    cssmin: {
      target: {
        files: [{
          cwd: "src/css",
          src: ["*.css", "!*.min.css"],
          dest: "dest.css",
          ext: ".min.css"
        }]
      }
    }
  })
  //load libraries
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  //setting up tasks
  grunt.registerTask("default", ['uglify']);
  grunt.registerTask("default", ['cssmin']);
}