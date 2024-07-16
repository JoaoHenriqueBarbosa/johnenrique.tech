import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <div>
      <h1>Page</h1>
      <Link href={`/${params.locale}/blog`}>
        Go to blog
      </Link>
    </div>
  );
}
