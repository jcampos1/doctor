import React from 'react'
import PropTypes from 'prop-types'
import { ProcedurePostTemplate } from '../../templates/procedure-post';

const ProcedurePostPreview = ({ entry, widgetFor }) => {
    console.log('entry.getIn:', entry.getIn(['data']).toJS());
    const data = entry.getIn(['data']).toJS();
    const { title, cover, procedures: items } = data;
    const image = cover.image;

    return (
        <ProcedurePostTemplate 
            title={title}
            cover={cover}
            procedures={items}
            image={image}/>
    )
}

ProcedurePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProcedurePostPreview
