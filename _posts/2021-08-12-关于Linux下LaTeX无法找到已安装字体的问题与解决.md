---
layout: post
title: 关于Linux下LaTeX无法找到已安装字体的问题与解决
date: 2021-08-12 22:47
description:
tags:
categories:
---

当我在Ubuntu系统下使用Latex时，在编译渲染时报出了`Font "xxx" does not contain requested`这种错误，其中`xxx`就是你可能想使用的字体格式。

然而我的Ubuntu系统已经正确安装了一些常用中文字体，然而在LaTeX编译渲染时还会报出错误。

由于笔者为了解决这个问题翻遍了国内外的网站、去查看了Texlive官方文档，耗费了许多时间与精力，都没能找到解决我的问题的信息，人们的时间往往都很珍贵，一般找不到解决方案过后，往往都不了了之，本着互联网极客精神（**开源精神**），在这里将笔者的解决过程记录并分享，希望人们可以将这种精神继承并传承下去。

> 我甚至在Texlive的官方安装文档中看到这么一段话：
>
> ![image](https://tva2.sinaimg.cn/large/006VTcCxly1gtee10q7x6j31f10cbqgx.jpg)
>
> 可以看到关乎于LaTeX排版中让人非常头疼的问题就是汉字的一些处理了，好在今天有非常多好用的宏包可以解决处理这个问题。

首先看一下笔者出现的问题：

![image](https://tva3.sinaimg.cn/large/006VTcCxly1gtedg611ydj60w00a9q7w02.jpg)

![image](https://tva4.sinaimg.cn/large/006VTcCxly1gtediiunx3j618z07d79402.jpg)

可以看到终端给出的错误提示是未能找到已安装的字体（_installed font not found_），有了这句话的提示，笔者想的可能是，在我的系统上已安装了的字体中，在LaTeX中未能正确地引用，查看代码中可以看到：

![image](https://tvax4.sinaimg.cn/large/006VTcCxly1gtedm8youxj30mt061jvl.jpg)

在这里设置字体格式的时候我们设置楷体对应的字体文件为`simkai`，我们可以查看我们的字体库中是否有`simkai.ttf`楷体的字体文件：

在Ubuntu存放字体的目录`/usr/share/fonts/`下可以使用`find`命令查找：

![image](https://tva1.sinaimg.cn/large/006VTcCxly1gtedq0ili0j61570aigqc02.jpg)

可以看到，笔者的系统中已经存放了`simkai.ttf`这个字体文件，为什么LaTeX还没有找到这个字体呢。

通过一番排查，原来是在Ubuntu中，对字体的使用并不仅仅是字体文件名，而是另一个别名。

我们可以使用`fc-list`来查看系统可用的字体列表，然后使用`grep`匹配`simkai.ttf`的字体文件，可以进一步查看字体的信息：

![image](https://tva1.sinaimg.cn/large/006VTcCxly1gtedsq4tgrj61580r9b2902.jpg)

原来，图中1号框中的名字只是字体文件名，而在系统应用中想要使用这个字体，我们需要指定2号框中的字体名，例如本图，我们想要使用楷体就需要指定`KaiTi`或`楷体`这个名字。

回到LaTeX代码中，将之前出现错误原因的`simkai`替换成`KaiTi`即可解决问题。

![image](https://tva4.sinaimg.cn/large/006VTcCxly1gtedwcpyd0j60no06dtd402.jpg)

![image](https://tvax3.sinaimg.cn/large/006VTcCxly1gteduycwvij60i102swf302.jpg)

为了进一步验证笔者的猜想，可以看到上图代码中，在`KaiTi`的下面还使用了`SimSun`宋体的使用，然而`SimSun`并不报错，这里笔者想可以继续查看`SimSun`的字体信息，其后面的别名应该包含`SimSun`。

![image](https://tva2.sinaimg.cn/large/006VTcCxly1gtedz60mqcj61540r77wh02.jpg)

所以笔者的猜想是正确的，所以在我们不同的系统、不同的字体文件中，每个人发生无法正确找到我们想要使用的字体的错误可能都不一样，因为我们使用的字体文件不同可能导致我们的在应用中使用字体中需要引用的名称的不同而不同，所以出现这种问题我们要具体问题具体分析，对症下药。
