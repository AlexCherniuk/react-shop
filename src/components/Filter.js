import React from 'react'

export default function Filter (props) {
        return (
            <div className="filter">
                <div className="filter-resoult">В наявності  {props.count}  товарів</div>
                <div className="filter-sort">
                    {" "}
                    Сортувати
                    {" "} 
                    <select value={props.sort} onChange={props.sortProducts}>
                        <option value="latest">Популярні  </option>
                        <option value="low_price">Спочатку дешевші</option>
                        <option value="hight_price">Спочатку дорожчі</option>
                    </select>
                </div> 
                <div className="filter-category">Фільтр  {" "}
                <select value={props.filter} onChange={props.filterProducts}>
                        <option value="">Усі</option>
                        <option value="M">М'ясні вироби</option>
                        <option value="S">Сало</option>
                        <option value="K">Ковбаси</option>
                    </select>
                </div>
            </div>
        )
    }