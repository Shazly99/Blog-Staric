import fs from "fs";
import path from "path";
import mater from "gray-matter";
import Head from "next/head";
 import Post from './../components/Post';
import {sortByDate} from '../utils'
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div  className='container' >
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo3.png" />
      </Head>
      <div className="posts">
        {
          posts.map((post, index) => (
              <Post post={post} key={index}/>
           ))
        }
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frntmatter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    // Get Frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"

    );
    const { data: frontmatter } = mater(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts:posts.sort(sortByDate),
    },
  };
};
