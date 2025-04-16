const gulp = require("gulp");
import imagemin from "gulp-imagemin";

gulp.task("imagemin", () => {
  //define task
  gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/images"))

});