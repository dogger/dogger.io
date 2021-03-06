import React from "react"
import { graphql } from "gatsby"
import {renderBlogPost, BlogPost, BlogPage} from '../pages/blog';
import moment from "moment";

export default function Template({
  data
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const post: BlogPost = {
    contents: html,
    time: moment(frontmatter.date),
    title: frontmatter.title,
    summary: frontmatter.summary,
    slug: frontmatter.slug,
    noIndex: frontmatter.noIndex
  };

  return <BlogPage>
    <>
    <article>
        {renderBlogPost(post)}
    </article>
    </>
  </BlogPage>
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        summary
        noIndex
      }
    }
  }
`