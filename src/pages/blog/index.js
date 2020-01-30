import React from 'react'
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery, Link } from 'gatsby';

const BlogSection = ({
    title,
    data
}) => {
    const posts = data.allMarkdownRemark.edges.slice(0, 3);

    return (
        <>
            {/* Displayed in desk */}
            <section
                id="blog" 
                className="container-fluid m-0 px-0 py-5 bg-light">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title={title} />
                    </div>
                    <div className="row">
                        {
                            posts.map((item, index) => (
                                <Link 
                                    key={`blog${index}`}
                                    className="col-md-6 col-lg-4 mb-5 mb-lg-0 px-4 px-sm-5 px-md-3"
                                    to={item.node.fields.slug}>
                                    <div 
                                        className="d-block">
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.node.frontmatter.featuredimage.childImageSharp.fluid.src})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                height: "26rem",
                                            }}
                                            className="shadow-sm position-relative"
                                            >
                                            <div
                                                style={{
                                                    bottom: "0", 
                                                    left: "0", 
                                                    height: "9rem", 
                                                    
                                                }} 
                                                className="text-white d-flex flex-column justify-content-center position-absolute w-100"
                                                >
                                                    <div style={{
                                                        top: "0",
                                                        left: "0",
                                                        backgroundColor: "#aeaeae"
                                                    }} 
                                                    className="w-100 h-100 position-absolute" />
                                                    <span
                                                        style={{height: "5px", width: "4rem", zIndex: "1"}} 
                                                        className="mx-3 bg-white rounded d-block" />
                                                    <p
                                                        className="px-3 mt-3 c-pointer" 
                                                        style={{zIndex: "1"}}>{item.node.frontmatter.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link> 
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query BlogSection {
            allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog-post" } }}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            featuredimage {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            description
                            altFeatured
                        }
                    }
                }
            }
        }
      `}
      render={(data, count) => <BlogSection data={data} count={count} title="BLOG" {...props} />}
    />
  )