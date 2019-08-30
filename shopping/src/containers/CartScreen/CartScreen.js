import React, { Component } from 'react'


export default class CartScreen extends Component {
    render() {
        return (
            <section>
               
              <div className="table-responsive">
                  <table className="table product-table">
                      <thead>
                          <tr>
                              <th></th>
                              <th>Sản Phẩm</th>
                              <th>Giá</th>
                              <th>Số Lượng</th>
                              <th>Tổng Cộng</th>
                              <th>Xóa</th>
                          </tr>
                      </thead>
                      <tbody>

                      </tbody>
                  </table>
              </div>
            </section>
        )
    }
}
