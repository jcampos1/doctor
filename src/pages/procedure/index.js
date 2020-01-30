import React, { useState, useEffect } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { graphql, StaticQuery } from 'gatsby'
import Feature2 from '../../components/Feature2';
import ButtonMore from '../../components/ButtonMore';

const Procedures = ({
    className,
    title,
    data,
    exludeSlug
}) => {
    const [selected, setSelected] = useState(null);
    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        let _procedures = data.allMarkdownRemark.edges;
        if(_procedures) {
            // if(exludeSlug)
            //     _procedures =  _procedures.filter(p => p.node.fields.slug !== exludeSlug)
            const obj = _procedures[0];
            if(obj)
                setSelected(obj.node)
            
            setProcedures(_procedures);
        }
    }, []);

    return (
        <div
            id="procedure" 
            className={className}>
            {/* Displayed in desk */}
            <section className={`container-fluid m-0 px-0 py-5 d-none d-md-block ${exludeSlug ? "bg-light" : ""}`}>
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title={title} />
                </div>
                <div
                    style={{height: "34.5rem"}} 
                    className="container d-flex align-items-center">
                    <div className="d-inline-block w-50">
                        {
                            procedures.map((item, index) => {
                                const { thumbnail } = item.node.frontmatter;

                                return (
                                    <div
                                        key={`proc${index}`}
                                        className="d-inline-block w-50"
                                        style={{
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setSelected(item.node)}>
                                        <div
                                            className="card border-0">
                                            <img 
                                                src={thumbnail.image.childImageSharp.fluid.src} 
                                                className="card-img" 
                                                alt={thumbnail.alt} 
                                                />
                                            {
                                                ((!selected && index < 3) || (selected && selected.frontmatter.title !== item.node.frontmatter.title)) && (
                                                    <div
                                                        style={{
                                                            backgroundColor: "#515151", opacity: ".5",
                                                            width: "96%",
                                                            height: "97%",
                                                            left: "2%",
                                                            top: "1%"
                                                        }} 
                                                        className="card-img-overlay item-image" />
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        selected && (
                            <div
                                style={{backgroundColor: "#f4f5fa"}} 
                                className="w-50 d-flex flex-column justify-content-center ml-2 px-5 py-3 h-100">
                                <h3 className="text-muted font-weight-bold">
                                    {selected.frontmatter.title}
                                </h3>
                                <PerfectScrollbar>
                                    <ul 
                                        className="pl-0"
                                        style={{listStylePosition: "inside", color: "#515151", fontSize: "25px", lineHeight: "25px"}}>
                                        {
                                            selected.frontmatter.procedures.map((item, index) => (
                                                    <li 
                                                        key={`cont2${index}`}>
                                                        <span
                                                            className="text-muted" 
                                                            style={{color: "initial", fontSize: "initial"}}>
                                                            {item.name}
                                                        </span>
                                                    </li>
                                            )) 
                                        }
                                    </ul>
                                </PerfectScrollbar>
                                <div className="d-flex">
                                    <ButtonMore 
                                        className="btn btn-sm btn-info px-4 font-weight-bold mt-3"
                                        to={selected.fields.slug} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            {/* Displayed in mobile */}
            <div className="container d-block d-md-none px-4 pt-3 pb-5">
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title={title} />
                </div>
                <Carousel showStatus={false} showThumbs={false} emulateTouch>
                    {
                        procedures.map((item, index) => {
                            const { thumbnail, title, procedures: _items } = item.node.frontmatter;

                            return (
                                <div
                                    key={`proc2${index}`}
                                    style={{backgroundColor: "#f4f5fa"}} 
                                    className="card h-100">
                                    <img 
                                        src={thumbnail.image.childImageSharp.fluid.src} 
                                        className="card-img-top" 
                                        alt={thumbnail.alt} 
                                        />
                                    <div 
                                        className="card-body">
                                        <h3 className="card-title text-center">{title}</h3>
                                        <ul 
                                            className="pl-0 text-left pb-3"
                                            style={{listStylePosition: "inside", color: "#17a4d6", fontSize: "25px", lineHeight: "25px"}}>
                                            {
                                                _items.map((item2, index) => (
                                                        <li 
                                                            key={`cont${index}`}>
                                                            <span
                                                                className="text-muted" 
                                                                style={{color: "initial", fontSize: "initial"}}>
                                                                {item2.name}
                                                            </span>
                                                        </li>
                                                )) 
                                            }
                                        </ul>
                                        <div className="d-flex mb-4">
                                            <ButtonMore 
                                                className="btn btn-sm btn-info text-capitalize px-4 font-weight-bold mx-auto"
                                                to={item.node.fields.slug} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query ProceduresQuery {
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
      `}
      render={(data, count) => <Procedures data={data} count={count} title="Procedimientos" {...props} />}
    />
  )