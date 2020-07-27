import React, { useState, createContext } from 'react';



export const ItemContext = createContext();



const AddItemProvider = (props) => {

    // состояние для новых предметов 
    const [newItems, setNewItems] = useState([
        {
            name: 'Mercedes S550 4matic', price: '118 000 $', date: '01.01.2018', description: 'Какой-то текст', id: 0,
            InnerOptions: [{ key: 0, name: "Красный", }, { key: 1, name: 'Синий' }], InnerOptions2: [{ key: 0, name: '2017' }],
            InnerOptions3: [{ key: 0, name: 'Бензин' }]
        }

    ])


    // функция для удаление предметов
    const removeItems = (id) => {
        setNewItems(newItems.filter(item => item.id !== id))
        alert('Товар удален')
    }

    // возвращаем провайдер, передаем данные child компонентам из props
    return (
        <ItemContext.Provider value={{ removeItems, newItems }}>
            {props.children}
        </ItemContext.Provider>);
}

export default AddItemProvider;