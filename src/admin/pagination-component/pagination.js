import React from 'react'
import { NavLink } from 'react-router-dom'
import './pagination.css'



const Pagination = ({ itemsPerPage, totalLength, paginate }) => {
    // Массив с страницами
    const pageNumbers = [];
    // Добавление страниц в массив 
    for (let i = 1; i <= Math.ceil(totalLength / itemsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (

        <div className="pagination">
            <ul className='pagination-list'>
                {/* Для каждой страницы добавляем добавляем линк */}
                {pageNumbers.map(number => (
                    <li key={number} className='page-number'>
                        <NavLink onClick={() => paginate(number)} to='#' className='page-link'>
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;