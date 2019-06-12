import React from 'react';

const Product = (props) => {
  const product = props.location.state.detail;

  return (
    <article>
      <header>
        <h2>Nome do Produto: {product.product}</h2>

        <img src={product.imageUrl} alt={`product-${product.id}`}/>
      </header>

      <main>
        <p>ID: {product.id}</p>

        <p>Valor: R$ {product.value.toFixed(2)}</p>

        <p>Descrição:  {product.description}</p>
      </main>
    </article>
  );
};

export default Product;
