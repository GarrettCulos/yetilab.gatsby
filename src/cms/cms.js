import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ArticlePreview from './preview-templates/articlePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('articles', ArticlePreview);
