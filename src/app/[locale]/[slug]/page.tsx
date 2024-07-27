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
        <head>
          <title>{data.title} | {t('site.name')}</title>
          <meta name="description" content={data.description || t('site.defaultDescription')} />
          <meta name="keywords" content={data.keywords || t('site.defaultKeywords')} />
          <meta property="og:title" content={`${data.title} | ${t('site.name')}`} />
          <meta property="og:description" content={data.description || t('site.defaultDescription')} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://yourdomain.com/${params.locale}/${params.slug}`} />
          <link rel="canonical" href={`https://yourdomain.com/${params.locale}/${params.slug}`} />
        </head>
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
