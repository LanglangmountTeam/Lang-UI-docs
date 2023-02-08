# 书写规范
::: tip
规范带有建议性，旨在协成团队风格一致、代码互通可读，避免被加入代码艺术大赏。
:::
## 使用语言

本次项目使用Vue3 + TypeScript，样式则使用scss。


## 格式化
2个空格。

## Vue

三部分的顺序：

- `<script>`
- `<template>`
- `<style>`



<br />

## TypeScript
`.ts`文件及`.vue`内`<script>`标签的内容，建议优先顺序为：
- `export * `语句
- `import`语句
    - `vue`的库，比如`import { computed } from "vue";`
    - 组件库
    - 本地依赖
    - 样式文件
