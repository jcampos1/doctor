import React from 'react'
import PropTypes from 'prop-types'
import { ProcedurePostTemplate } from '../../templates/procedure-post';

const ProductPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();
    console.log('data ProductPostPreview:', data);

    return (
        <div>
            pagina de producto
        </div>
    )
}

ProductPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPostPreview
