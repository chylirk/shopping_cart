import React from "react";

const Cart = (props) => {
  const products = props.products || [];
  let total = products.reduce((acc, val) => {
    acc += val.price * val.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartContents(products)}
      <a className="button checkout disabled">Checkout</a>
    </div>
  );
};

const cartContents = (products) => {
  if (products.length === 0) {
    return (
      <>
        <p>"Your cart is empty"</p>
        <p>Total: $0</p>
      </>
    );
  }

  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Amazon Kindle E-reader</td>
          <td>2</td>
          <td>$79.99</td>
        </tr>
        <tr>
          <td>Apple 10.5-Inch iPad Pro</td>
          <td>1</td>
          <td>$649.99</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: $729.98
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Cart;
