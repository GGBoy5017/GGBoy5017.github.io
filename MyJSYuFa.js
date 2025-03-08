const  Add =(a,b,c,d)=>{
    return a+b+c+d;
}


//使用Add
console.log(Add(1,2,3,4));


const promise = new Promise((resolve, reject) => {
    if (Math.random() * 0.5) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
})

console.log(promise);



//Promise的三种状态
const PENDING_STATE = 'pending';
const FULFILLED_STATE = 'fulfilled';
const REJECTED_STATE = 'rejected';

//判断是否为函数
const isFunction = (fn) => {
    return typeof fn === 'function';
}

//判断是否为对象
const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null;
}
const isObject2 = (obj) => {
    return obj.prototype.toString().call(obj)==='[object Object]'; //更加严格
}

function takeScreenshot() {
            // 获取要截图的目标元素
            const element = document.getElementById('screenshot-target');
            // 使用 html2canvas 对目标元素进行截图
            html2canvas(element).then(canvas => {
                // 将 canvas 转换为 Base64 编码的图片数据
                const img = canvas.toDataURL('image/png');
                // 创建一个 <a> 元素用于下载图片
                const link = document.createElement('a');
                // 设置 <a> 元素的 href 属性为图片数据
                link.href = img;
                // 设置下载的文件名
                link.download = 'screenshot.png';
                // 模拟点击 <a> 元素，触发下载操作
                link.click();
            });
        }