// ==UserScript==
// @name         xx
// @version      xx
// @description  xx
// @author       xx
// @match        xx
// ==/UserScript==


// 添加一个window.onload回调
window.onload = () => {
  // 创建根元素
  const root = document.createElement("div");
  root.id = "root";
  root.style.position = "fixed"; // 固定定位
  root.style.bottom = "64px";    // 距离底部 20px
  root.style.right = "64px";     // 距离右侧 20px
  root.style.width = "600px";    // 窗口宽度
  root.style.height = "400px";   // 窗口高度
  root.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // 半透明背景
  root.style.backdropFilter = "blur(10px)"; // 毛玻璃效果
  root.style.webkitBackdropFilter = "blur(10px)"; // Safari 兼容
  root.style.padding = "2px";   // 内边距
  root.style.borderRadius = "8px"; // 圆角
  root.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // 轻微阴影增加层次感
  root.style.zIndex = 999999;
  root.style.transition = "all 0.3s ease"; // 添加过渡效果

  // 创建最小化按钮
  const minimizeButton = document.createElement("button");
  minimizeButton.innerText = "hide";
  minimizeButton.style.position = "absolute";
  minimizeButton.style.top = "10px";
  minimizeButton.style.right = "10px";
  minimizeButton.style.background = "none";
  minimizeButton.style.border = "none";
  minimizeButton.style.cursor = "pointer";
  minimizeButton.style.fontSize = "14px";
  minimizeButton.style.zIndex = 1000000;

  // 将最小化按钮添加到根元素中
  root.appendChild(minimizeButton);

  // 将根元素添加到页面中
  document.body.appendChild(root);

  // 标记窗口是否处于最小化状态
  let isMinimized = false;

  // 最小化按钮点击事件
  minimizeButton.addEventListener("click", () => {
    if (isMinimized) {
      // 如果窗口已经最小化，则恢复窗口
      root.style.width = "600px";
      root.style.height = "400px";
      root.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      minimizeButton.innerText = "hide";

    } else {
      // 如果窗口未最小化，则最小化窗口
      root.style.width = "58px";
      root.style.height = "36px";
      root.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      minimizeButton.innerText = "show";

    }
    isMinimized = !isMinimized; // 切换最小化状态
  });
  run();
};


function run() {
  // dist 目录下的index.js 内容


}
