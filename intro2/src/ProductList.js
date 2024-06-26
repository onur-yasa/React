import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>unitPrice</th>
                <th>quantityPerUnit</th>
                <th>unitsInStock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}
