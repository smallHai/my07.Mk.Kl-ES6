//-使用gulp，创建默认处理文件-//

import gulp from 'gulp';

// gulp v3版本写法
gulp.task('default',['build']);

// gulp v4版本写法
// gulp.task('default',gulp.series('build'));