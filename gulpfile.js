var gulp = require('gulp');
var takana = require('takana');
var webserver = require('gulp-webserver');
var gulpFilter = require('gulp-filter');

gulp.task('takana', function() {
  takana.run({
    path: __dirname,
    includePaths: []
  });
});

gulp.task('webserver', function() {
  var htmlFilter = gulpFilter('**/*.html');

  return gulp.src('app')
    .pipe(webserver({
      // livereload: true
      livereload: {
        enable: true,
        filter: function (filename) {
          return true;
          if (filename.match(/node_modules/)) {
            return false;
          } else {
            return true;
          }
        }
    }));
});

gulp.task('default', function() {
  gulp.start('webserver', 'takana');
});
