配置文件：
jsconfig.json   //vscode javascript target
.vscode/        //vscode debug config
typings/        //vscode auto complete




参考：https://code.visualstudio.com/Docs/languages/javascript
配置 `jsconfig.json`


## 快捷键：
https://code.visualstudio.com/Docs/customization/keybindings
http://nshen.net/article/2015-11-20/vscode/

Node boot: `Ctrl + Shift + b`
终端：Ctrl+`


## 插件
- `ESLint` can auto fix
- `JavaScript (ES6) code snippets`
- `HTML Snippets`
- `Git History`
- `Visual Studio Code Settings Sync`
- `REST Client`



## debug electron

## typings
https://code.visualstudio.com/Docs/runtimes/nodejs#_intellisense-and-typings
`npm install -g typings`
`typings install dt~node --global`
`typings install dt~github-electron --global`

`typings install dt~express --global`


```
// 将设置放入此文件中以覆盖默认设置
{
    // Microsoft YaHei
    "editor.fontFamily": "Consolas, 'Courier New', 'Microsoft YaHei', monospace",

    // 一个制表符等于的空格数。
    "editor.tabSize": 4,
    // 按 "Tab" 时插入空格。
    "editor.insertSpaces": false,
    
    // "editor.renderControlCharacters": true,
    "editor.renderIndentGuides": true,

    // 默认行尾字符。
    "files.eol": "\r\n"
}
```