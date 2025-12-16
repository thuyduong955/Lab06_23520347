// pages/index.js
// This page lists all blog post titles. Data is fetched at build time.
// I'm using getStaticProps to generate static content for better performance and SEO.
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  // Read data from local JSON file
  // Fix: Use correct path to data.json (one level up from pages)
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(jsonData);
  return {
    props: { posts }
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      {/* List all blog post titles with links */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
