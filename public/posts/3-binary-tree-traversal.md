---
id: 3
title: "二叉树遍历算法详解"
category: "算法"
date: "2024-12-15"
excerpt: "深入理解二叉树的前序、中序、后序遍历，包括递归和迭代两种实现方式..."
tags: ["二叉树", "遍历", "数据结构"]
readTime: "6 分钟"
---

# 二叉树遍历算法详解

二叉树是数据结构中最重要的概念之一，本文详细介绍二叉树的各种遍历方法。

## 二叉树基础

二叉树是每个节点最多有两个子节点的树结构。

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## 遍历方式

### 1. 前序遍历（Pre-order）

访问顺序：**根 → 左 → 右**

#### 递归实现

```python
def preorderTraversal(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        result.append(node.val)  # 访问根
        traverse(node.left)       # 遍历左子树
        traverse(node.right)      # 遍历右子树
    
    traverse(root)
    return result
```

#### 迭代实现

```python
def preorderTraversal(root):
    if not root:
        return []
    
    result = []
    stack = [root]
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        # 先压右子节点，再压左子节点
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    
    return result
```

### 2. 中序遍历（In-order）

访问顺序：**左 → 根 → 右**

```python
def inorderTraversal(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        traverse(node.left)       # 遍历左子树
        result.append(node.val)   # 访问根
        traverse(node.right)      # 遍历右子树
    
    traverse(root)
    return result
```

**特点**：对于二叉搜索树，中序遍历得到的是升序序列。

### 3. 后序遍历（Post-order）

访问顺序：**左 → 右 → 根**

```python
def postorderTraversal(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        traverse(node.left)       # 遍历左子树
        traverse(node.right)      # 遍历右子树
        result.append(node.val)   # 访问根
    
    traverse(root)
    return result
```

### 4. 层序遍历（Level-order）

按层从上到下，从左到右遍历。

```python
from collections import deque

def levelOrder(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
```

## 遍历应用

### 求二叉树的最大深度

```python
def maxDepth(root):
    if not root:
        return 0
    
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    
    return max(left_depth, right_depth) + 1
```

### 判断是否为平衡二叉树

```python
def isBalanced(root):
    def height(node):
        if not node:
            return 0
        
        left_height = height(node.left)
        if left_height == -1:
            return -1
        
        right_height = height(node.right)
        if right_height == -1:
            return -1
        
        if abs(left_height - right_height) > 1:
            return -1
        
        return max(left_height, right_height) + 1
    
    return height(root) != -1
```

## 总结

| 遍历方式 | 访问顺序 | 应用场景 |
|---------|---------|---------|
| 前序遍历 | 根-左-右 | 复制树、前缀表达式 |
| 中序遍历 | 左-根-右 | BST 排序、中缀表达式 |
| 后序遍历 | 左-右-根 | 删除树、后缀表达式 |
| 层序遍历 | 逐层访问 | 最短路径、层级关系 |

掌握二叉树遍历是学习树结构的基础，多练习才能熟练运用！🌳

