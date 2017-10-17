import transformImage from './transform.js';

const image = require('./img/template-02.png');
const mask = require('./img/mask-02.png');

window.transform = transformImage({
    imageSrc: image,
    maskSrc: mask,
    points: [
        { x: 0, y: 0 },
        { x: 892, y: 92 },
        { x: 863, y: 977 },
        { x: 26, y: 862 },
    ], // 默认位置
    extend: 2, // 扩展三角形，处理缝隙问题
    hasDrag: true, // 开启拖拽∏
    hasDot: true, // 显示点
    hasRect: true, // 显示方格
    hasPic: true, // 显示图片
    count: 10, // 等分割数量
});

document.body.appendChild(transform.canvas);