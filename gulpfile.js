// uglify: https://github.com/mishoo/UglifyJS2/issues/448


var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('compress', function() {
    return gulp.src('app/try.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})

gulp.task('default', ['compress'])