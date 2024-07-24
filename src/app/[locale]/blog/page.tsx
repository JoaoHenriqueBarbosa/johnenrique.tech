import { promises as fs } from 'fs';
import path from 'path';
import {Link} from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

async function getBlogPosts(locale: string) {
  const contentDir = path.join(process.cwd(), 'src', 'content', locale , 'blog');
  const files = await fs.readdir(contentDir);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, ''),
      title: file.replace(/\.mdx$/, '').replace(/-/g, ' '),
    }));
}

export default async function BlogIndex({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const blogPosts = await getBlogPosts(params.locale);
  return (
    <body>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={{
              pathname: '/blog/[slug]',
              params: { slug: post.slug },
            }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </body>
  );
}
