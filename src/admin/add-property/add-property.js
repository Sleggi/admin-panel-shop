import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import './add-property.css';
import { PropContext } from '../contexts/add-property-context';
import { v1 as uuidv1 } from 'uuid';








const AddProperty = () => {

    // Массив с проперти 
    const { prop } = useContext(PropContext)

    // По отправке формы
    const handleSubmit = value => {
        prop.push(value)
        alert('Проперти добавлен')
    }

    // Начальные значения для формика
    const initialValues = {
        propName: '',
        propType: '',
        id: uuidv1()
    }

    // Опции для радио кнопок
    const options = [
        { key: 'option 1', value: 'Dropdown' },
        { key: 'option 2', value: 'String' },
        { key: 'option 3', value: 'Number' },

    ]

    return (
        <div className="page">
            <div className="add-property-card">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="add-items-buttons">
                            <Link exact to='/admin/property'><button className='main-button button-back' type='button'>Вернуться</button></Link>
                            <button className='main-button button-save' type='submit'>Сохранить</button>
                        </div>
                        <div className="add-property-content">
                            <div className="add-property-heading">
                                <h1>Добавление свойства</h1>
                            </div>
                            <div className="form-control-text">
                                <label htmlFor="propName">Название свойства</label>
                                <Field type='text' id='propName' name='propName' ></Field>
                            </div>
                            <div className="form-control-radio">
                                <label htmlFor="propType">Укажите тип свойства</label>
                                <Field name='propType' >
                                    {
                                        ({ field }) => {
                                            return options.map(option => {
                                                return (
                                                    <div key={option.key} className='add-property-radio'>
                                                        <input className='add-property-radio-option'
                                                            type='radio'
                                                            id={option.value}
                                                            {...field}
                                                            value={option.value}
                                                            checked={field.value === option.value} />
                                                        <label className='add-property-radio-label' htmlFor={option.value}>{option.value}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    }
                                </Field>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddProperty












