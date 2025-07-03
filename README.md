# Srawler Plugin

该项目旨在快速开发油猴脚本，提供额外的功能增强。

## 功能特点

- 美观的毛玻璃悬浮窗口
- 支持窗口最小化/展开
- 响应式动画过渡效果
- 自动适应页面布局

## 开发技术

- 前端框架：React + TypeScript
- 构建工具：Vite
- 样式方案：UnoCSS (原子化 CSS)
- 打包工具：Bun/pnpm

## 安装说明

### 开发环境配置

1. 克隆仓库：
```bash
git clone [repository-url]
cd srawler-plugin
```

2. 安装依赖：
```bash
# 使用 bun
bun install

# 或使用 pnpm
pnpm install
```

3. 开发模式：
```bash
# 使用 bun
bun dev

# 或使用 pnpm
pnpm dev
```

### 构建用户脚本

1. 构建项目：
```bash
# 使用 bun
bun run build

# 或使用 pnpm
pnpm build
```

2. 生成用户脚本：
```bash
./tampermonkey/run.sh
```
生成的用户脚本将位于项目根目录下的 `userscript.js`。

### 安装到浏览器

1. 安装 Tampermonkey 浏览器扩展
2. 打开 Tampermonkey 的管理面板
3. 创建新脚本
4. 将生成的 `userscript.js` 内容复制到编辑器中
5. 保存脚本

## 项目结构

```
srawler-plugin/
├── src/                # 源代码目录
│   ├── App.tsx        # 主应用组件
│   └── index.tsx      # 入口文件
├── tampermonkey/      # 用户脚本相关
│   ├── config.json    # 脚本配置
│   ├── template.js    # 脚本模板
│   └── run.sh         # 构建脚本
├── dist/              # 构建输出目录
├── index.html         # HTML 模板
├── tsconfig.json      # TypeScript 配置
├── vite.config.ts     # Vite 配置
└── unocss.config.ts   # UnoCSS 配置
```

## 开发指南

### 修改配置

编辑 `tampermonkey/config.json` 来更新用户脚本的基本信息：

```json
{
  "name": "xxx",
  "version": "0.1.0",
  "description": "xxx",
  "author": "You",
  "match": [
    "*"
  ]
}
```

### 构建流程

1. 开发时使用 `bun dev` 或 `pnpm dev` 进行实时预览
2. 完成开发后运行 `bun build` 或 `pnpm build` 构建项目
3. 运行 `./tampermonkey/run.sh` 生成最终的用户脚本
4. 将生成的 `userscript.js` 更新到 Tampermonkey 中

### 样式定制

- 窗口样式可在 `tampermonkey/template.js` 中修改
- React 组件样式使用 UnoCSS 进行原子化 CSS 开发
- 支持响应式设计和动画效果

## 注意事项

- 确保构建前已安装所有依赖
- 修改配置后需要重新构建用户脚本
- 建议定期检查小红书网站变化，及时更新匹配规则
- 开发时注意浏览器兼容性问题

## 许可证

[添加许可证信息]

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目。在提交 PR 前，请确保：

1. 代码符合项目规范
2. 更新相关文档
3. 测试功能正常

## 更新日志

### v0.1.0
- 初始版本
- 实现基本的悬浮窗口功能
- 添加毛玻璃效果
- 支持窗口最小化
