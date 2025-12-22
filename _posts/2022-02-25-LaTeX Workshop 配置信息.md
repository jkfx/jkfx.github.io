---
layout: post
title: LaTeX Workshop 配置信息
date: 2022-02-25 12:33
description:
tags:
categories:
---

使用 VS Code 编写 LaTeX 论文时，安装 LaTeX Workshop 插件可以实现非常多的功能，但是由于 LaTeX Workshop 默认配置的编译命令是 `latexmk` ，而在编写中文论文时通常需要使用 `xelatex` 命令来编译文件源代码，所以为了正常使用 LaTeX Workshop 编写中文论文，通常需要对 LaTeX Workshop 进行自定义修改。

以下是笔者根据官方文档自己修改的设置选项信息，每一项的设置上面都写好了中文注释，也为了日后笔者更方便的进行配置、修改。

> 关于 LaTeX Workshop 的配置官方文档信息，可以参考 [LaTeX Workshop GitHub Wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki)

本文给出 3 种编译方式：

- 使用 `xelatex` 命令编译两次

> 通常生成目录时，通常先编译一次生成目录所需的辅助文件，例如目录项等，然后编译第二遍结合辅助文件生成最终的 PDF

- 使用 `BibTeX` 参考文献工具时所需用到的编译命令
- 使用 `BibLaTeX` 参考文献所需用到的编译命令

```js
// ******** LaTeX Workshop 配置信息 ********
// 文件修改时不自动编译
// "never", "onSave", "onFileChange"
"latex-workshop.latex.autoBuild.run": "never",
// LaTeX Workshop 编译源代码文件的快捷键默认为：ctrl + alt + b
// 但是在有些情况下，ctrl + alt 快捷键被占用
// 将下面设置项改为 true 可以启动替代的快捷键
// ctrl + l / alt + letter
"latex-workshop.bind.altKeymap.enabled": false,
// 编译文件时选用哪种 recipes 方案
// recipes 的定义在下文
// "first" （默认）为定义在下文 recipes 中的第一项
// "lastUsed" 为上次使用运行的 recipe
"latex-workshop.latex.recipe.default": "lastUsed",
// 预览生产的 pdf 文件方式：在 vscode 窗口中预览
"latex-workshop.view.pdf.viewer": "tab",
// 设置在使用 LaTeX Workshop 编译后，自动清理辅助文件
// 也可以设置为 "never" 表示不自动清理辅助文件
// 设置 "onFailed" 为当编译失败时自动清理辅助文件
"latex-workshop.latex.autoClean.run": "onBuilt",
// 编译 LaTeX 时使用的工具（tool）顺序
// 工具（tool）需要自定义
"latex-workshop.latex.recipes": [
    // 没有参考文献的编译方式
    // 为了正确生成目录项，一般需要编译两次源代码
    {
        "name": "xelatex",
        "tools": [
            "xelatex",
            "xelatex"
        ]
    },
    // 使用 BibTeX 参考文献工具的编译方式
    {
        "name": "xelatex ➞ bibtex ➞ xelatex × 2",
        "tools": [
            "xelatex",
            "bibtex",
            "xelatex",
            "xelatex"
        ]
    },
    // 使用 BibLaTeX 参考文献工具的编译方式
    {
        "name": "xelatex ➞ biber ➞ xelatex × 2",
        "tools": [
            "xelatex",
            "biber",
            "xelatex",
            "xelatex"
        ]
    }
],
// 定义 recipes 中工具的命令以及参数
// 以下列出 LaTeX Workshop 定义好的占位符
// %DOC%             The root file full path without the extension
// %DOC_W32%         The root file full path without the extension with \ path separator on Windows
// %DOCFILE%         The root file name without the extension
// %DOC_EXT%         The root file full path with the extension
// %DOC_EXT_W32%     The root file full path with the extension with \ path separator on Windows
// %DOCFILE_EXT%     The root file name with the extension
// %DIR%             The root file directory
// %DIR_W32%         The root file directory with \ path separator on Windows
// %TMPDIR%             A temporary folder for storing ancillary files
// %OUTDIR%             The output directory configured in latex-workshop.latex.outDir
// %OUTDIR_W32%         The output directory configured in latex-workshop.latex.outDir with \ path separator on Windows
// %WORKSPACE_FOLDER% The current workspace path
// %RELATIVE_DIR%     The root file directory relative to the workspace folder
// %RELATIVE_DOC%     file root file path relative to the workspace folder
"latex-workshop.latex.tools": [
    {
        "name": "xelatex",
        "command": "xelatex",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
        ],
        "env": {}
    },
    {
        "name": "bibtex",
        "command": "bibtex",
        "args": [
            "%DOCFILE%"
        ],
        "env": {}
    },
    {
        "name": "biber",
        "command": "biber",
        "args": [
            "%DOCFILE%"
        ],
        "env": {}
    }
],
```

使用以上配置选项将上述代码拷贝到你的 VS Code 的 `json` 设置文件下即可。
