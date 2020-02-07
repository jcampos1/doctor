import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
// // import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProfilePreview from './preview-templates/ProfilePreview';
import ProcedurePostPreview from './preview-templates/ProcedurePostPreview';
import ProductPostPreview from './preview-templates/ProductPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('landing', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('profile', ProfilePreview)
CMS.registerPreviewTemplate('procedure', ProcedurePostPreview)
CMS.registerPreviewTemplate('product', ProductPostPreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)