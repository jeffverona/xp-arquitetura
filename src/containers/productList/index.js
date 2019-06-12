import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.products = [];
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('http://5cfff8bcd691540014b0e366.mockapi.io/product')
      .then((response) => {
        this.setState({products: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getProductDetail(id) {
    axios.get(`http://5cfff8bcd691540014b0e366.mockapi.io/product/${id}`)
      .then((response) => {
        this.props.history.push({
          pathname: '/product',
          state: {detail: response.data}
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {products} = this.state;

    return (
      <Fragment>
        <h2>Lista de Produtos</h2>

        {!!products.length && (
            <table>
              <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Valor</th>
              </tr>
              </thead>

              <tbody>
              {products.map(item => (
                <tr key={item.id.toString()} onClick={() => this.getProductDetail(item.id)}>
                  <td>{item.id}</td>
                  <td>{item.product}</td>
                  <td>R$ {item.value.toFixed(2)}</td>
                </tr>
              ))}
              </tbody>
            </table>
          )
        }
      </Fragment>
    );
  }
}

export default ProductList;
