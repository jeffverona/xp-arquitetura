import Contact from './containers/contact';
import Home from './containers/home';
import Product from './containers/product';
import ProductList from './containers/productList';

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
