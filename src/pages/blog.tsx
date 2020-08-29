import React, { PropsWithChildren } from 'react';
import { graphql, Link as RouterLink } from 'gatsby'
import moment, { Moment } from 'moment';
import { RouteComponentProps } from "@reach/router";

import Seo from '../components/Seo';

import classes from './blog.module.css';

import { Link, Typography } from '@material-ui/core';

export type BlogPost = {
    title: string;
    contents: string;
    summary: string;
    slug: string;
    time: Moment;
    noIndex: boolean;
}

export const renderBlogPost = (post: BlogPost) => {
    return <>
        <Typography variant="h1" component={post.contents ? "h1" : "h2"}>
            <Link
                component={RouterLink}
                to={post.slug} 
                style={{
                    color: 'inherit'
                }}
            >
                {post.title}
            </Link>
        </Typography>
        <span style={{opacity: 0.6}}>Written <time>{post.time.format('LL')}</time></span>
        {post.summary && <p>{post.summary}</p>}
        {post.contents && <>
            <Seo noIndex={post.noIndex} title={post.title} description={post.summary} />
            <div dangerouslySetInnerHTML={{ __html: post.contents }} />
        </>}
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
    return <>
        <Seo
            title="Blog"
            description="The Dogger blog contains all kinds of tips and tricks for Docker developers." 
        />
        <div className={classes.blog}>
            {props.children}
        </div>
    </>;
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
            title: x.frontmatter.title,
            noIndex: x.frontmatter.noIndex
        }) as BlogPost) as Array<BlogPost>;
    posts.sort((a, b) => b.time.unix() - a.time.unix());

    return <BlogPage {...props}>
        <h1>Blog</h1>
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
                    title,
                    noIndex
                }
            }
        }
    }
}  
`