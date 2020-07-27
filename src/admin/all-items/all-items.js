import React, { useContext, useState } from 'react';
import './all-items.css';
import useSortableData from './useSortableData';
import { Link } from 'react-router-dom';
import { ItemContext } from '../contexts/add-item-context';
import Pagintaion from '../pagination-component/pagination';








export default function AllItems() {


    // Массив с предметами и удаление предмета из провайдера
    const { newItems, removeItems } = useContext(ItemContext)


    // Стейт текущей страницы пагинации
    const [currentPage, setCurrentPage] = useState(1);
    // Количество отображаемых итемов на странице
    const [itemsPerPage] = useState(4);

    // Переменные товаров для пагинации
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newItems.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = pageNumber => setCurrentPage(pageNumber)




    // Хук для сортировки
    const { items, requestSort } = useSortableData(currentItems);

    return (
        <div className="page">
            <div className="card">
                <div className="all-items-content">
                    <div className="navigation-buttons">
                        <button className='main-button ' type='button'><Link exact to='/card'>Просмотр товаров</Link></button>
                        <button className='main-button' type='button'><Link exact to='/admin/add-items'>Добавить товар</Link></button>
                    </div>
                    <div className="table-container">
                        <table id='table'>
                            <thead>
                                <th><button className='sort-button' onClick={() => requestSort('name')}
                                ></button>
                                Перечень товаров </th>
                                <th>Стоимость</th>
                                <th>Дата изменения</th>
                                <th>Управление</th>
                            </thead>
                            <tbody>
                                {/* Для каждого предмета из массива создаем таблицу */}
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <td className='item-link'><Link exact to='/card'>{item.name}</Link></td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td className='operation'>
                                            <span onClick={() => { removeItems(item.id) }} style={{ cursor: 'pointer' }}>Удалить</span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagintaion paginate={paginate} itemsPerPage={itemsPerPage} totalLength={newItems.length} />
                </div>
            </div>
        </div>
    )

}