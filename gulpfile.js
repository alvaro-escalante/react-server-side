'use strict'
// File paths
const paths = {
  templates: {
    src: 'app/',
    dest: 'app/static/'
  },
  images: {
    src:  'app/dev/img/',
    dest: 'app/static/img/'
  },
  scripts: {
    src:  'app/components/',
    dest: 'app/static/js/'
  },
  styles: {
    src:  'app/dev/sass/',
    dest: 'app/static/css/'
  },
  assets: {
    src:  'app/dev/assets/',
    dest: 'app/static/assets/'
  }
};

// Initialization
const gulp = require('gulp'),
      source = require('vinyl-source-stream'),
      friendlyFormatter = require("eslint-friendly-formatter"),
      $ = require('gulp-load-plugins')({
          pattern: '*',
          camelize: true
      }),
      prefix = { browsers: [
        'iOS >= 8',
        'Chrome >= 30',
        'Explorer >= 11',
        'Last 2 Edge Versions',
        'Firefox >= 25'
      ]},
      browserSync = $.browserSync.create(),
      reuseTab = require('browser-sync-reuse-tab')(browserSync),
      dev = !!$.util.env.dev,
      history = require('connect-history-api-fallback');
  

// CSS - SASS
gulp.task('styles',() => {
  const onError = function(err) {
    $.notify({
      title: 'CSS Error',
      subtitle: 'Syntax error in CSS!',
      message: err.message,
      sound: 'Beep'
    }).write(err);
    this.emit('end');
  };

  gulp.src(paths.styles.src + 'styles.sass')
    .pipe($.plumber({errorHandler: onError}))
    .pipe($.newer(paths.styles.dest))
    .pipe(dev ? $.sourcemaps.init() : $.util.noop())
    .pipe($.sass())
    .pipe($.concat('styles.min.css'))
    .pipe(dev ? $.util.noop() : $.autoprefixer(prefix) )
    .pipe(dev ? $.util.noop() : $.bytediff.start() )
    .pipe(dev ? $.util.noop() : $.cssmin())
    .pipe(dev ? $.util.noop() : $.bytediff.stop())
    .pipe(dev ? $.sourcemaps.write('./_maps') : $.util.noop())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream({match: '*.css'}));
});

// REACT.JS - Scripts 
gulp.task('scripts',() => {
  //Map errors
  const mapError = function(error) {
    return $.notify({
      title: 'Javascript Error',
      subtitle: 'Syntax error in script!',
      message: error,
      sound: 'Beep',
      icon: 'node_modules/gulp-notify/assets/gulp-error.png'
    }).write(error);
    this.emit('end');
  },
  // Completes the final file outputs
  bundle = browserify => {
    browserify
      .bundle()
      .on('error', mapError) // Map error reporting
      .pipe(source('main.jsx')) // Set source name
      .pipe($.vinylBuffer()) // Convert to gulp pipeline
      .pipe(dev ? $.util.noop() : $.bytediff.start())
      .pipe(dev ? $.util.noop() : $.uglify())
      .pipe(dev ? $.util.noop() : $.bytediff.stop())
      .pipe($.rename('main.min.js')) // Rename the output file
      .pipe(gulp.dest(paths.scripts.dest)) // Set the output folder
      .pipe($.duration(('Scripts compiled time'))) // Output time timing of the file creation
      .pipe(browserSync.stream()); // Reload the view in the browser
  },
  browserify = $.browserify(paths.templates.src + 'main.jsx') // Browserify
    .plugin($.watchify) 
    .transform($.babelify);
  
  bundle(browserify); // Run the bundle the first time (required for Watchify to kick in)
  browserify.on('update',() => bundle(browserify)) // Re-run bundle on source updates
});



// Images
gulp.task('images',() => {
  gulp.src(paths.images.src + '**/*',{base: paths.images.src})
    .pipe($.plumber(function(error) {
        $.util.log($.util.colors.red('Error (' + error.plugin + '): ' + error.message));
        this.emit('end');
    }))
    .pipe($.newer(paths.images.dest))
    .pipe(dev ? 
      $.util.noop() : 
      $.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.images.dest))
});

// Assets
gulp.task('assets',() => {
  gulp.src(paths.assets.src + '**/*') 
    .pipe($.newer(paths.assets.dest))
    .pipe(gulp.dest(paths.assets.dest));
});

// Minify React library for production
gulp.task('prod-environment', () => process.env.NODE_ENV = 'production');

// Clear Cache
gulp.task('clear',() => $.cache.clearAll());

// Clean destination dir and clear cache
gulp.task('clean', ['clear'], (done) => {
  $.del.sync([paths.templates.dest + '*']);
  done();
});

// BrowserSync 
gulp.task('browser-sync', ['scripts'], () => {
  browserSync.init(paths.styles.dest + '*.css', {
    proxy: "localhost:3000",
    middleware: [
      history()
    ],
    notify: false, // Will not show notify banner on reload or injected
    open: false, // Will not open a browser window automatically
    online: false // Will not attempt to determine your network status
    
  }, reuseTab);
  // Watchers
  gulp.watch(paths.styles.src + '**/*.sass', ['styles']);
  gulp.watch(paths.templates.src + '**/*.html', ['html']);
  gulp.watch(paths.images.src + '**/*', ['images']).on('change', browserSync.reload);
  gulp.watch(paths.assets.src + '**/*', ['assets']).on('change', browserSync.reload);
});

// Default development version task 
gulp.task('default', ['clean', 'styles', 'images', 'assets'], () => {
  gulp.start('browser-sync');
});

// Production build useage gulp pro --dev
gulp.task('pro', ['prod-environment', 'clean', 'styles', 'images', 'assets'], () => {
  gulp.start('browser-sync');
});