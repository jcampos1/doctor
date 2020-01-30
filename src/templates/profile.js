import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import showdown from 'showdown';

const converter = new showdown.Converter()

export const ProfileTemplate = ({
  alt, 
  altMobile, 
  networks,
  image,
  imageMobile,
  description,
  drName
}) => {
  return (
    <section
      id="profile" 
      className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
        <img 
            style={{objectFit: "cover", height: "fit-content"}}
            className="img-fluid jumbo__cover w-100 position-relative d-none d-md-block"
            src={image}
            alt={alt} />
        <img 
            style={{objectFit: "cover"}}
            className="img-fluid jumbo__cover w-100 position-relative d-md-none"
            src={imageMobile}
            alt={altMobile} />
        <div
            className="profile__content">
            <Feature2 
                title={drName}
                className=""
                primaryColor="white"
                style={{color: "white"}} />
            <div
                className="profile__content-text mt-0 mt-sm-2 mt-md-5">
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }} />
                <SocialNetworks 
                    networks={networks}
                    isSimple={false} />
            </div>
        </div>
    </section>
  )
}

const Profile = ({
    drName,
    location,
    data
}) => {
    const { alt, altMobile, networks, description } =  data.markdownRemark.frontmatter;
    const image = data.markdownRemark.frontmatter.image.childImageSharp.fluid.src;
    const imageMobile = data.markdownRemark.frontmatter.imageMobile.childImageSharp.fluid.src;

  return (
    <TemplateWrapper2 location={location}>
        <ProfileTemplate 
          alt={alt}
          altMobile={altMobile}
          networks={networks}
          image={image}
          imageMobile={imageMobile}
          description={description}
          drName={drName}
        />
    </TemplateWrapper2>
  )
}

Profile.defaultProps = {
    drName: "Dra CAROLINA CARVAJAL"
}

export default Profile

export const profilePageQuery = graphql`
  query ProfilePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            } 
          }
          alt
        imageMobile {
            childImageSharp {
                fluid(maxWidth: 375) {
                ...GatsbyImageSharpFluid
                }
            } 
        }
        altMobile
        description
        networks { 
            wathsapp
            instagram
            youtube
            facebook
          }
      }
    }
  }
`