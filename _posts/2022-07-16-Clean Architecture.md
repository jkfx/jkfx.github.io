---
layout: post
title: Clean Architecture
date: 2022-07-16 19:41
description: 
tags: 
categories: 
---

> by Robert C. Martin (Uncle Bob)  
> 13 August 2012  
> <https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html>

![image](https://tva2.sinaimg.cn/large/006VTcCxly1h48ouqtk4uj30lg0frjxl.jpg)

在过去的几十年间，我们已经看到了一系列的关于系统架构的想法。其中包括：

- [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) （也叫 *Ports and Adapters*）在 [Growing Object Oriented Software](http://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627) 一书中有着描述
- [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/)
- [Screaming Architecture](http://blog.cleancoders.com/2011-09-30-Screaming-Architecture)
- [DCI](http://www.amazon.com/Lean-Architecture-Agile-Software-Development/dp/0470684208/)
- [BCE](http://www.amazon.com/Object-Oriented-Software-Engineering-Approach/dp/0201544350) 在 *Object Oriented Software Engineering: A Use-Case Driven Approach* 一书

尽管这些架构在细节上都有着不同之处，它们都是非常相似的。它们都有一个目标，那就是 **关注点分离**（*the separation of concerns*）。它们通过将软件进行分层实现了这一分离。每一个架构都至少有一层是关于业务规则的，并且另一个是关于接口的处理。

这些架构都产生了这样的系统：

1. 独立于框架。这些架构都没有依赖于已存在功能丰富的一些库。这使得你可以使用这些框架作为工具，而不是将你的系统塞进到它们的有限的约束中。
2. 可测试性。在没有UI 、数据库、Web 服务器以及其它任何外部元素的情况下,业务逻辑可以被测试。
3. 独立于 UI。UI 可以被轻易改变，并且无需影响系统中其它部分。例如，Web UI 可以被替换为终端 UI ，无需改变任何业务规则。
4. 独立于数据库。你可以使用 Mongo，BigTable，CouchDB或其它数据库换掉 Oracle 或 SQL Server。你的业务逻辑不受限在数据库中。
5. 独立于任何外部机构。事实上，你的业务逻辑根本不了解外部世界。

本篇文章顶部的图片是整合这些架构到一个可行的想法的一个尝试。

## The Dependency Rule

> 依赖规则

同心圆代表了软件的不同范围。通常来讲，你走的越远，软件就变成了更高的层次。外面的圆是机制（*mechanisms*），内部的圆是政策（*policies*）。

使得架构运作凌驾一切的规则就是 **依赖规则**（*The Dependency Rule*）。这一规则说明了：源码中的依赖仅可以指向内部。内部的圆中不允许知道关于外部圆中的任何事物。尤其是一些声明在外部圆中的名称决不允许在内部圆中提及。其中包括：函数、类、变量或其它任何命名的软件实体。

出于同样的原因，用在外部圆中的数据格式也不应该被用在内部圆中，尤其是当这些格式是被框架在外部圆中生成出来的时候。我们不想在外部圆中的任何事物影响到内部圆。

### Entities

> 实体

实体封装了企业范围的业务规则。一个实体可以是带有方法的对象，或者也可以是数据结构和函数的集合。无关紧要的是只要实体可以被企业中许多不同的应用使用即可。

如果你并没有一个企业，并且只是单纯的想写一个单一的应用，那么这些实体都是应用的业务对象。它们封装了最通用并且高阶的规则。当外部某些事物改变时，它们是最不可能被改变的。例如，你不会期待这些对象被外部页面导航栏或者安全性的改变而受到影响。任何特定的应用的操作性的改变都不会影响到实体层。

## Use Cases

> 用例

软件中这一层包含了特定的应用业务规则。它封装并实现了系统中所有的用例。这些用例协调了进出实体的数据流，并且指导这些实体到使用它们企业范围业务规则用来实现用例的目标。

我们并不期待对这一层的改变影响实体。我们也不期待这一层被外部的改变而受到影响，例如数据库、UI或其它任何常见的普遍框架。这一层与此类问题隔离。

但是，我们确实期待应用的操作改变将会影响用例层，并且从而因影响这一层中的软件。如果用例层改变的细节，那么在这一层的某些代码将肯定收到影响。

## Interface Adapters

> 接口适配器

在这一层的软件是一个适配器（*adapters*）的集合，适配器用来将数据从最方便用于用例层和实体层的格式，转换到最方便用于某些外部机构例如数据库或Web的格式。例如，正是这一层整个包含了GUI中的MVC架构。Presenters、VIews和Controllers全部属于这层。模型可只是从controllers传入到用例层的数据结构，并且之后从用例层返回到presenters和views。

相似地是，在这一层，数据从最方便用于实体层和用例层的形式，被转换到最方便用于任何一个正在使用的持久框架的形式。这一层的圆中的代码不应该知道任何关于数据库的一切事物。如果数据库是一个SQL数据库，那么所有的SQL应该被限制到这一层，并且尤其是必须限制在这一层与数据库交互的部分。

在这一层中还有任何其他适配器，用于将数据从某种外部形式（例如外部服务）转换为用例和实体使用的内部形式。

## Frameworks and Drivers

> 框架和驱动

最外层通常是由框架和工具的组成，例如数据库和 Web 框架等等。通常来说，你不需要在这一层编写太多的代码，而是编写与下一圆圈交互的胶水语言。

这一层是所有细节（*details*）的所在。Web 是一个细节。数据库也是一个细节。我们保持这些事物放在外部，它们不会造成任何破坏。

## Only Four Circles?

> 仅有四个圆？

No，这些圆圈都是示意图。你也许会发现你需要多于这四个。没有规则说你必须总是有正好这四个圆。但是，**依赖规则**（*The Dependency Rule*）总是适用。代码中的依赖总是指向内部。随着你往内部的移动，抽象的层次就会增加。最外层的圆是低层次的具体细节。随着你往内部移动，软件变得更抽象，并且封装高阶的政策（*policies*）。最内层的圆是最具有普遍性。

## Crossing boundaries

> 跨越边界

图中的右下方是一个我们如何跨越圆圈边界的示例。它显示了Controllers和Presenters与用例层在下一层的交互。注意控制流。它从controller开始，遍历用例层，并且之后在presenter执行结束。也注意代码中的依赖。它们每一个指向用例层的内部。

通常我们使用[依赖反转原则](http://en.wikipedia.org/wiki/Dependency_inversion_principle)解决这一明显的矛盾。例如，在诸如Java的语言中，我们将安排接口和继承关系，以便源代码依赖关系在跨越边界的正确点减少控制流。

例如，考虑到用例层需要调用presenter。但是，这个调用必须不能是直接调用，因为将会违反依赖原则：外圈的名字不能被内圈提及。所以我们在内圈中让用例调用一个接口（这里显示为用例输出端口*Use Case Output Port*），并让外圈中的presenter实现它。

相同的技术被用于跨越所有架构中的边界上。我们采用了动态多态性的有点来创建代码依赖，减少控制流，无论控制流走向哪个方向，都以便于我们遵守依赖原则。

## What data crosses the boundaries

> 什么数据跨越边界

通常来讲，跨越边界的数据仅仅是数据结构。你可以使用基本结构或简单的数据转换（*Data Transfer*）对象。或者，数据也可以仅仅是函数调用中的参数。或者你可以将它打包到HashMap中，或者构建它成为一个对象。重要的事情是隔离的、简单的数据结构被传进跨越边界。我们不希望作弊并传递Entity或数据库的某一行。我们也不希望数据结构有任何一个类型违反依赖原则。

例如，许多数据库框架在查询响应中返回一个便捷的数据格式。我们也许称之为RowStructure。我们不希望传递行结构到内部跨越边界。这会违反依赖原则，因为它将强制一个内部圆去知道某些外部圆中的事物。

所以，当我们传递数据跨越边界时，它总是采用最适合内圈的形式。

## Conclusion

> 总结

遵守这些简单的规则并不难，并且将节省你大量的麻烦事。通过将软件分层，并且遵守依赖原则，你讲创建一个本质上可测试的系统，并具有所有暗含的好处。当系统中任何一个外部部分过时的时候，例如数据库或Web框架，你可以以最少的体力替换掉过时的元素。
