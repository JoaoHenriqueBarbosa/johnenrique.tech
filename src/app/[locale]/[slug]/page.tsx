import { MDXRemote } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import matter from 'gray-matter';

export default async function Page({ params }: { params: { slug: string; locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const contentDir = path.join(process.cwd(), 'src', 'content', params.locale);
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  const t = await getTranslations('common');

  if (!filePath.endsWith('.mdx')) {
    notFound();
  }

  try {
    const source = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(source);
    return (
      <>
        <body>
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </body>
      </>
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      notFound();
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const contentDir = path.join(process.cwd(), 'src', 'content', params.locale);
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  if (!filePath.endsWith('.mdx')) {
    return {};
  }

  try {
    const source = await fs.readFile(filePath, 'utf8');
    const { data } = matter(source);
    const t = await getTranslations('common');

    return {
      title: `${data.title} | ${t('site.name')}`,
      description: data.description || t('site.defaultDescription'),
      keywords: data.keywords || t('site.defaultKeywords'),
      openGraph: {
        title: `${data.title} | ${t('site.name')}`,
        description: data.description || t('site.defaultDescription'),
        type: 'article',
        url: `https://yourdomain.com/${params.locale}/${params.slug}`,
      },
      canonical: `https://yourdomain.com/${params.locale}/${params.slug}`,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return {};
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
