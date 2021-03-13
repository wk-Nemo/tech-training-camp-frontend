# Markdown编辑器
本项目实现一个所见即得得Markdown编辑器

## 1.技术实现
- vue-cli进行项目初始话和管理
- Babel编译、webpack打包
- vue进行项目开发
- 语法规范：ESLint语法检查、样式使用scss
- Nginx部署上线
- 服务器端，Node.js实现服务器存储文档

## 2.使用方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## 3.需求分析
 1. UI设计，模仿掘金网站（√）
 2. 编辑功能的实现
 （1）使用marked完成初步功能（√）
 （2）自己手写一个编译器
 3. 按钮的快捷设计实现
 4. 项目部署上线
 5. 保存到服务端的实现
 6. 共享文档，协同工作
