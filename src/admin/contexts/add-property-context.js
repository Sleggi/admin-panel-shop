import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid'; // генерация id 


export const PropContext = createContext();



const AddPropertyProvider = (props) => {

    // состояние для новых проперти
    const [prop, setProp] = useState([
        { propName: 'Цвет авто', propType: 'dropdown', id: uuidv1() },
    ])



    // функция удаления проперти по id
    const removeProp = (id) => {
        setProp(prop.filter(prop => prop.id !== id))
        alert('Свойство удалено')
    }


    return (
        <PropContext.Provider value={{ prop, removeProp }}>
            {props.children}
        </PropContext.Provider>
    )
}

export default AddPropertyProvider;