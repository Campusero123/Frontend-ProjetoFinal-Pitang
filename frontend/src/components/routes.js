import React from 'react'
import  Header  from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../../src/App';
import Agendamentos from '../pages/Agendamentos';
import Consultas from '../pages/Consultas';
import Sobre from '../pages/Sobre';
import Footer from './Footer';


const routes = [{
    path: '/',
    component: App,
    name: 'Home',
    exact: true,
}, {
    path: '/agendamentos',
    component: Agendamentos,
    name: 'Agendamentos',
    exact: true,
}, {
    path: '/consultas',
    component: Consultas,
    name: 'Consultas',
    exact: true,
}, {
    path: '/sobre',
    component: Sobre,
    name: 'Sobre',
    exact: true,
}];

const Routes = () => (
     <BrowserRouter>
        <Header title='Vacina Fácil COVID-19' routes={routes}/>
        <Switch>
            {routes.map(({component, path, exact}) => (
                <Route 
                key={path}
                path={path} 
                exact={exact} 
                component={component} 
                />
            ))}
            
        </Switch>
        <Footer />
     </BrowserRouter>
)

export default Routes;