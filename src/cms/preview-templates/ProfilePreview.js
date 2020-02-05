import React from 'react'
import PropTypes from 'prop-types'
import { ProfileTemplate } from '../../templates/profile';

const ProfilePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();
    const {
        alt, 
        altMobile, 
        networks,
        image,
        imageMobile,
        description,
        drName
    } = data;
    return (
        <ProfileTemplate 
            alt={alt}
            altMobile={altMobile} 
            networks={networks}
            image={image}
            imageMobile={imageMobile}
            description={description}
            drName={drName} />
    )
}

ProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProfilePreview
