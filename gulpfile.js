var gulp = require('gulp'); 
var react = require('gulp-react');

gulp.task('react', function(){
  return gulp.src('public/javascripts/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('tmp/js/'));
});