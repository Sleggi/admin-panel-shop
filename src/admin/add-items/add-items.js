import React, { useState, useContext } from 'react';
import './add-items.css';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'
import { ItemContext } from '../contexts/add-item-context'
import FileUpload from './file-upload-component/file-upload'
import { v1 as uuidv1 } from 'uuid';
import { ItemPropertyContext } from '../contexts/add-item-propety-context';



const AddItems = () => {



    // Добавление товару новых свойств
    const { setProp, propertyes, removeProp, InnerOptions } = useContext(ItemPropertyContext)


    // Массив с предметами 
    const { newItems } = useContext(ItemContext)


    // Установка даты
    let today = new Date()
    let currentDate = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    const [date, setDate] = useState(currentDate)


    // Начальные значения 
    const initialValues = {
        name: '',
        price: '',
        date: date,
        file: '',
        description: '',
        id: uuidv1(),
        InnerOptions,
        InnerOptions2: [],
        InnerOptions3: []
    }


    // По отправке формы
    const handleSubmit = (values) => {
        if (values.name.length > 0 && values.price.length > 0) {
            setDate()
            values.InnerOptions = InnerOptions
            newItems.push(values)
            alert('Товар добавлен')
            console.log(newItems)
        } else alert('Введите название товара и укажите цену')
    }


    return (

        <div className="page">
            <div className="add-items-card">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {(formProps) => (
                        <Form>
                            <div className="add-items-buttons">
                                <Link exact to='/admin'><button className='main-button button-back' type="button">Вернуться</button></Link>
                                <button className='main-button button-save' type='submit' >Сохранить</button>
                            </div>

                            <div className="add-items-content">
                                <div className="add-items-heading">
                                    <h1>Добавление товара</h1>
                                </div>

                                <div className="form-control-text">
                                    <label htmlFor="name">Название товара</label>
                                    <Field type='text' id='name' name='name' ></Field>
                                </div>

                                <div className="form-control-text">
                                    <label htmlFor="price">Цена товара</label>
                                    <Field type='text' id='price' name='price' ></Field>
                                </div>

                                <div className="form-control-file">
                                    {/* Компонент по загрузке изображения */}
                                    <FileUpload formProps={formProps} />
                                </div>

                                <div className="form-control-description">
                                    <label htmlFor="description">Описание</label>
                                    <Field className='textarea' as='textarea' id='description' name='description' ></Field>
                                </div>

                                <div className='adding-new-props'>
                                    <h1>Добавление товару свойств</h1>
                                    <button className='manip-prop-plus' type="button"
                                        onClick={() => setProp()}>+</button>
                                </div>

                                {propertyes.map(prop => {
                                    return (
                                        <div className="new-props-popup" key={prop.id}>
                                            <button className='manip-prop-minus popup-minus' type='button' onClick={() => { removeProp(prop.id) }}>-</button>
                                            {prop.component}
                                        </div>
                                    )
                                })}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>

    )
}

export default AddItems