import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid'; // генерация id
import AddNewProps from '../add-items/add-new-props';


export const ItemPropertyContext = createContext()


const AddItemPropProvider = (props) => {

    // Состояние опций
    const [InnerOptions, setOptions] = useState([
        {
            key: 0,
            name: "",
        }
    ])



    // Состояние добавления компонента AddNewProps
    const [propertyes, setPropertyes] = useState([{
        component: <AddNewProps />,
        id: uuidv1(),

    }])


    // Функция установки setPropertyes 
    const setProp = () => {
        setPropertyes([...propertyes, { component: <AddNewProps />, id: uuidv1() }])
    }

    // Функция удаления Prop
    const removeProp = (id) => {
        setPropertyes(propertyes.filter(prop => prop.id !== id))
        alert('Свойство удалено')
    }




    return (
        <ItemPropertyContext.Provider value={{ setProp, propertyes, removeProp, InnerOptions, setOptions }}>
            {props.children}
        </ItemPropertyContext.Provider>)
}


export default AddItemPropProvider
