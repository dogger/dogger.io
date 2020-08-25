import React, { PropsWithChildren } from 'react';
import { graphql, Link as RouterLink } from 'gatsby'
import moment, { Moment } from 'moment';
import {Helmet} from "react-helmet";
import { RouteComponentProps } from "@reach/router";

import classes from './blog.module.css';

import { Link } from '@material-ui/core';

export type BlogPost = {
    title: string;
    contents: string;
    summary: string;
    slug: string;
    time: Moment;
}

export const renderBlogPost = (post: BlogPost) => {
    return <>
        <h2>
            <Link
                component={RouterLink}
                to={post.slug} 
                style={{
                    color: 'inherit'
                }}
            >
                {post.title}
            </Link>
        </h2>
        <span style={{opacity: 0.6}}>Written <time>{post.time.format('LL')}</time></span>
        {post.summary && <p>{post.summary}</p>}
        {post.contents && <div dangerouslySetInnerHTML={{ __html: post.contents }} />}
        {!post.contents && 
            <Link
                component={RouterLink}
                to={post.slug} 
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 500
                }}
            >
                Read more
            </Link>}
    </>;
}

export const BlogPage = (props: PropsWithChildren<RouteComponentProps>) => {
    return <div className={classes.blog}>
        <h1>Blog</h1>
        <Helmet>
            <title>Blog</title>
            <meta 
                name="description" 
                content="The Dogger blog contains all kinds of tips and tricks for Docker developers." />
            <link rel="canonical" href="https://dogger.io/blog" />
        </Helmet>
        {props.children}
    </div>
}

export default (props: any) => {
    const posts = props
        .data
        .allMarkdownRemark
        .edges
        .map(x => x.node)
        .filter(x => x.frontmatter.slug?.indexOf("/blog/") === 0)
        .map(x => ({
            contents: "",
            slug: x.frontmatter.slug,
            summary: x.frontmatter.summary,
            time: moment(x.frontmatter.date),
            title: x.frontmatter.title
        }) as BlogPost) as Array<BlogPost>;
    posts.sort((a, b) => b.time.unix() - a.time.unix());

    return <BlogPage {...props}>
        {posts.map(renderBlogPost)}
    </BlogPage>;
};

export const pageQuery = graphql`
query AllBlogPostsQuery {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    date
                    slug
                    summary
                    title
                }
            }
        }
    }
}  
`