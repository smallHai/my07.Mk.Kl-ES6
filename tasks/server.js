//-使用gulp，处理服务器端文件-//

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'
import args from './util/args';

gulp.task('server',(callBackFn)=>{
    if(!args.watch){
        return callBackFn();
    }else{
        var server = liveserver.new(['--harmony','server/bin/www']);
        server.start();

        gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
            server.notify.apply(server,[file]);
        });

        gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
            server.start.bind(server)();
        });
    }
})