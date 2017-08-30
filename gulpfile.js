'use strict';
require('dotenv').config();
const gulp 				= require('gulp');
const gutil 			= require('gulp-util');
const fs 				= require('fs');
const gulpLoadPlugins 	= require('gulp-load-plugins');
const vsource			= require('vinyl-source-stream');
const vbuffer 			= require('vinyl-buffer');
const spawn 			= require('child_process').spawn;
const chalk				= require('chalk');
const git 				= require('gulp-git');
const runSequence 		= require('run-sequence');

const $ = gulpLoadPlugins();
let envProd = false;

const imageminPngquant  	= require('imagemin-pngquant');
const imageminMozjpeg   	= require('imagemin-mozjpeg');

// Stylesheets
gulp.task('styles', (done) => {
	var paths = [
	];
	var out = gulp.src('src/styles/main.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sassGlob())
		.pipe($.sass({
			style: 'expanded',
			includePaths: paths .concat(require('node-neat').includePaths)
			.concat(require('node-bourbon').includePaths)
			.concat(require('node-normalize-scss').includePaths)
		}))
		.on('error', $.sass.logError)
		.on('error', function (e) {
			if (!envProd) {
				$.notify().write(e);
			}
		})
		.pipe($.autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}));

	if (envProd) {
		return out.pipe($.csso())
			// .pipe($.rev())
			.pipe(gulp.dest('src'))
			.pipe($.rev.manifest(dist + 'manifest.json', {
				merge: true,
				base: '',
			}))
			.pipe(gulp.dest(''));
	} else {
		return out.pipe($.sourcemaps.write())
			.pipe(gulp.dest('src'));
	}
});

// Images
gulp.task("images", function(cb) {
	return gulp.src('images/**/*', {
		base: "images"
	})
	.pipe($.cache(
		$.imagemin([
			imageminPngquant(),
			imageminMozjpeg(),
			$.imagemin.gifsicle(),
			$.imagemin.svgo({
				svgoPlugins: [{
					removeViewBox: true,
				},]
			,}),
		], {
			verbose: true,
		})
	))
	.pipe( gulp.dest( "src/img" ) );
});

gulp.task('watch', ['styles'], (done) => {
	gulp.watch([
		'src/**/*.scss'
	], ['styles']);

	gulp.watch([
		"src/**/*",
		"public/**/*"
	]).on( 'change', (file) => {
		const list = file.path.split('/');
		const fileName = list[list.length-1];

		let prefix = "";
		let suffix = "";

		if (process.env.TASK) {
			prefix = process.env.TASK + " - ";
		}

		if (process.env.DESCRIPTION) {
			suffix = ": " + process.env.DESCRIPTION;
		}

		const gitChange = prefix + fileName + suffix;
		gutil.log(gitChange + " changed");
		const gitAdd = spawn('./commit', [gitChange]);
		gitAdd.stdout.on('data', function (data) {
			gutil.log('commit: ', chalk.yellow(data.toString().slice(0, -1))); // Remove \n
		});
		gitAdd.stderr.on('data', function (data) {
			gutil.log('commit error: ', data.toString().slice(0, -1)); // Remove \n
		});
		runSequence('push');
	});
});

gulp.task('push', function () {
	git.push('origin', 'master', function (err) {
		if (err) throw err;
	});
});
