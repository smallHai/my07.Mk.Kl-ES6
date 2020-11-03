//-使用gulp，处理ejs模版文件-//

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('views',()=>{
    return gulp.src(['browser/**/*.ejs'])
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch,livereload()))
})
