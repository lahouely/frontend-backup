import { getAllPostIds, getPostData } from '../../lib/posts';
import NewLayout from '../../components/newlayout';

//The curly braces { } hereunder are the Destructuring assignment
//The destructuring assignment syntax is a JavaScript expression that makes it possible
//to unpack values from arrays, or properties from objects, into distinct variables.
//Here we're only reading the params key and nothing else.
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
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
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </NewLayout>
    );
  }
  