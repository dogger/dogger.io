import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
export default (props: { title?: string, description?: string, image?: string, article?: boolean, noIndex?: boolean }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata
    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        image: `${siteUrl}${props.image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    let canonicalUrl = seo.url.toLowerCase();
    while(canonicalUrl.endsWith("/"))
        canonicalUrl = canonicalUrl.substr(0, canonicalUrl.length - 1);

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content={props.noIndex ? "noindex" : "all"} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            {<meta property="og:type" content={props.article ? "article" : "website"} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`