import transformImage from './transform.js';

const image = require('./img/template.png');
const mask = require('./img/shoes-mask-01.png');

window.transform = transformImage({
    imageSrc: image,
    maskSrc: mask,
    points: null, // 默认位置
    extend: 2, // 扩展三角形，处理缝隙问题
    hasDrag: true, // 开启拖拽
    hasDot: true, // 显示点
    hasRect: true, // 显示方格
    hasPic: true, // 显示图片
    count: 10, // 等分割数量
});

document.body.appendChild(transform.canvas);