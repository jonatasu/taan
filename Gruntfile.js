module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: "assets/css/stylesheets.map",
          sourceMapBasepath: "assets/css/"
        },
        files: {
          "assets/css/about.min.css": "assets/less/about.less", // destination file and source file
          "assets/css/agencies.min.css": "assets/less/agencies.less",
          "assets/css/contact.min.css": "assets/less/contact.less",
          "assets/css/events.min.css": "assets/less/events.less",
          "assets/css/home.min.css": "assets/less/home.less",
          "assets/css/resources.min.css": "assets/less/resources.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
