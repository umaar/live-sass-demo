var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	return gulp.src('styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
	var liveServer = require("live-server");

	var params = {
		open: false, // When false, it won't load your browser by default.
		ignorePattern: /.*\.scss/, // comma-separated string for paths to ignore
		file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
		wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
		logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
	};
	liveServer.start(params);

	gulp.watch('styles.scss', ['sass']);
});