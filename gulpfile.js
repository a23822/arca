var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');

// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['chrome > 0', 'ie > 0', 'firefox > 0']
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream({match:'**/*.css'}));
});

gulp.task('sprite', function() {
    var spriteData = gulp.src('sprites/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            imgPath: '../img/sprite.png'
        }));
    var imgStream = new Promise(function(resolve) {
        spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
        .on('end', resolve);
    });
    var cssStream = new Promise(function(resolve) {
        spriteData.css
            .pipe(gulp.dest('scss/'))
            .on('end', resolve);
    });

    return Promise.all([imgStream, cssStream]);
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);