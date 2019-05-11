module.exports = function () {
    $.gulp.task('img:dev', function() {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build', function() {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gp.tinypng('7iMOjqlBY8bL17MKOAVsznjNKYSDcOCo'))
        .pipe($.gulp.dest('build/static/img/'));
    });
}