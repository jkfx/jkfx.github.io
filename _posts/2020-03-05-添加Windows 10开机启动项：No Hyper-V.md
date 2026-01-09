---
layout: post
title: 添加Windows 10开机启动项：No Hyper-V
date: 2020-03-05 21:59
---

在Windows 10 1903版本加入了一项沙盒功能，1903版本以上的系统可以在**控制面板-程序和功能-启用或关闭Windows功能**中勾选**Windows 沙盒选项**，根据操作重启后即可打开沙盒功能。

> Windows Sandbox介绍
> Windows Sandbox这项新功能允许用户在隔离环境下测试和运行各种应用程序。Sandbox本质上是一个轻量级虚拟机，目前已经在Windows 10 May 2019（Version 1903）功能更新中上线，可以在隔离环境中运行不受信任的应用程序，而且不会对设备造成长期影响。

说白了沙盒就是一款Windows系统自带的虚拟机，但是笔者在打开了沙盒功能后，在安装VMWare Workstation虚拟机后，发生VMWare Workstation虚拟机不能正常工作，上网上查了查发现是VMWare Workstation和沙盒冲突，想正常使用VMWare Workstation虚拟机就得关上Hyper-V功能，关上Hyper-V后沙盒就不能正常工作了。有没有方法可以使鱼和熊掌兼得，发现可以在Windows系统开机时增加一个选项，以关闭Hyper-V服务的方式开机。如果需要使用沙盒时就选择正常的方式开机，如果需要使用VMWare Workstation就选择No Hyper-V方式开机。

## 操作步骤

1. 以启动管理员身份运行CMD或PowerShell。
2. 输入命令`bcdedit /copy {current} /d "Windows10 No Hyper-V"`；输入回车后会出现一串序列号，将序列号复制。
3. 输入命令`bcdedit /set {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX} hypervisorlaunchtype OFF`将第2步复制的序列替换成该步骤的XXX。

重启后，就会发现开机时有两个启动方式，一个是原来的正常的启动方式，一个是No Hyper-V服务的启动方式；也可以进一步修改默认值和等待时间等。
