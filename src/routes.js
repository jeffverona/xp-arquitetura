import Contact from './containers/contact/index.jsx';
import Home from './containers/home/index.jsx';
import Product from './containers/product/index.jsx';
import ProductList from './containers/productList/index.jsx';

export default [
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/product-list',
    component: ProductList
  }
];
