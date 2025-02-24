# 开发流程

## 添加tailwindcss的变量适配暗色主题

```css
@theme {
  --color-sidebar-bg: 0 0% 98%;
}
```

## 修改element plus主题色

参考useElementPlusTheme，可以使用vueUse中的useColorMode和useCssVar

```javascript
const el = document.documentElement
// 获取 css 变量
getComputedStyle(el).getPropertyValue(`--el-color-primary`)
// 设置 css 变量
el.style.setProperty('--el-color-primary', 'red')
```
