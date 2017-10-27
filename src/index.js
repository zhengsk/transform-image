import transformImage from './transform.js';

// const image = require('http://qn-us.fenglinghudong.com/editor-shoes/1/plate-02.png');
// const mask = require('http://qn-us.fenglinghudong.com/editor-shoes/1/mask-02.png');

window.transform = transformImage({
    imageSrc: 'http://qn-us.fenglinghudong.com/editor-shoes/3/plate-02.png',
    maskSrc: 'http://qn-us.fenglinghudong.com/editor-shoes/3/mask-03.png',
    points: [{"x":-88,"y":112},{"x":913,"y":73},{"x":820,"y":697},{"x":228,"y":830}], // 默认位置
    extend: 2, // 扩展三角形，处理缝隙问题
    hasDrag: true, // 开启拖拽∏
    hasDot: true, // 显示点
    hasRect: true, // 显示方格
    hasPic: true, // 显示图片
    count: 10, // 等分割数量
});

document.body.appendChild(transform.canvas);