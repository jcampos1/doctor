import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import ItemCard from '../components/ItemCard'
import { graphql } from 'gatsby';
import Procedures from '../pages/procedure'
import showdown from 'showdown';

const converter = new showdown.Converter()

export const ProcedurePostTemplate = ({
  title, 
  cover, 
  procedures: items,
  image,
  prompt
}) => {
  return (
    <>
      <section
        id="procedure" 
        className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
        <img 
            style={{objectFit: "cover"}}
            className="img-fluid jumbo__cover w-100 position-relative"
            src={image}
            alt={cover.alt} />
        <div
            className="procedure__title">
            <div
                className="mt-3 text-uppercase text-center">
                {title}
            </div>
        </div>
      </section>
      {
        prompt && (
          <div className="container">
            <div className="row mt-3 mt-md-5">
              <div className="col-md-2 d-flex align-items-center">
                <img src={prompt.image} alt={prompt.alt} className="img-fluid mx-auto" />
              </div>
              <div 
                className="col-md-10 d-flex align-items-center color-1">
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(prompt.content) }} />
              </div>
            </div>
          </div>
        )
      }
      <div className="d-block d-md-none container-fluid px-0 py-5">
        {
            items.map((item, index) => (
                <div className="mb-4">
                    <ItemCard 
                        image={item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
                        alt={item.alt}
                        title={item.name}
                        resume={item.description}
                        />
                </div>
            ))
        }
      </div>
      <div className="d-none d-md-block container py-5">
        {
            items.map((item, index) => (
                <div className="mb-4">
                    <ItemCard 
                        image={item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
                        alt={item.alt}
                        title={item.name}
                        resume={item.description}
                        />
                </div>
            ))
        }
      </div>
    </>
  )
}

const ProcedurePost = ({
    location,
    data
}) => {
    const { title, cover, procedures: items, prompt } = data.markdownRemark.frontmatter;
    const image = cover.image.childImageSharp.fluid.src;

    let _prompt = prompt;
    if(prompt)
      _prompt = {
        ...prompt,
        image: prompt.image.childImageSharp ? prompt.image.childImageSharp.fluid.src : prompt.image.publicURL
      }

    return (
        <TemplateWrapper2 location={location}>
          <ProcedurePostTemplate 
              title={title}
              cover={cover}
              procedures={items}
              image={image}
              prompt={_prompt} />
          <Procedures exludeSlug={data.markdownRemark.fields.slug} />
        </TemplateWrapper2>
    )
}

export default ProcedurePost;

export const procedureQuery = graphql`
  query ProcedurePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
        fields {
            slug
        }
      frontmatter {
        title
        cover{
            alt
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
        prompt {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          alt
          content
        }
        procedures {
            alt
            description
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            name
        }
      }
    }

    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "procedure-post" } } }
      ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    thumbnail{
                        alt
                        image {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                    }
                    procedures {
                        name
                    }
                }
            }
        }
    }
  }
`