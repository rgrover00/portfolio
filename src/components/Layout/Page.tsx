import type {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, type PropsWithChildren} from 'react';

import type {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="lookforwhatyoucantsee" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://ronniegrover.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon" rel="apple-touch-icon.png" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://ronniegrover.com${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:ronniegrover" />
        <meta content={description} name="twitter:lookforwhatyoucantsee" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
