import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFourPage from './pages/NotFourPage/NotFourPage';


const routes = [
    {
        path :'/',
        exact : true,
        main: () => <HomePage/>
    },
    {
        path :'',
        exact :false,
        main :() => <NotFourPage/>
    }
];
 export default routes;