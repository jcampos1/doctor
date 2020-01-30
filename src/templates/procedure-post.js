import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import ItemCard from '../components/ItemCard'
import { graphql } from 'gatsby';
import Procedures from '../pages/procedure'

export const ProcedurePostTemplate = ({
  title, 
  cover, 
  procedures: items,
  image
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
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-2">
            
          </div>
          <div 
            className="col-md-10 color-1">
            <p>
              La microcirugía es una rama de la cirugía plástica que permite al cirujano tener una herramienta de reconstruir cualquier parte del cuerpo, como el resultado de un trauma, accidente, cirugía mal realizada, enfermedad o alteración genética.
            </p>
            <p>
              Realizamos todas las reconstrucciones en cabeza, cuello, y demás miembros superiores e inferiores,  y reconstrucción de mamas.
            </p>
          </div>
        </div>
      </div>
      
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
    const { title, cover, procedures: items } = data.markdownRemark.frontmatter;
    const image = cover.image.childImageSharp.fluid.src;

    return (
        <TemplateWrapper2 location={location}>
          <ProcedurePostTemplate 
              title={title}
              cover={cover}
              procedures={items}
              image={image} />
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