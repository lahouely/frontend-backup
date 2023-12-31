import { getAllPostIds, getPostData } from '../../lib/posts';
import NewLayout from '../../components/newlayout';
import Head from 'next/head';
import YDate from '../../components/ydate';
import utilStyles from '../../styles/utils.module.css';


//The curly braces { } hereunder are the Destructuring assignment
//The destructuring assignment syntax is a JavaScript expression that makes it possible
//to unpack values from arrays, or properties from objects, into distinct variables.
//Here we're only reading the params key and nothing else.
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <NewLayout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <YDate dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

      </NewLayout>
    );
  }
  