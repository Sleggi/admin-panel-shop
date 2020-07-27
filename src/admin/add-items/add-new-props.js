import React, { useContext } from 'react';
import { Field, FieldArray, Formik } from 'formik';
import './add-new-props.css';
import { ItemPropertyContext } from '../contexts/add-item-propety-context';




const AddNewProps = () => {
    // Начальное состояние массива с опциями
    const { InnerOptions, setOptions } = useContext(ItemPropertyContext)


    // Начальные значения для формика FieldArray
    const arrayValues = {
        newArrayValues: [''],

    }



    return (
        <Formik
            initialValues={arrayValues}
        >
            <>
                <div className="form-control-selector">
                    <label htmlFor="description">Свойство</label>
                    <Field className='selector' as='select' id='selector' name='selector' >
                        {
                            InnerOptions.map(option => {
                                return (
                                    <option key={option.key} value={option.name}>{option.name}</option>
                                )
                            })
                        }
                    </Field>
                </div>
                <div className="form-control-adding-options">
                    <>
                        <FieldArray name='newArrayValues'>
                            {
                                fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps
                                    const { values } = form
                                    const { newArrayValues } = values
                                    {/* Установка нового состояния для массива с опциями. Опции из массива FieldArray */ }
                                    function optionsFromValues() {
                                        setOptions(newArrayValues.map((str, index) => ({ key: (index + 1), name: str })))
                                    }
                                    {/* Удаление опций */ }
                                    const removeOption = (index) => {
                                        setOptions(InnerOptions.filter(option => option.key !== index))
                                        alert('Опция удалена')
                                        remove(index)
                                    }
                                    return (
                                        <>
                                            <div className='form-control-array-input'>
                                                <label>Значение</label>
                                                {newArrayValues.map((newArrayValue, index) => (
                                                    <div className='form-control-array-manip' key={index}>
                                                        <Field name={`newArrayValues[${index}]`} onKeyUp={optionsFromValues} />

                                                        {index > 0 && (<button className='manip-prop-minus' type='button' onClick={() => removeOption(index)}>-</button>)}
                                                        {/* Добавление новых полей ввода в FieldArray */}
                                                        {index === 0 && (<button className='manip-prop-plus' type='button' onClick={() => { if (newArrayValues.length < 4) push(index) }}>+</button>)}

                                                    </div>))}
                                            </div>
                                        </>
                                    )
                                }
                            }
                        </FieldArray>
                    </>
                </div>
            </>
        </Formik>
    )
}



export default AddNewProps








