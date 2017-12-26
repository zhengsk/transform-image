import transformImage from './transform.js';

// const image = require('./editor-shoes/5/plate-02.png');
// const mask = require('./editor-shoes/5/mask-01-02.png');

window.transform = transformImage({
    imageSrc: 'http://qn-us.fenglinghudong.com/editor-shoes/11/plate-01.png',
    maskSrc: 'http://qn-us.fenglinghudong.com/editor-shoes/11/1/mask-01.png',
    points: [{"x":97,"y":618},{"x":654,"y":373},{"x":831,"y":854},{"x":192,"y":947}], // 默认位置
    extend: 2, // 扩展三角形，处理缝隙问题
    hasDrag: true, // 开启拖拽∏
    hasDot: true, // 显示点
    hasRect: false, // 显示方格
    hasPic: true, // 显示图片
    count: 10, // 等分割数量
});

document.body.appendChild(transform.canvas);