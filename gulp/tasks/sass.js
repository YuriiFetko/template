module.exports = function () {
    $.gulp.task('sass', function() {
        return $.gulp.src('src/static/sass/main.sass')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({
            'include css':true
        }))
        .pipe($.gp.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on("error", $.gp.notify.onError({
            title: "Error running something"
          }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build/static/css/'))
        .pipe($.browserSync.reload({
            stream:true
        }));
    });
}