// 自动扫描 public/posts 目录，生成博客文章索引
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '../public/posts');
const outputFile = path.join(__dirname, '../src/data/posts-index.json');

function generatePostsIndex() {
  try {
    // 读取 posts 目录下的所有 .md 文件（排除模板文件）
    const files = fs.readdirSync(postsDirectory)
      .filter(file => file.endsWith('.md') && !file.startsWith('_'));
    
    const posts = files.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      // 解析 Front Matter
      const { data } = matter(fileContents);
      
      return {
        id: data.id,
        title: data.title,
        category: data.category,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        readTime: data.readTime,
        contentFile: filename
      };
    });
    
    // 按 ID 排序
    posts.sort((a, b) => a.id - b.id);
    
    // 写入 JSON 文件
    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf8');
    
    console.log(`✅ 成功生成博客索引！共 ${posts.length} 篇文章`);
    console.log(`📄 输出文件: ${outputFile}`);
  } catch (error) {
    console.error('❌ 生成索引失败:', error);
    process.exit(1);
  }
}

generatePostsIndex();

