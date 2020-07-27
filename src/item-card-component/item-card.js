import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './item-card.css'
import { ItemContext } from '../admin/contexts/add-item-context';
import image from '../files/image.png';
import noImage from '../files/no-img.png';


export default function ItemCard() {

    // Предметы 
    const { newItems } = useContext(ItemContext)


    return (
        <div className="page">
            <div className="item-card">
                <div className="item-card-content">
                    <div className="back-link">
                        <Link to='/admin'>Вернуться</Link>
                    </div>
                    {/* Для каждого предмета из массива будем создавать свою карточку товара */}
                    {
                        newItems.map((item) => {
                            return (
                                <div className="one-item-container" key={item.id}>
                                    <div className="left-side">
                                        <div className="card-image">
                                            <img src={item.id === 0 ? image : item.file || noImage} alt="" />
                                        </div>

                                        <div className="item-card-selector">
                                            <h2 className='card-select-heading'>Цвет авто</h2>
                                            <div className="select-container">
                                                <select id="selector">
                                                    {item.InnerOptions.map(option => {
                                                        console.log(item.InnerOptions)
                                                        return (

                                                            <option key={option.key} value={option.name}>{option.name}</option>
                                                        )
                                                    })}

                                                </select>
                                            </div>
                                        </div>

                                        {
                                            item.InnerOptions2.length ?
                                                <div className="property-1">
                                                    <h1>Год выпуска</h1>
                                                    {item.InnerOptions2.map(option => {
                                                        return (
                                                            <p key={option.key}>{option.name}</p>
                                                        )
                                                    })}
                                                </div> : null
                                        }

                                        {
                                            item.InnerOptions3.length ?
                                                <div className="property-1">
                                                    <h1>Год выпуска</h1>
                                                    {item.InnerOptions3.map(option => {
                                                        return (
                                                            <p key={option.key}>{option.name}</p>
                                                        )
                                                    })}
                                                </div> : null
                                        }
                                        <div className="property-3">
                                            <h1>Стоимость</h1>
                                            <h2>{item.price}</h2>
                                        </div>

                                    </div>
                                    <div className="right-side">
                                        <h1 className="card-item-name">{item.name}</h1>
                                        <div className="card-item-description">
                                            <p>{item.description}</p>
                                        </div>
                                        <button className='main-button buy'>Беру</button>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}
