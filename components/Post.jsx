import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
  console.log(post)
  return (
    <>
    
      <div className="card">
        <img src={post.frontmatter.cover_image} alt="" />
        <div className="post-date">
          post on {post.frontmatter.date}
        </div>
        <h3>  {post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a   className='btn'>Read More</a>
        </Link>
      </div>
    </>
  )
}

export default Post