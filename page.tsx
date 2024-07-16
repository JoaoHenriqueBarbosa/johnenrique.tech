import { MDXRemote } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const files = await fs.readdir(contentDir);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  if (!filePath.endsWith('.mdx')) {
    notFound();
  }

  try {
    const source = await fs.readFile(filePath, 'utf8');
    return (
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={source} />
      </div>
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      notFound();
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
