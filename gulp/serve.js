var project = require('./_project.js')
var gulp    = require('gulp')
var serve   = require('gulp-live-server')

gulp.task('serve', function() {
  //1. serve with default settings
  // var server = gls.static(); //equals to gls.static('public', 3000);
  // server.start();

  //2. serve at custom port
  var server = serve.static(project.dest, 8008);
  server.start();

  //3. serve multi folders
  // var server = gls.static(['dist', '.tmp']);
  // server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  // gulp.watch(['static/**/*.css', 'static/**/*.html'], function (file) {
  //   server.notify.apply(server, [file]);
  // });
});


// gulp.task('serve', serve({
//   root: [project.dest],
//   port: 8008
// }))