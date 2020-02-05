import React from 'react'
import PropTypes from 'prop-types'
import { BlogPost2Template } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    console.log('data :', data);
    const {altCover, date, title, author} = data;
    const image = data.coverImage;
    const body = data.html;

    return (
      <>
      BlogPostPreview
        {/* <BlogPost2Template 
            altCover={altCover} 
            date={date} 
            title={title} 
            author={author} 
            image={image} 
            body={body}
        /> */}
      </>
    )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
