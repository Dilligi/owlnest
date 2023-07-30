var gulp          = require('gulp')
		sass          =  require('gulp-sass')(require('sass')),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify-es').default,
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		rsync         = require('gulp-rsync'),
		imageResize   = require('gulp-image-resize'),
		del           = require('del');

gulp.task('styles', function() {
    return gulp.src('assets/scss/main.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
    .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(gulp.dest('assets/build/css'))
});

// JS
gulp.task('scripts', function() {
    return gulp.src([
        'assets/js/common.js',
        'assets/js/scroll.js',
        ])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify({ output: { comments: false } }))
    .pipe(gulp.dest('assets/build/js'))
});

gulp.task('watch', function() {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/blocks/*.scss'], gulp.parallel('styles'));
    gulp.watch('assets/js/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));