---
layout: post
title: RTX 5060 Ti 安装 TensorFlow
date: 2025-12-19 17:41
description:
tags:
categories:
---

> RTX 5060 has compute capability 12.0 - a very new architecture. Stable TensorFlow versions lack pre-compiled GPU kernels for this architecture, causing JIT compilation failures for certain operations (especially float32).

## Step by Step Solution

```bash
conda create --name tf_gpu python=3.11
conda activate tf_gpu

conda install nvidia/label/cuda-12.5.1::cuda-toolkit

pip install tf-nightly[and-cuda]

conda env config vars set LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

conda deactivate
conda activate tf_gpu
```
