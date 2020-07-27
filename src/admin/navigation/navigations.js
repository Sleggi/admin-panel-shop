import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';


// навигация по админ панели
export default function () {
    return (

        <nav>

            <div className="navigation-list">
                <NavLink exact to='/admin' activeClassName='active-link'>
                    <div className='nav-element'>Листинг товаров</div>
                </NavLink>
                <NavLink exact to='/admin/property' activeClassName='active-link'>
                    <div className='nav-element'>Листинг проперти</div>
                </NavLink>
            </div>


        </nav>
    )
}