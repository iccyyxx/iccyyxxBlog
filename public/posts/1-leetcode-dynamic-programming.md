---
id: 1
title: "LeetCode 动态规划经典题目总结"
category: "算法"
date: "2024-12-20"
excerpt: "总结了 LeetCode 上经典的动态规划题目，包括背包问题、最长子序列、股票买卖等常见题型..."
tags: ["动态规划", "LeetCode", "算法"]
readTime: "8 分钟"
---

# LeetCode 动态规划经典题目总结

动态规划是算法面试中最重要的题型之一，本文总结了 LeetCode 上经典的动态规划题目。

## 什么是动态规划？

动态规划（Dynamic Programming，DP）是一种通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

### 动态规划的特点

1. **最优子结构**：问题的最优解包含子问题的最优解
2. **重叠子问题**：子问题会被多次计算
3. **状态转移方程**：描述问题状态之间的关系

## 经典题型

### 1. 背包问题

背包问题是动态规划中最经典的问题之一。

```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], 
                              dp[i-1][w-weights[i-1]] + values[i-1])
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]
```

### 2. 最长公共子序列（LCS）

LeetCode 1143 - 最长公共子序列

```python
def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]
```

### 3. 股票买卖问题

LeetCode 121, 122, 123, 188, 309, 714 系列

```python
def maxProfit(prices):
    if not prices:
        return 0
    
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit
```

## 解题技巧

1. **定义状态**：明确 dp[i] 或 dp[i][j] 代表什么
2. **找状态转移方程**：当前状态如何由之前的状态推导出来
3. **初始化**：确定边界条件
4. **确定遍历顺序**：从小到大还是从大到小
5. **空间优化**：考虑是否可以用滚动数组优化

## 总结

动态规划的关键在于：

- 理解问题的本质
- 找到状态转移方程
- 正确初始化和遍历
- 多做题多总结

希望这篇总结对你有帮助！加油！💪

