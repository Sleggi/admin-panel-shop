import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllItems from './all-items/all-items';
import AllItemsProperty from './all-items-property/all-items-property';
import './admin-panel.css';
import AddItems from './add-items/add-items';
import AddProperty from './add-property/add-property';
import { NavigationRoute } from './navigation/navigation-route'; // для добавления navbar определенным компонентам из дерева
import AddPropertyProvider from './contexts/add-property-context';
import AddItemProvider from './contexts/add-item-context';
import ItemCard from '../item-card-component/item-card';
import AddItemPropProvider from './contexts/add-item-propety-context';




export default function () {
    // Роуты для админ панели с провайдерами для передачи данных по дереву
    return (
        <Router>
            <div className="admin-panel">
                <Route>
                    <Switch>
                        <AddItemProvider>
                            <AddPropertyProvider>
                                <AddItemPropProvider>
                                    <NavigationRoute exact path='/admin' component={AllItems} />
                                    <Route path='/admin/add-items' component={AddItems} />

                                    <NavigationRoute exact path='/admin/property' component={AllItemsProperty} />
                                    <Route path='/admin/add-property' component={AddProperty} />

                                    <Route path='/card' component={ItemCard} />
                                </AddItemPropProvider>
                            </AddPropertyProvider>
                        </AddItemProvider>
                    </Switch>
                </Route>
            </div>
        </Router>
    )
}