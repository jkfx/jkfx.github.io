---
layout: post
title: 批量下载YouTube播放列表（playlist）视频、字幕
date: 2021-07-21 15:30
description:
tags:
categories:
---

## 所需工具

- [python](https://www.python.org/downloads/)
- [youtube-dl](https://github.com/ytdl-org/youtube-dl/releases)
- [FFmpeg](http://ffmpeg.org/download.html)
- _Scientific上网_

其实可以直接使用*youtube-dl*执行文件直接下载，若我们需要对多个*YouTube*播放列表进行批量下载，便可利用*python*进行批处理，其中本文实现的功能就是对多个*YouTube*播放列表都创建一个对应的同名文件夹，然后将视频、字幕文件全部下载到一起。

其中*FFmpeg*是*youtube-dl*用来合并视音频文件用的，虽然*YouTube*上视频的格式有*MP4*的格式，不需要对视频、音频文件进行合并，如果你需要下载*2K*、*4K*的高清晰度的视频文件，一般都是采用*[webm](https://baike.baidu.com/item/WebM/2455966?fr=aladdin)*的格式将视频、音频文件分开。尽管如此，*youtube-dl*也已经为我们造好了轮子，合并视音频文件的步骤无需我们干扰，只需要将其所用的工具添加到系统的**环境变量**。

**再次说明**，你需要将下载下来的*youtube-dl*的可执行文件，以及*FFmpeg*的**_bin_**目录都添加到系统的**环境变量**中。

## 实现代码

首先创建python的字典，其中*key*是播放列表的名称，也是将要创建文件夹的名称，*value*是播放列表（playlist）对应的YouTube链接。

```python
import os

m = {
    "key(播放列表的名称，也即创建文件夹的名称)": "YouTube播放列表链接"
}
```

这里以麻省理工公开课[MIT 6.S191](http://introtodeeplearning.com/)为例，打开对应课程的YouTube播放列表。

![image](//tva1.sinaimg.cn/large/006VTcCxgy1gsokx7w77oj31z2164e81.jpg)

将对应播放列表的名称和链接放入python字典中。

然后直接遍历此字典的*key*和*value*使用*os*库的*system*方法调用*youtube-dl*命令对视音频进行下载。

```python
for (k, v) in m.items():
    # 创建同名文件夹
    os.mkdir(k)
    # 进入到刚刚创建的文件夹中
    os.chdir(k)
    # 调用 youtube-dl 命令对视频链接进行下载
    # 本条命令下载的字幕是英文
    os.system('youtube-dl --write-sub --sub-lang en -f "bestvideo+bestaudio" -o "%(title)s.%(ext)s" ' + v)
    # 如果需要下载自动翻译的中文字幕，便需要执行下一行
    os.system('youtube-dl --write-auto-sub --sub-lang zh-Hans --skip-download -o "%(title)s.%(ext)s" ' + v)
    # 返回到上一级目录
    os.chdir("../")
```

> 即使*[youtube-dl](https://github.com/ytdl-org/youtube-dl/blob/master/README.md)*的*GitHub*上已经有非常详细的命令参数的说明，这里还是简单地说明一下。
>
> 语法格式大体为：youtube-dl [OPTIONS] URL [URL...]
>
> 本文所用到的选项有：
>
> - _--write-sub_ 下载视频对应的字幕文件
> - _--sub-lang_ 指定下载字幕文件的语言
>   - _en_ 英语
>   - _zh-Hans_ 中文简体
> - _--write-auto-sub_ 当原视频文件没有带中文简体的字幕时，需要使用本参数下载*自动翻译*的字幕文件
> - _-f_ 指定视频格式
>   - 这里的*bestvideo+bestaudio*的意思是下载视频清晰度最好的视频文件和音频质量最好的音频文件并且将它们合并
> - _-o_ 指定下载的文件的名称
>   - _%(title)s_ 表明视频文件的标题名
>   - _%(ext)s_ 下载文件的扩展格式
>   - _%(autonumber)s_ 如果你想要对每个下载文件名称前面加上一个序号，便使用这个参数
> - _--skip-download_ 跳过视频文件仅下载字幕文件

## 完整代码

```python
import os

m = {
    "MIT 6.046J Design and Analysis of Algorithms, Spring 2015":"https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp",
    "MIT 6.042J Mathematics for Computer Science, Fall 2010": "https://www.youtube.com/playlist?list=PLB7540DEDD482705B",
    "MIT 18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning, Spring 2018":"https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k",
    "MIT 18.02 Multivariable Calculus, Fall 2007":"https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38",
    "MIT 18.01 Single Variable Calculus, Fall 2006":"https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1"
}

for (k, v) in m.items():
    os.mkdir(k)
    os.chdir(k)
    os.system('youtube-dl --write-sub --sub-lang en -f "bestvideo+bestaudio" -o "%(title)s.%(ext)s" ' + v)
    os.system('youtube-dl --write-auto-sub --sub-lang zh-Hans --skip-download -o "%(title)s.%(ext)s" ' + v)
    os.chdir("../")
```

将代码中字典变量的*key*和*value*替换成你需要的下载链接，将其保存到`.py`文件格式后，执行`python 文件名.py`便可进行下载。

## 效果展示

如果你的梯子网速给力的话，下载速度还是非常可观的。

![image](//tvax2.sinaimg.cn/large/006VTcCxgy1gsolqbnjbzj31ta0zhgwg.jpg)

![image](//tva3.sinaimg.cn/large/006VTcCxgy1gsolomow99j31z4168kjl.jpg)
