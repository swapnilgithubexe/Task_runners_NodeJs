const gulp = require("gulp");
import imagemin from "gulp-imagemin";

gulp.task("default", () => {
  //define task
  return gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/images"))

});

// Set - ExecutionPolicy - Scope Process - ExecutionPolicy Bypass