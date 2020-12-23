import React, { Component } from 'react'
import Filter from './components/Filter'
import Products from './components/Products'
import data from './data.json'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: data.products,
      filter: "",
      sort: ""
    };
  }
  category
  /* фильтруем продукты по типу - Сало , Мясо, Колбаса  -  */
  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        products: data.products,
        filter: event.target.value
      })
    } else {
      this.setState({
        filter: event.target.value,
        products: data.products.filter(product => product.category.indexOf(event.target.value) >= 0)
      })
    };

  }
  /* coртируем продукты -  */
 
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "low_price"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "hight_price"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
              ? 1
              : -1
      ),
    }))

  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                filter={this.state.filter}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>
          All right is reserved.
      </footer>
      </div>

    )
  }
}
