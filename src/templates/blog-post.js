import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import ButtonMore from '../components/ButtonMore'
import showdown from 'showdown';

const converter = new showdown.Converter()

export const BlogPost2Template = ({
    altCover, 
    date, 
    title, 
    author,
    image,
    body,
    isPreview = false
}) => { 
    return (
        <div id={isPreview ? "blog-post" : ""}>
            <section
                className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
                <img 
                    className="img-fluid jumbo__cover w-100 position-relative shadow-sm"
                    src={image}
                    alt={altCover} />
            </section>
            <section className="d-flex flex-column flex-md-row container py-5">
                {/* AUTHOR IMAGE */}
                <div
                    className="mx-auto ml-md-0 mr-md-5 mb-4 mb-md-0 border-image border-image-frame rounded-circle d-flex justify-content-center align-items-center p-3" 
                    >
                    <img 
                        src={author.photo.childImageSharp ? author.photo.childImageSharp.fluid.src : author.photo} 
                        alt={author.alt} />
                </div>
                <div className="d-flex flex-column">
                    <h2 className="mb-4 mx-auto mx-md-0 text-muted font-weight-bold">{title}</h2>
                    {
                        !isPreview && (
                            <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                                <img 
                                    className="icon-meta"
                                    src="/img/icon-date.svg"
                                    alt="icon date" />
                                    {/* 2h ago */}
                                    {date}
                            </div>
                        )
                    }
                    <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                        <img 
                            className="icon-meta"
                            src={author.photo.childImageSharp ? author.photo.childImageSharp.fluid.src : author.photo}
                            alt={author.alt} />
                            {author.name}
                    </div>
                    <div className="text-muted mt-5">
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

const BlogPost2 = ({
    location,
    data
}) => {
    const {altCover, date, title, author} = data.markdownRemark.frontmatter;
    
    const image = data.markdownRemark.frontmatter.coverImage.childImageSharp 
        ? data.markdownRemark.frontmatter.coverImage.childImageSharp.fluid.src
        : data.markdownRemark.frontmatter.coverImage;
        
    const body = data.markdownRemark.html;

    const posts = data.allMarkdownRemark.edges;

    return (
    <TemplateWrapper2 location={location}>
        <div id="blog-post">
            <BlogPost2Template 
                altCover={altCover} 
                date={date} 
                title={title} 
                author={author} 
                image={image} 
                body={body}  />
            <section className="container-fluid bg-light">
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title="MÁS BLOGS" />
                </div>
                <div className="container py-5">
                    <div className="row">
                        {
                            posts.map((p, index) => (
                                <div
                                    key={`post${index}`} 
                                    className="col-lg-4 mb-5 mb-lg-0 d-flex flex-column align-items-center mt-3">
                                    <img 
                                        className="shadow-sm w-100"
                                        src={p.node.frontmatter.featuredimage.childImageSharp.fluid.src}
                                        alt={p.node.frontmatter.altFeatured} />
                                    <div className="d-block px-2 mr-auto">
                                        <h5 className="text-muted font-weight-bold my-4">{p.node.frontmatter.title}</h5>
                                        <div className="d-flex align-items-center text-muted">
                                            <img 
                                                className="icon-meta"
                                                src={p.node.frontmatter.author.photo.childImageSharp.fluid.src}
                                                alt={p.node.frontmatter.author.alt} />
                                                {p.node.frontmatter.author.name}
                                        </div>
                                        <div className="d-flex align-items-center text-muted mt-4">
                                            <img 
                                                className="icon-meta"
                                                src="/img/icon-date.svg"
                                                alt="icon date" />
                                                {p.node.frontmatter.date}
                                        </div>
                                        <div className="mt-5">
                                            <ButtonMore to={p.node.fields.slug}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    </TemplateWrapper2>
  )
}

export default BlogPost2

export const blogpost2Query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        coverImage {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        altCover
        title
        date(formatString: "DD/MM/YYYY")
        author {
            name
            photo {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            alt
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    author {
                        name
                        photo {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    date(formatString: "DD/MM/YYYY")
                    featuredimage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                      }
                      altFeatured
                }
            }
        }
    }
  }
`