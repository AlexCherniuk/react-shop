import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-resoult">В наявності  {this.props.count}  товарів</div>
                <div className="filter-sort">
                    {" "}
                    Сортувати
                    {" "} 
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="latest">Популярні  </option>
                        <option value="low_price">Спочатку дешевші</option>
                        <option value="hight_price">Спочатку дорожчі</option>
                    </select>
                </div>
                <div className="filter-category">Фільтр  {" "}
                <select value={this.props.filter} onChange={this.props.filterProducts}>
                        <option value="">Усі</option>
                        <option value="M">М'ясні вироби</option>
                        <option value="S">Сало</option>
                        <option value="K">Ковбаси</option>
                    </select>
                </div>
            </div>
        )
    }
}
 