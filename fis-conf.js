
fis.set('project.ignore', ['node_modules/**', 'output/**','less/**', '.git/**', 'fis-conf.js']); // set 为覆盖不是叠加

// release 目录设置
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: 'output/'
    })
})

fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
});
