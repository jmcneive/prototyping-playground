var gulp = require('gulp');
var takana = require('takana');
var webserver = require('gulp-webserver');

gulp.task('takana', function() {
  takana.run({
    path: __dirname,
    includePaths: []
  });
});

gulp.task('webserver', function() {
  return gulp.src('app')
    .pipe(webserver({
      livereload: {
        enable: true,
        port: 35729,
        filter: function (filename) {
          if (filename.match(/^(.*\.(?!(htm|html)$))?[^.]*$/igm)) {
            return true;
          } else {
            return false;
          }
        }
      }
    }));
});

gulp.task('default', function() {
  gulp.start('webserver', 'takana');
});
