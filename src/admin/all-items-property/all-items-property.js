import React, { useContext, useState } from 'react';
import './all-items-property.css';
import useSortableData from '../all-items/useSortableData';
import { Link } from 'react-router-dom';
import { PropContext } from '../contexts/add-property-context';
import Pagination from '../pagination-component/pagination';




export default function () {


    // Добавленные проперти и удаление проперти
    const { prop, removeProp } = useContext(PropContext)


    // Стейт текущей страницы пагинации
    const [currentPage, setCurrentPage] = useState(1);
    // Количество отображаемых итемов на странице
    const [itemsPerPage] = useState(4);

    // Переменные проперти для пагинации
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = prop.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = pageNumber => setCurrentPage(pageNumber)


    // Сортировка данных
    const { items, requestSort } = useSortableData(currentItems);


    return (
        <div className="page">
            <div className="card">
                <div className="all-items-property-content">
                    <button className='main-button add-item'> <Link exact to='/admin/add-property'>Добавить проперти</Link></button>
                    <div className="table-container">
                        <table id='table'>
                            <thead>
                                <th><button className='sort-button' onClick={() => requestSort('name')}
                                ></button>
                                Перечень проперти </th>
                                <th>Тип</th>
                                <th>Управление</th>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.propName}</td>
                                        <td>{item.propType}</td>

                                        <td className='operation'>
                                            <span onClick={() => { removeProp(item.id) }} >Удалить</span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <Pagination paginate={paginate} itemsPerPage={itemsPerPage} totalLength={prop.length} />
                </div>
            </div>
        </div>
    )
}