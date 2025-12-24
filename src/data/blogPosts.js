// 博客文章数据管理
// 文章元数据自动从 Markdown 文件的 Front Matter 中提取
// 运行 npm run generate:posts 来更新索引

import postsIndex from './posts-index.json';

// 获取所有博客文章
export function getBlogPosts() {
  return postsIndex;
}

// 根据 ID 获取博客文章元数据
export function getBlogPost(id) {
  return postsIndex.find(post => post.id === parseInt(id));
}

// 根据分类获取博客文章
export function getBlogPostsByCategory(category) {
  if (!category) return postsIndex;
  return postsIndex.filter(post => post.category === category);
}

// 加载博客文章的 Markdown 内容（移除 Front Matter）
export async function loadBlogContent(contentFile) {
  try {
    const response = await fetch(`/posts/${contentFile}`);
    if (!response.ok) {
      throw new Error('文章加载失败');
    }
    let content = await response.text();
    
    // 移除 Front Matter（--- 之间的内容）
    const frontMatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/;
    content = content.replace(frontMatterRegex, '');
    
    return content;
  } catch (error) {
    console.error('加载文章内容失败:', error);
    return null;
  }
}
