var gulp = require('gulp');
var takana = require('takana');

gulp.task('takana', function() {
  takana.run({
    path: __dirname,
    includePaths: []
  });
});
