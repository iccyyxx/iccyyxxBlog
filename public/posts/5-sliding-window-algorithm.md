---
id: 5
title: "滑动窗口算法模板总结"
category: "算法"
date: "2024-12-10"
excerpt: "滑动窗口是解决字符串和数组问题的利器，总结一个通用的算法模板..."
tags: ["滑动窗口", "算法模板", "字符串"]
readTime: "7 分钟"
---

# 滑动窗口算法模板总结

滑动窗口是解决字符串和数组问题的利器，本文总结一个通用的算法模板。

## 什么是滑动窗口？

滑动窗口是一种思想，用两个指针维护一个区间，通过移动指针来改变区间的大小和位置。

### 适用场景

- 连续子数组/子字符串问题
- 最长/最短子串问题
- 满足某个条件的子数组问题

## 算法模板

### 基础模板

```python
def slidingWindow(s):
    left = 0
    right = 0
    window = {}
    
    while right < len(s):
        # 扩大窗口
        c = s[right]
        right += 1
        # 更新窗口数据
        window[c] = window.get(c, 0) + 1
        
        # 判断是否需要收缩窗口
        while window_needs_shrink():
            # 缩小窗口
            d = s[left]
            left += 1
            # 更新窗口数据
            window[d] -= 1
    
    return result
```

## 经典例题

### 1. 最小覆盖子串（LeetCode 76）

给定字符串 S 和 T，找出 S 中包含 T 所有字符的最小子串。

```python
def minWindow(s, t):
    from collections import Counter
    
    need = Counter(t)
    window = {}
    
    left = 0
    right = 0
    valid = 0  # 窗口中满足条件的字符数
    
    start = 0
    length = float('inf')
    
    while right < len(s):
        c = s[right]
        right += 1
        
        # 更新窗口数据
        if c in need:
            window[c] = window.get(c, 0) + 1
            if window[c] == need[c]:
                valid += 1
        
        # 判断是否需要收缩窗口
        while valid == len(need):
            # 更新最小覆盖子串
            if right - left < length:
                start = left
                length = right - left
            
            # 缩小窗口
            d = s[left]
            left += 1
            
            if d in need:
                if window[d] == need[d]:
                    valid -= 1
                window[d] -= 1
    
    return "" if length == float('inf') else s[start:start+length]
```

### 2. 无重复字符的最长子串（LeetCode 3）

```python
def lengthOfLongestSubstring(s):
    window = {}
    left = 0
    right = 0
    max_len = 0
    
    while right < len(s):
        c = s[right]
        right += 1
        window[c] = window.get(c, 0) + 1
        
        # 如果有重复字符，收缩窗口
        while window[c] > 1:
            d = s[left]
            left += 1
            window[d] -= 1
        
        max_len = max(max_len, right - left)
    
    return max_len
```

### 3. 找到字符串中所有字母异位词（LeetCode 438）

```python
def findAnagrams(s, p):
    from collections import Counter
    
    need = Counter(p)
    window = {}
    
    left = 0
    right = 0
    valid = 0
    result = []
    
    while right < len(s):
        c = s[right]
        right += 1
        
        if c in need:
            window[c] = window.get(c, 0) + 1
            if window[c] == need[c]:
                valid += 1
        
        # 当窗口大小等于 p 的长度时，判断是否找到异位词
        while right - left >= len(p):
            if valid == len(need):
                result.append(left)
            
            d = s[left]
            left += 1
            
            if d in need:
                if window[d] == need[d]:
                    valid -= 1
                window[d] -= 1
    
    return result
```

### 4. 长度最小的子数组（LeetCode 209）

找出数组中满足和 ≥ target 的最小长度连续子数组。

```python
def minSubArrayLen(target, nums):
    left = 0
    right = 0
    sum_val = 0
    min_len = float('inf')
    
    while right < len(nums):
        sum_val += nums[right]
        right += 1
        
        while sum_val >= target:
            min_len = min(min_len, right - left)
            sum_val -= nums[left]
            left += 1
    
    return 0 if min_len == float('inf') else min_len
```

## 解题步骤

1. **初始化**：left、right 指针，窗口数据结构
2. **扩大窗口**：right 指针右移，更新窗口数据
3. **收缩窗口**：当满足收缩条件时，left 指针右移
4. **更新结果**：在合适的时机更新答案

## 时间复杂度

滑动窗口算法的时间复杂度通常是 **O(n)**，因为：

- 每个元素最多被访问两次（一次进窗口，一次出窗口）
- left 和 right 指针都只向右移动

## 注意事项

1. **窗口数据结构的选择**
   - 哈希表：记录字符/元素出现次数
   - 集合：判断是否存在重复
   - 变量：记录和、计数等

2. **收缩窗口的时机**
   - 窗口大小固定：当窗口大小达到要求
   - 窗口大小可变：当窗口满足某个条件

3. **更新结果的时机**
   - 求最大值：在收缩前更新
   - 求最小值：在收缩时更新

## 总结

滑动窗口算法模板：

```python
left, right = 0, 0
window = {}

while right < len(array):
    # 1. 扩大窗口
    window.add(array[right])
    right += 1
    
    # 2. 收缩窗口
    while should_shrink():
        window.remove(array[left])
        left += 1
    
    # 3. 更新结果
    update_result()
```

掌握这个模板，滑动窗口问题迎刃而解！🎯

