//-使用gulp，处理css文件-//

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src(['browser/css/*.css'])
        .pipe(gulp.dest('server/public/css'))
})