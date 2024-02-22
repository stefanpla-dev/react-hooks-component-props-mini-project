import React from 'react'
import Article from "./Article"
import blogData from "../data/blog";


function ArticleList({ posts }) {
  const createList = posts.map((post) => {
    return (
    <Article 
      post={post}
      key={post.id}
      date={post.date}
      title={post.title}
      preview={post.preview}
      minutes={post.minutes}
    />
    );
  });
  return (
    <main>{createList}</main>
  )
}

export default ArticleList
