//-使用gulp，创建构建文件-//

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';


gulp.task('build',gulpSequence('clean','views','css','js',['browser','server']));
