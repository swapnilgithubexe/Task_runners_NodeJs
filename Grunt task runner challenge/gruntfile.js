module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/css', // Use current working directory
          src: ['*.css', '!*.min.css'], // Minify only non-minified CSS files
          dest: 'public/minified',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/js', // Source JS directory
          src: ['*.js', '!*.min.js'], // Ignore already minified files
          dest: 'public/minified',
          ext: '.min.js'
        }]
      }
    }
  });

  // Load required npm plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task
  grunt.registerTask('default', ['cssmin', 'uglify']);
};
