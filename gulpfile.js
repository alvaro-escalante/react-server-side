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
    src:  'app/dev/scss/',
    dest: 'app/static/css/'
  },
  assets: {
    src:  'app/dev/assets/',
    dest: 'app/static/assets/'
  }
},

// Initialization
gulp = require('gulp'),
source = require('vinyl-source-stream'),
formatter = require('eslint-friendly-formatter'),
$ = require('gulp-load-plugins')({ pattern: '*', camelize: true }),
browserSync = $.browserSync.create(),
dev = !!$.util.env.dev,
history = require('connect-history-api-fallback'),

// Styles SCSS to CSS
Styles = () => {
  // Notification in the terminal on error
  function onError(err) {
    $.notify({
      title: 'CSS Error',
      subtitle: 'Syntax error on ' + err.relativePath.split('/')[3],
      message: '📍 LINE: ' + err.line + ' - See terminal'
    }).write(err)
    let report = 
      $.util.colors.white('\n📍  CSS Error') +
      $.util.colors.red('\n🔥  File: ') +
      $.util.colors.yellow(err.relativePath.split('/')[3]) +
      $.util.colors.red('\n🔥  Line: ') +
      $.util.colors.yellow(err.line) +
      $.util.colors.red('\n🔥  Message: ') +
      $.util.colors.yellow(err.messageOriginal) + '\n'
    console.log(report)
    this.emit('end')
  }
  return gulp.src(paths.styles.src + 'styles.scss')
    .pipe($.plumber({errorHandler: onError})) // Process error
    .pipe($.newer(paths.styles.dest)) // Rewrite destination dist
    .pipe(dev ? $.sourcemaps.init() : $.util.noop()) // Enable sourcemaps
    .pipe($.sass()) // Process Sass to produce css
    .pipe($.concat('styles.min.css')) // Concat all scss into one css file
    .pipe(dev ? $.util.noop() : $.autoprefixer() ) // Process vendor prefixes
    .pipe(dev ? $.util.noop() : $.bytediff.start()) // Compare file sizes before min
    .pipe(dev ? $.util.noop() : $.cssmin()) // Compress css
    .pipe(dev ? $.util.noop() : $.bytediff.stop()) // Compare file sizes after min
    .pipe(dev ? $.sourcemaps.write('./_maps') : $.util.noop()) // Process map file
    .pipe(gulp.dest(paths.styles.dest)) // Deliver to dist
    .pipe(browserSync.stream({ stream: true })) // Stream browser to reflec changes
},

// Scripts ES6 Babel to ES5
Scripts = build => {
  /// Minify React library for production
  if (build === 'build')
    process.env.NODE_ENV = 'production'
  // Map errors
  const mapError = function(error) {
    $.notify({
      title: 'Javascript Error',
      subtitle: 'Syntax error in script!',
      message: 'Error in JavaScript - See terminal',
      icon: 'node_modules/gulp-notify/assets/gulp-error.png'
    }).write(error)
    this.emit('end')
  },
  // Options
  opts = {
    entries: `${paths.templates.src}main.jsx`,
    extensions: ['.js', '.jsx'],
    cache: {}, // <---- here for optimization 
    packageCache: {}, // <----  here
    debug: dev // <----  and here
  },
  //Transform options
  eslit = {
    'ecmaFeatures': { 'jsx': true },
    'parserOptions': {'ecmaFeatures': { 'jsx': true }, 'ecmaVersion': 7, 'sourceType': 'module' },
    'globals': ['react', 'document'],
    'parser': 'babel-eslint',
    'rules': { 
      'quotes': ["error", "single", { avoidEscape: true, allowTemplateLiterals: true}],
      'react/jsx-no-undef': 1,
    },
    'plugins': ['react']
  },
  babel = { 'sourceMaps': dev }
  let transform = mode => mode.transform($.eslintify, eslit).transform($.babelify, babel)
  const built = transform($.browserify(opts)), watch = transform($.watchify($.browserify(opts))),

  bundle = type => type
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe($.vinylSourceStream('main.jsx')) // Set source name
    .pipe($.vinylBuffer()) // Convert to gulp pipeline
    .pipe(dev ? $.util.noop() : $.bytediff.start())
    .pipe(dev ? $.util.noop() : $.uglify())
    .pipe(dev ? $.util.noop() : $.bytediff.stop())
    .pipe($.rename('main.min.js')) // Rename the output file
    .pipe(gulp.dest(paths.scripts.dest)) // Set the output folder
    .pipe(browserSync.stream()) // Reload the view in the browser

  watch.on('update', bundle.bind(null, watch)) // on any dep update, runs the bundler

  return build === 'build' ? bundle(built) : bundle(watch)
},

// Images
Images = () => {
  return gulp.src(`${paths.images.src}**/*`,{base: paths.images.src})
    .pipe($.plumber(function(error) {
      $.util.log($.util.colors.red(`Error (${error.plugin}):  ${error.message}`))
      this.emit('end')
    }))
    .pipe($.newer(paths.images.dest))
    .pipe(dev ? $.util.noop() : $.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.images.dest))
},

// Assets
Assets = () => {
  return gulp.src(`${paths.assets.src}**/*`) 
    .pipe($.newer(paths.assets.dest))
    .pipe(gulp.dest(paths.assets.dest))
},

// Clear destination dir
Clear = done => {
  $.del.sync('app/static')
  done()
},

// BrowserSync 
Browsersync = () => {
   browserSync.init({
    proxy: "localhost:3000",
    middleware: [ history() ],
    // host: 'localhost',
    // https: {
    //   key: "/usr/local/etc/nginx/ssl/localhost.key",
    //   cert: "/usr/local/etc/nginx/ssl/localhost.crt",
    // }, 
    // ui: false,
    notify: true, // Will not show notify banner on reload or injected
    online: false, // Will not attempt to determine your network status
    open: false
  })

  // gulp.watch('src/**/*.html', gulp.series(Html)).on('change', browserSync.reload)
  gulp.watch(`${paths.templates.src}**/*.scss`, gulp.series(Styles))
  gulp.watch(`${paths.images.src}**/*`, gulp.series(Images)).on('change', browserSync.reload)
  gulp.watch(`${paths.assets.src}**/*`, gulp.series(Assets)).on('change', browserSync.reload)
},

series = [Clear, Styles, Images, Assets]

// Initialise tasks
gulp.task('default', gulp.series(series, gulp.parallel(Scripts, Browsersync)))
gulp.task('built', gulp.series(series, Scripts.bind(null, 'build')))
