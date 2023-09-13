import Head from 'next/head';
import NewLayout, { siteTitle } from '../components/newlayout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import CatFact from '../components/catfact';
import Price from '../components/price';
import Activity from '../components/activity';
import Dog from '../components/dog';

/*export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const propsDate = new Date().toLocaleString('fr-FR',{ timeZone: 'Africa/Algiers', timeZoneName: 'shortGeneric' });
  const propsType = 'StaticProps';
  return {
    props: { 
      allPostsData,
      propsDate,
      propsType,
    },
  };
}*/

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  const propsDate = new Date().toLocaleString('en-UK',{ timeZone: 'Africa/Algiers', timeZoneName: 'shortGeneric' });
  const propsType = 'ServerSideProps';
  return {
    props: {
      allPostsData,
      propsDate,
      propsType,
    },
  };
}



export default function Home({ allPostsData, propsDate, propsType }) {
  //console.log(allPostsData);
  return (
    <NewLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>propsDate={propsDate}</p>
        <p>propsType={propsType}</p>
        
        <Price/>
        <Activity/>
        <Dog/>
        <CatFact/>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </NewLayout>
  );
}