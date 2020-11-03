//-使用gulp，处理浏览器端文件-//

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulputil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(callBackFn)=>{
    if(!args.watch){
        return callBackFn();
    }else{
        gulp.watch('browser/**/*.js',['js']);
        gulp.watch('browser/**/*.ejs',['views']);
        gulp.watch('browser/**/*.css',['css']);
        
    }
})